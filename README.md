<p align="center">
  <h1 align="center">🛡️ 驳真 · Dialectic</h1>
  <p align="center">
    <b>大模型总爱顺从。驳真负责提出异议。</b><br/>
    <sub>在投入开发前，撞上真正的阻力。原生 MCP 确定性引擎 + 本地对账闭环，每一次预测都立字据。</sub>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/version-4.0-black?style=flat-square" alt="v4.0">
    <img src="https://img.shields.io/badge/mcp-supported-brightgreen?style=flat-square" alt="MCP Supported">
    <img src="https://img.shields.io/badge/ledger-~%2F.dialectic%2Fledger.json-blue?style=flat-square" alt="Ledger">
    <img src="https://img.shields.io/badge/platforms-Cursor%20%7C%20Claude%20Code%20%7C%20Antigravity%20%7C%20ChatGPT-blue?style=flat-square" alt="Platforms">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT">
  </p>
  <p align="center">
    <img src="assets/banner.jpg" alt="Dialectic Banner" width="100%">
  </p>
</p>

---

### 为什么需要它？

默认的大模型总在赞美你的构想，却看不见落地后的推行阻力与违规隐患。  
**驳真只做一件事：站到你的反面，逼出真正的破绽。**

| 提议 | 普通 AI | 驳真审查 |
|---|---|---|
| *“加个打卡积分系统提日活”* | “很好的想法，积分能增加粘性……” | **建议放弃**。不做该功能流程不受阻；老用户反感打扰；引来的多是羊毛党。<br/>*替代解法：仅在本地安静记录连续使用天数。* |
| *“合规系统一年用两次，太贵了砍掉”* | “确实，按使用频率看投入不划算……” | **建议保留**。严肃业务按单次出错代价算。违规会导致停牌处罚，不能按用得少就砍。<br/>*替代解法：按场次租赁设备与服务。* |
| *“地址输入框加个前端实时格式校验”* | “建议慎重，可能会增加用户操作负担……” | **建议通过 (PASS)**。已有真实报错日志支撑，交互成熟且 5 分钟可无损回滚。<br/>*大方放行，绝不无病呻吟。* |

---

## 现代化架构：脑身分离 (Brain-Body Decoupling)

- 🧠 **大脑 (Prompt Brain)**：三大审查透镜 + 四项不可妥协底线。专心负责反驳、寻找漏洞与给出备选生路。
- ⚙️ **身体 (MCP Deterministic Engine)**：由代码严格接管时钟比对、坏账拦截、ID 自增与事务归档，杜绝大模型自欺欺人。

```
~/.dialectic/
├── ledger.json    # 结构化主数据库 (强类型校验、原子读写)
└── ledger.md      # 同步渲染的人类可读 Markdown 账本 (三区规范)
```

---

## 三大审查透镜

不搞抽象代号，只对齐三类本质问题：

- 🏢 **组织阻力 (Friction)**  
  *多部门协作 / 方案评审*  
  方案动了谁的奶酪？谁在背锅？谁在表面配合、私下应付差事？
- 🔪 **功能必要 (Necessity)**  
  *业务单点改动 / 新功能*  
  不做它业务到底卡在哪？万一做烂了能不能在 1 个月内退回去？
- ⚖️ **合规红线 (Compliance)**  
  *法律合规 / 审计财务*  
  单次出错代价有多大？依据是法律白纸黑字，还是大家的通融惯例？

---

## 四项不可妥协的底线

1. **Gate 1：先顾人，再顾事**  
   察觉到疲惫与焦虑，推迟审查，先接情绪；用户明确叫停时立刻退出，不追问、不输出卡片。
2. **Gate 2：先平旧账，再开新账**  
   启动审查前自动扫描账本。有旧账到期先对账，不拖欠坏账。
3. **Gate 3：说狠话，立字据**  
   留存的预测必须写清客观指标、写清“怎样算我说错了”、并绑定命中后的调整动作。拒绝无法反驳的空话。
4. **Gate 4：否定，必须给出路**  
   砍掉一个方案时，必须提炼核心诉求，给出一个低成本尝试的替代解法。绝不只管否定不管解决。

> **守门底线**：证据扎实、改动可逆的好方案，**必须客观放行通过 (PASS)**，严禁为体现批判深度而无理挑刺。

---

## 快速上手与 CLI

### 1. 终端查看实战看板
无需安装，随时随地在终端查看你的历史预测命中率与待清算坏账：
```bash
npx dialectic-mcp board
```

### 2. 零内存嗅探竞品情报
无需启动笨重浏览器，毫秒级提取竞品官网或功能页的核心事实，自动清洗为高纯度 Markdown：
```bash
npx dialectic-mcp scout https://example.com
```

### 3. 在 Cursor 中启用 (原生 MCP)
一键在当前工程生成 Cursor MCP 配置：
```bash
npx dialectic-mcp init
```
或直接在 `.cursor/mcp.json` 中配置：
```json
{
  "mcpServers": {
    "dialectic": {
      "command": "npx",
      "args": ["-y", "dialectic-mcp"]
    }
  }
}
```
并将 [`SKILL.md`](SKILL.md) 放入 `.cursorrules`，AI 将自动调用 `dialectic_*` 原生工具完成闭环。

### 3. 在 Claude Code / Antigravity 中启用
添加 MCP Server 接入命令 `npx -y dialectic-mcp`，克隆技能即可原生调用。

### 4. 纯网页对话环境 (手动模式)
在 ChatGPT / Claude.ai 网页端，将 [`SKILL.md`](SKILL.md) 复制到 Custom Instructions 中。系统自动切换为「手动台账模式」，每次审查输出独立文本块供手动记录。

---

## 🇬🇧 English

> **Adversarial product decision review framework with native MCP deterministic engine.**

### 3 Lenses
- 🏢 **Friction**: Bureaucratic inertia, scapegoating, and compliance theatre.
- 🔪 **Necessity**: Failure points, rollback horizon (>1 month = one-way door), and validation latency.
- ⚖️ **Compliance**: Statutory text vs inferences. High risk mandates practical fallbacks.

### 4 Non-Negotiables
- **Gate 1: People Over Tasks**: Deferred on emotional distress; halts immediately upon user request.
- **Gate 2: Clear Old Debts First**: Pre-flight inspection via `dialectic_check_debts`. Overdue items must be reconciled.
- **Gate 3: Sharp & Falsifiable**: Concrete metrics, clear failure conditions, and bound actions.
- **Gate 4: Mandatory Fallback**: Any rejection must provide a low-cost, actionable alternative.

---

## 📄 License
MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)
