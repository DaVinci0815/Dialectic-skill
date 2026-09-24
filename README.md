<p align="center">
  <h1 align="center">🛡️ 驳真 · Dialectic</h1>
  <p align="center">
    <b>AI 总爱挑好听的说。驳真专门说大实话。</b><br/>
    <sub>帮你 30 秒砍掉不靠谱的需求，避开别人已经踩过的坑，少花冤枉钱。</sub>
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

普通的 AI 总是顺着你的话说，不停夸你的想法好，结果一上线才发现根本没人用。  
**驳真只做一件事：专门站在反面挑刺，把潜在的大坑提前找出来。**

| 你的想法 | 普通 AI | 驳真审查 (30秒大白话) |
|---|---|---|
| *“加个打卡积分系统提日活”* | “很好的想法，积分能增加用户粘性……” | **建议别做**。不做这个功能用户用得好好的；加了老用户嫌烦；引来的全是不花钱的羊毛党。<br/>*💡 更省钱的做法：直接在设置里安静显示天数，先看看有没有人在意。* |
| *“合规功能一年用两次，太贵了砍掉”* | “确实，按使用频率看投入产出比不高……” | **建议保留**。这事按出一次事的代价算。违规会被停牌罚款，不能因为平时用得少就砍。<br/>*💡 更省钱的做法：按场次租设备，不用自己花大钱买断。* |
| *“输入框加个前端实时格式校验”* | “建议慎重，可能会增加用户操作负担……” | **直接通过 (PASS)**。已有真实报错日志支撑，交互很成熟，万一做砸了 5 分钟就能退回。<br/>*好想法大大方方放行，绝不没事找事。* |

---

## 怎么用？两种玩法，随你选择

```
                    你提一个点子，或者扔一个竞品链接
                                   │
                                   ▼
          【⚡ 平时怎么用：30 秒出结论 (快决策)】
          ───────────────────────────────────────────
          • 不用填表、不用找链接，随口说一句话，30 秒给你四条干货：
            1. 一句话结论 (大方通过 / 建议放弃 / 小步快跑)
            2. 别人踩过的坑 (AI 全自动全网搜竞品和差评，绝不让你当小白鼠)
            3. 三句大实话 (到底动了谁？卡在哪？出事谁背锅？)
            4. 更省钱省事的做法 (怎么花 1/10 的成本试水)
                                   │
                                   ▼
          【📌 进阶怎么玩：打个赌，记在小本本上 (慢决策)】
          ───────────────────────────────────────────
          • 觉得它说得不对？想比比谁的眼光更准？
            随手回一句【打个赌 30天】，它就记在电脑的小本本上。
            一个月后拉着你一起看：当初到底谁说对了！
            慢慢帮你认清自己平时最容易在什么地方盲目乐观。
```

---

## 驳真看问题的三个角度

不搞复杂的代号，只帮你看清三件事：

- 🏢 **看谁吃亏**  
  *方案上会评审 / 多部门协作*  
  方案到底给谁多添了麻烦？谁在背锅？大家会不会表面配合、私底下糊弄差事？
- 🔪 **看不做行不行**  
  *日常功能增删 / 新点子*  
  不做这个功能业务真的会卡死吗？万一做烂了几天能恢复原样？
- ⚖️ **看会不会出大事**  
  *法律合规 / 财务安全*  
  出一次事的后果自己能不能扛？依据是法律白纸黑字，还是大家平时的通融习惯？

---

## 四条不可妥协的底线

1. **先顾人，再顾事**：看你今天累了、心情不好，绝不跟你扯工作，先安慰你；你说“别烦我写代码”，立刻闭嘴干活。
2. **好想法大方放行**：证据充分、退路容易的好方案直接通过 (PASS)，绝不为了显摆自己深刻而故意挑刺。
3. **说狠话，立字据**：只要打赌，必须写清具体指标和“怎样算我说错了”，敢于承认打脸。
4. **否定，必须给出路**：砍掉一个想法时，必须给出一个低成本尝试的备选方案，绝不只管否定不管解决。

---

## 快速上手

### 1. 终端随时看战绩
在 Mac 终端敲一行命令，看看过去谁赢的多：
```bash
npx dialectic-mcp board
```

```
┌──────────────────────────────────────────────────────────────┐
│                   🛡️  DIALECTIC · 驳真战绩看板                 │
└──────────────────────────────────────────────────────────────┘
  📁 账本路径: ~/.dialectic
  🕒 系统时间: 2026-09-24 17:45

  【实战预测概览】
  - 待观察预测 (Active Pending)   : 1 条
  - 逾期待开箱 (Overdue Unbox)    : 0 条 ✅
  - 已归档结案 (Archived Total)   : 0 条
```

### 2. 查查竞品踩过什么坑
输入任何一个竞品网址，1 秒把对方的功能和定价扒得干干净净，本地 0 内存开销：
```bash
npx dialectic-mcp scout https://example.com
```

### 3. 在 Cursor / Claude Code / 反重力中使用
敲一行自动为当前项目生成配置：
```bash
npx dialectic-mcp init
```
把 [`SKILL.md`](SKILL.md) 放入技能库或 `.cursorrules` 中，直接在聊天框里像平时说话一样使用！

---

## 🇬🇧 English

> **Adversarial product decision review framework. Fast decisions first, optional prediction bets to calibrate your intuition over time.**

- **Fast Decision**: 30-second verdict, competitor autopsy facts, hard truths, and low-cost fallbacks.
- **Optional Bet**: Challenge the AI with "bet 30 days" to log predictions and calibrate your blind spots over time.

---

## 📄 License
MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)
