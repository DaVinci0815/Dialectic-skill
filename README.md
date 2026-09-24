<p align="center">
  <h1 align="center">🛡️ 驳真 · Dialectic</h1>
  <p align="center">
    <b>大模型总爱顺从。驳真负责提出异议。</b><br/>
    <sub>面向产品经理与独立开发者的对抗性决策引擎。30 秒帮你砍掉伪需求，避开竞品踩过的坑。</sub>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/version-4.0-black?style=flat-square" alt="v4.0">
    <img src="https://img.shields.io/badge/mcp-supported-brightgreen?style=flat-square" alt="MCP Supported">
    <img src="https://img.shields.io/badge/platforms-Cursor%20%7C%20Claude%20Code%20%7C%20Antigravity%20%7C%20ChatGPT-blue?style=flat-square" alt="Platforms">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT">
  </p>
  <p align="center">
    <img src="assets/banner.jpg" alt="Dialectic Banner" width="100%">
  </p>
</p>

---

### 为什么需要它？

默认的大模型总在顺从赞美你的点子，容易忽视真实的推行阻力与隐性大坑。  
**驳真只做一件事：站到你的对立面，逼出真正的破绽。**

| 你的提议 | 普通 AI | 驳真审查 (30秒快决策) |
|---|---|---|
| *“加个打卡积分系统提日活”* | “很好的想法，积分能增加粘性……” | **建议放弃**。不做该功能用户核心流程完全不受阻；引来的多是羊毛党；破坏工具纯粹性。<br/>*💡 替代生路：仅在本地安静记录天数，零成本验证。* |
| *“合规功能一年用两次，太贵了砍掉”* | “确实，按使用频率看投入不划算……” | **建议保留**。严肃合规按单次出错代价算。违规会导致停牌处罚，不能因用得少就砍。<br/>*💡 替代生路：按场次租赁设备，降低固定成本。* |
| *“输入框加个前端实时格式校验”* | “建议慎重，可能会增加用户操作负担……” | **建议通过 (PASS)**。已有真实报错日志支撑，交互成熟且 5 分钟可无损回滚。<br/>*大方放行，绝不无病呻吟。* |

---

## 核心设计：把选择权还给用户

产品决策有两种场景，驳真将两套路径彻底解耦，**优先级永远是“快决策”更高**：

```
                用户输入任何点子 / 方案
                           │
                           ▼
          【⚡ 默认：30秒快决策 (Fast Decision)】
          ─────────────────────────────────────
          • 零门槛、零负担，30 秒直出四大干货：
            1. 一句话定调 (大方通过 / 放弃 / 小步快跑)
            2. 竞品尸检事实 (嗅探竞品踩过的坑，绝不让你当小白鼠)
            3. 三个扎心真相 (谁吃亏？卡在哪？出错代价？)
            4. 替代生路 (花 1/10 成本怎么做)
                           │
                           ▼
          【📌 进阶：可选复盘黑匣子 (Opt-in)】
          ─────────────────────────────────────
          • 觉得结论有争议？想和时间打个赌？
            随口回复一句【立字据 30天】，自动写入本地账本。
            30 天后像开盲盒一样对账验真，校准自己的决策盲区。
```

---

## 三大审查透镜

不搞抽象代号，只对齐三类本质追问：

- 🏢 **组织阻力 (Friction)**  
  *多部门协作 / 方案评审*  
  方案动了谁的奶酪？谁在背锅？谁在表面配合、私下敷衍应付？
- 🔪 **功能必要 (Necessity)**  
  *业务单点改动 / 新功能*  
  不做它业务到底卡在哪？万一做烂了能不能在 1 个月内退回去？
- ⚖️ **合规红线 (Compliance)**  
  *法律合规 / 审计财务*  
  单次出错代价有多大？依据是法律白纸黑字，还是大家的通融惯例？

---

## 四项不可妥协的底线

1. **Gate 1：先顾人，再顾事**：用户疲惫或焦虑时推迟审查，先接情绪；用户明确叫停立刻彻底退出，不追问、不输出卡片。
2. **Gate 2：守住客观，好方案大方放行 (PASS)**：对证据充分、改动低成本可逆的方案大方通过，严禁为批判而批判。
3. **Gate 3：说狠话，立字据**：用户一旦选择立字据，预测必须写明客观指标、输赢边界与触发动作，拒绝无法证伪的空话。
4. **Gate 4：否定，必须给出路**：砍掉一个方案时，必须提炼核心诉求，给出一个低成本尝试的替代解法。绝不只管否定不管解决。

---

## 快速上手与 CLI

### 1. 终端查看实战看板
随时随地在终端查看你的历史预测命中率与待开箱字据：
```bash
npx dialectic-mcp board
```

```
┌──────────────────────────────────────────────────────────────┐
│                   🛡️  DIALECTIC · 驳真战绩看板                 │
└──────────────────────────────────────────────────────────────┘
  📁 账本路径: ~/.dialectic
  🕒 系统时间: 2026-09-24 17:40

  【实战预测概览】
  - 待观察预测 (Active Pending)   : 1 条
  - 逾期待开箱 (Overdue Unbox)    : 0 条 ✅
  - 已归档结案 (Archived Total)   : 0 条
```

### 2. 零内存嗅探竞品情报
无需启动笨重浏览器，150 毫秒提取竞品官网或功能页的核心事实，自动清洗为高纯度 Markdown：
```bash
npx dialectic-mcp scout https://example.com
```

### 3. 在 Cursor / Claude Code / Antigravity 中使用
一键在当前工程生成 Cursor MCP 配置：
```bash
npx dialectic-mcp init
```
并将 [`SKILL.md`](SKILL.md) 放入 `.cursorrules` 或技能库中，直接在对话框里像平时聊天一样呼叫驳真！

---

## 🇬🇧 English

> **Adversarial product decision review framework with Fast-First paradigm & optional calibration ledgers.**

### Core Philosophy
- **Fast Decision First**: Instant 30-second verdict, competitor autopsy facts, hard truths, and practical fallbacks. Zero friction.
- **Optional Calibration Ledger**: Opt-in "bet with time" to log predictions and calibrate your cognitive blind spots over 30-60 days.

---

## 📄 License
MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)
