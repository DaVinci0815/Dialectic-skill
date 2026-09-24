/**
 * Dialectic Scout - 轻量级竞品与产品情报嗅探器
 * 核心原则：零内存占用 (Zero-Memory Overhead)，多级容错兜底，原生极速解析。
 */

export interface ScoutResult {
  url: string;
  title: string;
  content: string;
  charCount: number;
  extractedAt: string;
  method: 'native-distill' | 'cloud-reader';
}

export class ProductScout {
  private timeoutMs: number;

  constructor(timeoutMs = 15000) {
    this.timeoutMs = timeoutMs;
  }

  /**
   * 嗅探并提取指定产品/竞品网页的核心内容与结构化 Markdown
   * 策略：默认优先原生直连提取 (100% 独立、无依赖、防封锁)，若配置了 JINA_API_KEY 则走增强通道
   */
  public async scoutUrl(targetUrl: string): Promise<ScoutResult> {
    let validUrl: URL;
    try {
      validUrl = new URL(targetUrl);
    } catch {
      throw new Error(`无效的 URL 格式: ${targetUrl}`);
    }

    // 优先尝试原生独立抓取与提炼
    try {
      return await this.scoutDirect(validUrl.toString());
    } catch (directErr: any) {
      // 若原生抓取失败，且有云端 Token，尝试云端降级
      if (process.env.JINA_API_KEY) {
        return await this.scoutViaJina(validUrl.toString());
      }
      throw new Error(`情报嗅探失败: ${directErr.message || String(directErr)}`);
    }
  }

  /**
   * 原生独立抓取：标准 HTTP fetch + 智能 HTML 去噪蒸馏 (毫秒级、0 外部依赖)
   */
  private async scoutDirect(url: string): Promise<ScoutResult> {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), this.timeoutMs);

    try {
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'User-Agent':
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
          Accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
          'Accept-Language': 'zh-CN,zh;q=0.9,en;q=0.8',
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        throw new Error(`HTTP ${response.status} ${response.statusText}`);
      }

      const html = await response.text();
      return this.distillHtml(url, html);
    } catch (err: any) {
      clearTimeout(timeoutId);
      if (err.name === 'AbortError') {
        throw new Error(`请求超时 (${this.timeoutMs / 1000} 秒)`);
      }
      throw err;
    }
  }

  /**
   * HTML 智能去噪与 Markdown 提炼引擎
   */
  private distillHtml(url: string, html: string): ScoutResult {
    // 1. 提取 Title
    const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
    const title = titleMatch ? this.cleanHtmlEntities(titleMatch[1].trim()) : '未命名产品页面';

    // 2. 剥离无意义噪音标签
    let body = html
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '')
      .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, '')
      .replace(/<svg\b[^<]*(?:(?!<\/svg>)<[^<]*)*<\/svg>/gi, '')
      .replace(/<noscript\b[^<]*(?:(?!<\/noscript>)<[^<]*)*<\/noscript>/gi, '')
      .replace(/<!--[\s\S]*?-->/g, '');

    // 优先提取 <main> 或 <article>，若没有则取 <body>
    const mainMatch = body.match(/<(main|article)\b[^>]*>([\s\S]*?)<\/\1>/i);
    if (mainMatch) {
      body = mainMatch[2];
    } else {
      const bodyMatch = body.match(/<body\b[^>]*>([\s\S]*?)<\/body>/i);
      if (bodyMatch) {
        body = bodyMatch[1];
      }
    }

    // 3. 结构化转换为 Markdown
    let md = body
      .replace(/<h1\b[^>]*>([\s\S]*?)<\/h1>/gi, '\n\n# $1\n\n')
      .replace(/<h2\b[^>]*>([\s\S]*?)<\/h2>/gi, '\n\n## $1\n\n')
      .replace(/<h3\b[^>]*>([\s\S]*?)<\/h3>/gi, '\n\n### $1\n\n')
      .replace(/<h4\b[^>]*>([\s\S]*?)<\/h4>/gi, '\n\n#### $1\n\n')
      .replace(/<li\b[^>]*>([\s\S]*?)<\/li>/gi, '\n- $1')
      .replace(/<p\b[^>]*>([\s\S]*?)<\/p>/gi, '\n\n$1\n\n')
      .replace(/<br\s*[\/]?>/gi, '\n')
      .replace(/<a\b[^>]*href="([^"]*)"[^>]*>([\s\S]*?)<\/a>/gi, '[$2]($1)')
      .replace(/<[^>]+>/g, ' '); // 清除剩余所有 HTML 标签

    // 4. 清洗 HTML 转义符与空白
    md = this.cleanHtmlEntities(md);
    md = md
      .replace(/[ \t]+/g, ' ')
      .replace(/\n\s*\n\s*\n/g, '\n\n')
      .trim();

    // 限制单篇最大字符量
    const MAX_CHARS = 10000;
    if (md.length > MAX_CHARS) {
      md = md.slice(0, MAX_CHARS) + `\n\n*(内容过长，已截取前 ${MAX_CHARS} 字符核心正文)*`;
    }

    return {
      url,
      title,
      content: md,
      charCount: md.length,
      extractedAt: new Date().toISOString(),
      method: 'native-distill',
    };
  }

  private cleanHtmlEntities(text: string): string {
    return text
      .replace(/&nbsp;/g, ' ')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&quot;/g, '"')
      .replace(/&#39;/g, "'")
      .replace(/&copy;/g, '©');
  }

  /**
   * 云端 Reader 备用通道 (支持 JINA_API_KEY)
   */
  private async scoutViaJina(url: string): Promise<ScoutResult> {
    const jinaUrl = `https://r.jina.ai/${url}`;
    const headers: Record<string, string> = {
      'User-Agent': 'DialecticScout/4.0',
    };
    if (process.env.JINA_API_KEY) {
      headers['Authorization'] = `Bearer ${process.env.JINA_API_KEY}`;
    }

    const response = await fetch(jinaUrl, { headers });
    if (!response.ok) {
      throw new Error(`云端 Reader 异常: HTTP ${response.status}`);
    }

    const text = await response.text();
    return {
      url,
      title: '云端蒸馏情报',
      content: text.slice(0, 10000),
      charCount: text.length,
      extractedAt: new Date().toISOString(),
      method: 'cloud-reader',
    };
  }
}
