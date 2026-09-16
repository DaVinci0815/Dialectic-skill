<p align="center">
  <h1 align="center">🛡️ Dialectic · 驳真</h1>
  <p align="center">
    <b>不只是让你构建结论，而是强迫你检验它。</b>
    <br/>
    <sub>从第一性原理出发的产品决策对抗性审查框架（偏见检测系统）— 任何 AI 工具即装即用</sub>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/version-3.1%20Plain-3C3489?style=flat-square" alt="v3.1 Plain">
    <img src="https://img.shields.io/badge/license-MIT-1D9E75?style=flat-square" alt="MIT">
    <img src="https://img.shields.io/badge/platform-AI%20agnostic-534AB7?style=flat-square" alt="AI agnostic">
    <img src="https://img.shields.io/badge/lines-214-888780?style=flat-square" alt="214 lines">
  </p>
  <p align="center">
    <a href="#快速上手-quick-start">⚡ 快速上手</a> ·
    <a href="#-核心流程与架构">📋 核心架构</a> ·
    <a href="#-四大深层组织与机制死穴">🔍 深层死穴</a> ·
    <a href="#-在任何-ai-工具中使用">🔧 安装使用</a> ·
    <a href="#-自动化评测基准-evals">🧪 评测基准</a> ·
    <a href="#about">🇬🇧 English</a>
  </p>
</p>

---

> **大多数方法论教你："先建个框架，然后打分证明自己是对的。"**  
> **Dialectic 教你："假设自己是错的，从现场利益冲突与机制死穴中严格检验它。"**  
>
> 这是两者之间最本质的差距。没有经过对抗性审查的结论，本质上只是未经检验的主观愿望。  
> **核心公理**：通过 Dialectic 审查 ≠ 证明需求成立，仅代表**当前已知证据不足以将其击穿**。  
> **双向对称防御**：不仅在推方案时寻找反例，在判定弱需求时，也强制反思*“有什么微弱信号可能让它成立”*，防止审查者自身的偏见与过度驳回。

---

## 🎯 这解决了什么问题？

| 😵 传统直觉决策 | 🧠 有 Dialectic 审查 |
|---|---|
| “我觉得这个需求很真，大家肯定都会用” | **A 轨高频模型**：$Pain(3) 	imes Freq(1) 	imes Dissat(2) 	imes Switch(1) = 6$，**识别为弱需求** |
| “一年只用 1~2 次的合规系统，毫无频次性价比，砍掉” | **B 轨责任除法**：单次出错代价极高、责任直接暴露在主管领导，**强力拦截“低频误杀”，判定为刚需** |
| “功能设计很完美，但上线后大家在暗中消极抵制” | **初始录入无回报期审查**：提前识别早期用户需要单向无偿录入数据，防止系统死在冷启动初期 |
| “全员 100% 达成考核指标，业务却毫无起色” | **指标异化与表演性应付审查**：提前识破员工通过复制粘贴假数据、走过场形式主义完成指标 |
| “界面加了很多高级弹窗与配置项，用户却直呼繁琐” | **认知超载审查**：严查系统是否因算法偷懒，把原本该自动处理的不确定性转嫁给用户确认 |
| “盲目引入 AI 智能决策，结果模型幻觉引发违规处罚” | **确定性兜底防线**：严肃合规业务强制审查是否有脱离大模型的规则硬保底，防范 AI 幻觉风险 |
| “方案被全盘否决，几个月心血白费陷入迷茫” | **业务代偿与降级退路**：提炼 20% 真正发心，提供单点极简切片、依托成熟大平台寄生、半人工服务代偿 |
| “团队为了证明方案可行拼命凑高分” | **分歧诊断仪定位**：量化公式不再是打分游戏，而是快速找准团队究竟是在迁移成本还是监管压力上有分歧 |

---

## ⚡ 快速上手 (Quick Start)

根据你的需求类型，Dialectic 自动选择对应的三档入口：

### 1. 🔪 极速两问自检卡（Flash Mode·1 分钟）
适用于：日常讨论、单点功能、是否增加一个按钮/选项。

```markdown
# 🔪 驳真·极速两问自检
- **评估想法**：给桌面小工具增加每日勋章打卡系统
- **Q1（底线死穴）**：不做它，用户在实际流程中到底死在哪一步？
  - 判定：不影响核心生产任务，仅算“做梦觉得有了更好” → ❌ 无法通过
- **Q2（受阻角色）**：
  - 受损角色：开发者（额外维护云端数据库与鉴权）、用户（轻工具被通知打扰）
- **一句话决断**：砍掉！若要保留习惯追踪，走单点切片降级为纯本地无感计数。
```

### 2. ⚡ 新概念探索沙盒（Sandbox Mode·探索前沿新概念）
适用于：全新交互形态、没有成熟竞品概念、独立开发者灵感探索。

```markdown
# ⚡ 驳真·新概念探索沙盒卡
- **新概念构想**：耳机盲操微手势闪念录音胶囊
- **唯一最脆弱假设**：如果用户在走路/工作时的盲操误触率超过 15%，整个记录心智就会瓦解。
- **试错配额**：周期 $\le$ 7 天，成本 $\le$ ¥500。
- **极简实验**：用手机快捷指令模拟耳机触发 + 5 人现场盲测。若连续 3 人因误触抗拒即止损放弃。
```

### 3. 📋 全维深度审查（Standard / Deep Mode·重大决策）
适用于：核心产品线、重大商业决策、招投标方案（跑完多维组织博弈对抗推演）。

---

## 📋 核心流程与架构

```
                              待评估想法 / 决策
                                      │
        ┌─────────────────────────────┼─────────────────────────────┐
        ▼                             ▼                             ▼
【极速两问自检卡 (Flash)】      【新概念试错沙盒 (Sandbox)】    【全维深度审查 (Standard/Deep)】
  • 适用：按钮/UI微调/小功能     • 适用：前沿新物种/新概念      • 适用：核心模块/新业务/重大决策
  • 成本：1 分钟两问见血         • 成本：7天/¥500 配额与单点实验 • 成本：全景组织博弈深度推演
  • 产出：自检卡 (模板 1)        • 产出：沙盒卡 (模板 2)        • 产出：全维报告 (模板 3)
                                                                    │
                                            ┌───────────────────────┴───────────────────────┐
                                            ▼                                               ▼
                                   【A 轨：高频效率型】                            【B 轨：低频责任合规型】
                               Pain × Freq × Dissat × Switch              (ErrorCost × Exposure × Budget × Pressure) ÷ Friction
                                            │                                               │
                                            └───────────────────────┬───────────────────────┘
                                                                    │
                                                                    ▼
                                                       【深层组织死穴 + 五大硬门禁】
                                                    1. 利益受损角色具象化（指名道姓）
                                                    2. 初始录入无回报期审查（冷启动断崖）
                                                    3. 指标异化与表演性应付审查（假动作）
                                                    4. 系统偷懒导致的认知超载（多余弹窗）
                                                    5. 高风险决策确定性保底（防 AI 幻觉）
                                                    6. 法规依据三级隔离（原文/推断/惯例）
                                                                    │
                                                                    ▼
                                                       【事前逆向失败推演】
                                                    预设 12 个月后惨败，找出 3 个致命死因
                                                    （至少 1 个源于现场角色消极抵抗或表演应付）
                                                                    │
                                                                    ▼
                                                       【收敛判定与降级代偿退路】
                                                    真需求 ｜ 弱需求 ｜ 方案不成立 ｜ 入驻沙盒
                                                    若被驳倒：单点切片 ｜ 依托寄生 ｜ 服务代偿
```

---

## 🔍 四大深层组织与机制死穴

框架重点针对复杂组织中最容易导致产品猝死的 4 个隐形死穴进行穿透审查：

1. 💡 **初始录入无回报期 (Early Contributor Deficit / 冷启动断崖)**  
   *“在系统产生哪怕一次正向价值前，第一批录入数据的用户需要毫无回报地白白付出多久？”*  
   若前期纯靠一线人员单向奉献且无即时代偿，系统必在产生价值前死于启动真空期。
2. 🎭 **指标异化与表演性应付 (Metric Gaming / 形式主义假动作)**  
   *“当系统与考核指标挂钩后，最聪明狡黠的人会用什么合规手段把机制玩成一场荒诞笑话？”*  
   提前发现全员复制粘贴假日志、念模板通关等机制反噬。
3. 🧠 **系统偷懒导致的认知超载 (Cognitive Overload Dumping)**  
   *“这个功能是否把系统原本该自动处理的不确定性，通过多余的弹窗确认、复杂打标甩锅给了用户？”*  
   审查系统的非必要选择摩擦，拒绝无谓消耗用户的精力。
4. 🛡️ **高风险决策的确定性保底 (Deterministic Failsafe / 防 AI 幻觉物理熔断)**  
   *“当底层概率 AI 出现严重幻觉时，是否有毫秒级脱离大模型的规则硬兜底？”*  
   严肃合规场景下，没有确定性规则兜底的自动化决策一律判定为自杀式功能。

---

## 🚫 五大不可违背 Hard Gates

1. **Gate 1：利益受损角色具象化 (Stakeholder Friction)**：必须指名道姓具体岗位（经办人、科室主任），严禁“用户习惯难改”等空洞口号。
2. **Gate 2：低频合规业务严禁频率误杀 (No Frequency Bias)**：严肃考务、医疗大检、政务合规属于低频高风险场景，低频绝不等于弱需求。
3. **Gate 3：法规依据三级隔离 (Compliance 3-Tier)**：涉及政策标准时，必须严格标注【条文原文】、【合理推断】与【实务惯例】。
4. **Gate 4：弱需求强制给出降级与代偿退路 (Alternative Pathways)**：方案被驳倒时，必须提炼 20% 发心并给出代偿生路。
5. **Gate 5：核心致命假设显式标记 (Red-Flag Assumption)**：标出唯一致命死穴并制定单点验证计划。

---

## 🔧 在任何 AI 工具中使用

Dialectic 是一份纯文本指令文件 (`SKILL.md`)，原生支持所有主流 AI 编程助手与大模型：

### 一行命令安装（Antigravity / Claude Code）

```bash
# 克隆到技能目录
git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/Dialectic

# 在对话中直接唤醒：
# "用驳真帮我评估这个想法"
# "帮我看看这个方案靠谱吗"
```

### 其他常用工具配置

| 工具 | 配置路径 |
|---|---|
| **Claude Code** | 放入项目根目录 `.claude/skills/` 或指令文件 |
| **Cursor** | 添加至 `.cursorrules` 或 `.cursor/rules/dialectic.md` |
| **Trae** | 添加至项目规则或自定义 AI Instructions |
| **ChatGPT / Claude / DeepSeek** | 对话开头直接粘贴 `SKILL.md` 全文，或存为 Custom GPT / System Prompt |
| **GitHub Copilot** | 添加到 Copilot Instructions |

---

## 🧪 自动化评测基准 (Evals)

随库附带测试套件 (`evals/test_cases.md`)：
- **用例 1 (C 端虚荣功能)**：桌面小工具增加每日勋章打卡 → *验证极速两问自检卡拦截*；
- **用例 2 (B 端低频合规)**：千人执业资格统考砍掉人脸核验 → *验证 B 轨责任除法抗低频误杀*；
- **用例 3 (前沿交互创新)**：耳机微手势盲操闪念录音 → *验证新概念沙盒 7 天配额与脆弱假设*；
- **用例 4 (企业管理自嗨)**：全员每日心情晴雨表看板 → *验证利益阻力穿透与指标异化反噬*。

---

## 📄 License

MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)

---

<div id="about"></div>

## 🇬🇧 About

> **Most methodologies teach you: "Build a framework, then score it to prove yourself right."**  
> **Dialectic teaches you: "Assume you are wrong, then examine it against stakeholder resistance and mechanism failures."**

### 🎯 Key Highlights (Plain Language Edition)

- **High-Density Micro-Kernel (214 lines)**: Streamlined into a zero-fluff core instruction set, reducing cognitive load and token drift.
- **Formula as a Diagnostic Tool**: Quantitative scoring is explicitly defined not as arbitrary fortune-telling, but as an instrument to pinpoint exact team disagreements (e.g., Switching Feasibility vs Regulatory Pressure).
- **Four Deep Organizational Dead-Ends**:
  1. *Early Contributor Deficit (Cold-Start Barrier)*: How long must early users input data without return before flywheel value is unlocked?
  2. *Metric Gaming & Performative Compliance*: How will clever actors legally game this metric into an absurd farce?
  3. *Cognitive Overload Dumping*: Is the system offloading algorithmic uncertainty onto users via unnecessary confirmations?
  4. *Deterministic Failsafe for High-Risk Decisions*: Does probabilistic AI automation have an instantaneous rule-based failsafe without LLMs?
- **3-Track Evaluation (A/B/S Tracks)**:
  - *Track A (High-Frequency Efficiency)*
  - *Track B (Low-Frequency Liability & Compliance)*
  - *Track S (Innovation Sandbox)*
- **Alternative Pathways**: Mandatory 10% slice, host attachment, or service-first alternatives when an initial idea is rejected.

### 🔧 Installation

```bash
git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/Dialectic
```
Then ask your AI agent:
> *"Run a Dialectic review on my new proposal."*
