import fs from 'node:fs';
import path from 'node:path';
import { runMcpServer } from './server.js';
import { LedgerStore } from './store.js';

async function main() {
  const args = process.argv.slice(2);
  const command = args[0] || 'mcp';

  if (command === 'mcp') {
    // 默认或显式启动 MCP Server
    await runMcpServer();
    return;
  }

  const store = new LedgerStore();

  if (command === 'board') {
    const stats = store.getStats();
    const debts = store.getDebts();
    const paths = store.getPaths();

    console.log(`
┌──────────────────────────────────────────────────────────────┐
│                   🛡️  DIALECTIC · 驳真战绩看板                 │
└──────────────────────────────────────────────────────────────┘
  📁 账本路径: ${paths.baseDir}
  🕒 系统时间: ${new Date().toISOString().replace('T', ' ').slice(0, 16)}

  【实战预测概览】
  - 待观察预测 (Active Pending)   : ${stats.activePending} 条
  - 逾期未对账 (Overdue Debt)     : ${stats.overdue > 0 ? `\x1b[31m${stats.overdue} 条 ⚠️ (存在坏账债务)\x1b[0m` : `0 条 ✅`}
  - 已归档结案 (Archived Total)   : ${stats.archived} 条

  【统计科学看板】
  - 累计归档总样本               : ${stats.archived}
  - 有效结案样本 (命中 + 失误)   : ${stats.verified + stats.falsified} ${stats.verified + stats.falsified < 20 ? '(早期积累期，置信区间过宽)' : '(具备统计参考价值)'}
  - 预测命中率 (Hit Rate)        : ${stats.hitRate !== null ? `\x1b[32m${stats.hitRate.toFixed(1)}%\x1b[0m` : '-'}
  - 验证命中次数                 : ${stats.verified}
  - 预测失误次数 (打脸记录)      : ${stats.falsified}
  - 方案未执行率                 : ${stats.unimplementedRate.toFixed(1)}% (${stats.unimplemented} 次)
  - 外部干扰率                   : ${stats.externalDisruptionRate.toFixed(1)}% (${stats.externalDisruption} 次)
  - 样本不足率                   : ${stats.insufficientSampleRate.toFixed(1)}% (${stats.insufficientSample} 次)
`);

    if (debts.overdue.length > 0) {
      console.log(`\x1b[33m  ⚠️ 【待清算坏账清单】\x1b[0m`);
      for (const d of debts.overdue) {
        console.log(`  - [${d.id}] 到期日: ${d.windowEnd} | 目标: ${d.target} | 预测: ${d.prediction}`);
      }
      console.log(``);
    }
    return;
  }

  if (command === 'list') {
    const debts = store.getDebts();
    console.log(`\n📋 【待观察预测 (${debts.activePending.length} 条)】`);
    for (const p of debts.activePending) {
      console.log(`  - [${p.id}] 截止: ${p.windowEnd} | 方案: ${p.target} | 预测: ${p.prediction}`);
    }

    if (debts.overdue.length > 0) {
      console.log(`\n\x1b[31m⚠️ 【逾期未对账坏账 (${debts.overdue.length} 条)】\x1b[0m`);
      for (const o of debts.overdue) {
        console.log(`  - [${o.id}] 到期: ${o.windowEnd} | 方案: ${o.target} | 预测: ${o.prediction}`);
      }
    } else {
      console.log(`\n✅ 无逾期坏账。`);
    }
    console.log(``);
    return;
  }

  if (command === 'init') {
    // 自动在当前工作区生成或更新 Cursor MCP 配置
    const cursorDir = path.join(process.cwd(), '.cursor');
    const mcpJsonPath = path.join(cursorDir, 'mcp.json');

    try {
      if (!fs.existsSync(cursorDir)) {
        fs.mkdirSync(cursorDir, { recursive: true });
      }

      let mcpConfig: any = { mcpServers: {} };
      if (fs.existsSync(mcpJsonPath)) {
        try {
          mcpConfig = JSON.parse(fs.readFileSync(mcpJsonPath, 'utf-8'));
          if (!mcpConfig.mcpServers) mcpConfig.mcpServers = {};
        } catch {}
      }

      mcpConfig.mcpServers.dialectic = {
        command: 'npx',
        args: ['-y', 'dialectic-mcp'],
      };

      fs.writeFileSync(mcpJsonPath, JSON.stringify(mcpConfig, null, 2), 'utf-8');
      console.log(`\n✅ 成功在当前目录配置 Cursor MCP: ${mcpJsonPath}`);
      console.log(`\n提示：重启 Cursor 或在 Agent 面板中刷新，即可自动加载 dialectic_* 4 大工具！\n`);
    } catch (err: any) {
      console.log(`\n无法自动写入配置: ${err.message}`);
      console.log(`\n你可以手动将以下配置填入 .cursor/mcp.json 或 Claude Desktop 配置中：\n`);
      console.log(
        JSON.stringify(
          {
            mcpServers: {
              dialectic: {
                command: 'npx',
                args: ['-y', 'dialectic-mcp'],
              },
            },
          },
          null,
          2
        )
      );
    }
    return;
  }

  console.log(`
🛡️ Dialectic CLI - 驳真决策审查引擎

使用方法:
  dialectic [mcp]     启动 MCP Server (供 Cursor / Claude Code 连接)
  dialectic board     查看实战预测命中率与战绩看板
  dialectic list      列出待观察与逾期留痕清单
  dialectic init      自动在当前工程配置 Cursor MCP
  dialectic --help    查看帮助
`);
}

main().catch((err) => {
  console.error(`\x1b[31m[Dialectic Error]\x1b[0m`, err);
  process.exit(1);
});
