<p align="center">
  <h1 align="center">🛡️ Dialectic · 驳真</h1>
  <p align="center">
    <b>不只是让你构建结论，而是强迫你摧毁它。</b>
    <br/>
    <sub>从第一性原理出发的产品决策对抗性审查框架（偏见检测系统）— 任何 AI 工具即装即用</sub>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/version-3.0-3C3489?style=flat-square" alt="v3.0">
    <img src="https://img.shields.io/badge/license-MIT-1D9E75?style=flat-square" alt="MIT">
    <img src="https://img.shields.io/badge/platform-AI%20agnostic-534AB7?style=flat-square" alt="AI agnostic">
    <img src="https://img.shields.io/badge/lines-263-888780?style=flat-square" alt="263 lines">
  </p>
  <p align="center">
    <a href="#快速上手-quick-start">⚡ 快速上手</a> ·
    <a href="#-核心流程与架构">📋 核心架构</a> ·
    <a href="#-v30-重大演进">✨ v3.0 更新</a> ·
    <a href="#-在任何-ai-工具中使用">🔧 安装使用</a> ·
    <a href="#-自动化评测基准-evals">🧪 评测基准</a> ·
    <a href="#about">🇬🇧 English</a>
  </p>
</p>

---

> **大多数方法论教你："先建个框架，然后打分证明自己是对的。"**  
> **Dialectic 教你："假设你是错的，从现场利益博弈与机制死锁中彻底摧毁它。"**  
>
> 这是两者之间最本质的差距。没有经过对抗性审查的结论，本质上只是未经检验的愿望。  
> **核心公理**：通过 Dialectic 审查 ≠ 证明需求成立，仅代表**当前已知证据不足以将其击穿**。

---

## 🎯 这解决了什么问题？

| 😵 没有 Dialectic | 🧠 有 Dialectic v3.0 |
|---|---|
| “我觉得这个需求很真，大家都会用” | **A 轨高频模型**：$Pain(3) 	imes Freq(1) 	imes Dissat(2) 	imes Switch(1) = 6$，**判定弱需求** |
| “一年只用 1~2 次的合规系统，毫无性价比，砍掉” | **B 轨责任除法**：单次出错代价极高、责任暴露在主管领导，**强力拦截“低频误杀”，判定刚需** |
| “竞品没人做，这是绝佳的蓝海机会” | **角色博弈硬门禁**：穿透到现场经办人多填 4 张表却毫无收益，必定集体消极抵制 |
| “全新交互概念，没有历史数据直接被枪毙” | **S 轨创新沙盒**：抓取唯一最脆弱假设，签发 7 天 / ¥500 配额与极简单点实验 |
| “方案被全盘否决，几个月心血白费陷入迷茫” | **Pivot 变形引擎**：提取 20% 发心内核，提供切片 10%、宿主寄生、半人工代偿等退路 |
| “引用的政策法规模棱两可，被客户当场打脸” | **三级法规隔离**：强制分清【条文原文】、【合理推断】与【实务惯例】 |

---

## ⚡ 快速上手 (Quick Start)

根据你的需求类型，Dialectic 自动选择对应的三档入口：

### 1. 🔪 Flash Mode（折叠手术刀·1 分钟见血）
适用于：日常讨论、单点功能、是否增加一个按钮/选项。

```markdown
# 🔪 驳真·折叠手术刀速查
- **评估想法**：给桌面小工具增加每日勋章打卡系统
- **Q1（底线死穴）**：不做它，用户在工作流中到底死在哪一步？
  - 判定：不影响核心生产任务，仅算“做梦觉得有了更好” → ❌ 无法通过
- **Q2（受阻角色）**：
  - 受损角色：开发者（额外维护云端数据库与鉴权）、用户（轻工具被通知打扰）
- **一句话决断**：砍掉！若要保留习惯追踪，走 Pivot 切片为纯本地无感计数。
```

### 2. ⚡ Sandbox Mode（非共识创新沙盒·新物种探索）
适用于：全新交互形态、没有成熟竞品概念、独立开发者灵感探索。

```markdown
# ⚡ 驳真·非共识创新沙盒卡
- **新物种构想**：耳机盲操微手势闪念录音胶囊
- **唯一最脆弱假设**：如果用户在走路/工作时的盲操误触率超过 15%，整个记录心智就会瓦解。
- **试错配额**：周期 $\le$ 7 天，成本 $\le$ ¥500。
- **极简实验**：用手机快捷指令模拟耳机触发 + 5 人现场盲测。若连续 3 人因误触抗拒即止损放弃。
```

### 3. 📋 Standard / Deep Mode（全维对抗会诊·重大决策）
适用于：核心产品线、重大商业决策、政企招投标方案（跑完 18 项深度对抗推演）。

---

## 📋 核心流程与架构

```
                              待评估想法 / 决策
                                      │
        ┌─────────────────────────────┼─────────────────────────────┐
        ▼                             ▼                             ▼
【Flash Mode 折叠手术刀】      【Sandbox Mode 创新沙盒】      【Standard / Deep 全维会诊】
  • 适用：按钮/UI微调/小功能     • 适用：前沿新物种/新交互      • 适用：核心模块/新业务/重大决策
  • 成本：1 分钟两问见血         • 成本：7天/¥500 配额与实验     • 成本：18 维全景对抗推演
  • 产出：速查卡 (模板 1)        • 产出：沙盒卡 (模板 2)        • 产出：全维报告 (模板 3)
                                                                    │
                                            ┌───────────────────────┴───────────────────────┐
                                            ▼                                               ▼
                                   【A 轨：高频效率型】                            【B 轨：低频责任合规型】
                               Pain × Freq × Dissat × Switch              (ErrorCost × Exposure × Budget × Pressure) ÷ Friction
                                            │                                               │
                                            └───────────────────────┬───────────────────────┘
                                                                    │
                                                                    ▼
                                                       【五大不可违背 Hard Gates】
                                                    1. 利益受损角色具象化（指名道姓）
                                                    2. B 轨严禁频率乘法误杀
                                                    3. 法规三级隔离（原文/推断/惯例）
                                                    4. 弱需求强制触发 Pivot 变形
                                                    5. 唯一最脆弱假设显式标记
                                                                    │
                                                                    ▼
                                                       【Pre-Mortem 事前验尸】
                                                    预设 12 个月后惨败，找出 3 个致命死因
                                                    （至少 1 个源于现场角色消极抵抗）
                                                                    │
                                                                    ▼
                                                       【收敛判定与 Pivot 变形】
                                                    真需求 ｜ 弱需求 ｜ 方案不成立 ｜ 入驻沙盒
                                                    若被驳倒：切片 10% ｜ 宿主寄生 ｜ 服务代偿
```

---

## 🚫 五大不可违背 Hard Gates

审查过程中只要触犯任一条，该评估直接判定**不合格并退回重做**：

1. **Gate 1：利益受损角色具象化 (Stakeholder Friction)**  
   必须指名道姓现场的具体自然人角色（经办人、科室主任、网点操作工），指出其增加的麻烦与权力受损点。**严禁使用“用户习惯难改”、“市场需要教育”等空话。**
2. **Gate 2：B 轨严禁使用“频率乘法”误杀 (No Frequency Bias)**  
   严肃考务、医疗大检、金融合规、应急灾备属于低频高价值业务，**低频绝不等于弱需求**，必须按责任暴露与合规压力建模。
3. **Gate 3：法规与监管三级隔离 (Compliance 3-Tier)**  
   涉及政策标准时，必须显式区分标注：**【条文原文】**（白纸黑字）、**【合理推断】**（逻辑衍生）、**【实务惯例】**（现场通融）。严禁混淆。
4. **Gate 4：弱需求强制触发 Pivot 变形 (Pivot Engine Compulsion)**  
   方案被驳倒时，禁止一枪毙命后结束。必须剥离实现方式，保留 20% 发心内核，给出切片、寄生或代偿退路。
5. **Gate 5：致命假设显式标记 (Red-Flag Assumption)**  
   必须标出唯一最脆弱假设，回答：“如果这个假设错了，整个项目靠什么立足？”

---

## ✨ v3.0 重大演进

```
v2.1 (824 行) ──────────────────────────→ v3.0 Engineered (263 行)
 单一长流程漏斗                              三档按需分流状态机 (Flash / Sandbox / Deep)
 传统高频乘法误杀低频                          A/B/S 三轨模型 (引入 B 轨合规除法与 S 轨沙盒)
 易产生假大空泛泛批判                          Gate 1 角色具象化硬门禁 (穿透到经办人/科室主任)
 审查不通过直接判死刑                          Pivot 变形引擎 (切片 10% / 宿主寄生 / 服务代偿)
 法规引用边界模糊                             三级法规隔离 (【条文原文】/【合理推断】/【实务惯例】)
 文档冗长 Token 消耗大                        体积精简 33%，机器级 Hard Gate 控制流
```

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

本项目自带测试用例套件 (`evals/test_cases.md`)，覆盖对抗审查的核心矩阵：

- **用例 1 (C 端功能膨胀)**：桌面小工具增加每日勋章打卡 → *验证 Flash Mode 两问速查拦截*；
- **用例 2 (B 端低频合规)**：千人特种作业统考砍掉人脸核验 → *验证 B 轨责任除法抗低频误杀*；
- **用例 3 (新物种交互)**：耳机微手势盲操闪念录音 → *验证 S 轨沙盒 7 天配额与脆弱假设*；
- **用例 4 (企业管理自嗨)**：全员每日心情晴雨表看板 → *验证 Gate 1 利益阻力穿透与事前验尸*。

---

## 📄 License

MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)

---

<div id="about"></div>

## 🇬🇧 About

> **Most methodologies teach you: "Build a framework, then score it to prove yourself right."**  
> **Dialectic teaches you: "Assume you are wrong, then dismantle it from stakeholder friction and mechanism failure."**  
>
> Passing Dialectic review does NOT prove that a demand is valid; it merely proves that **currently available evidence is insufficient to destroy it**.

### 🎯 Core Upgrades in v3.0

- **3-Track Evaluation (A/B/S Tracks)**:
  - **Track A (High-Frequency Efficiency)**: $Pain \times Freq \times Dissat \times Switchability$.
  - **Track B (Low-Frequency Liability & Compliance)**: $\frac{ErrorCost \times ResponsibilityExposure \times BudgetAlignment \times InstitutionalPressure}{AdoptionFriction}$. Prevents false negatives on high-value, low-frequency enterprise/gov needs.
  - **Track S (Non-consensus Sandbox)**: For brand-new paradigms without historical data. Assigns a $\le 7$ days / $\le \$500 quota and verifies the single most fragile assumption.
- **5 Indispensable Hard Gates**:
  1. *Stakeholder Friction*: Must name concrete human roles (e.g., branch clerks, department directors) and their friction/resistance. No abstract clichés like "habits are hard to change".
  2. *No Frequency Bias*: Strict prohibition against killing low-frequency compliance needs with Track A formulas.
  3. *3-Tier Compliance Isolation*: Explicitly demarcates `[Exact Statute]`, `[Logical Inference]`, and `[Industry Custom]`.
  4. *Pivot Engine*: Mandatory redemption paths (10% slice, host attachment, service-first) when an idea is rejected.
  5. *Red-Flag Assumption*: Must identify the single point of failure.
- **3 Decoupled Output Modes**:
  - ⚡ **Flash Mode**: 1-minute, two fatal questions.
  - 🧪 **Sandbox Mode**: 7-day minimum experimentation card.
  - 📋 **Full Mode**: Comprehensive 18-dimension deep audit.

### 🔧 Installation

```bash
git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/Dialectic
```
Then simply ask your AI agent:
> *"Run a Dialectic review on my new feature proposal."*
