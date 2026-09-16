<p align="center">
  <h1 align="center">🛡️ Dialectic · 驳真</h1>
  <p align="center">
    <b>不只是让你构建结论，而是强迫你摧毁它。</b>
    <br/>
    <sub>从第一性原理出发的产品决策对抗性审查微内核（偏见检测系统）— 任何 AI 工具即装即用</sub>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/version-3.1%20Kernel-3C3489?style=flat-square" alt="v3.1 Kernel">
    <img src="https://img.shields.io/badge/license-MIT-1D9E75?style=flat-square" alt="MIT">
    <img src="https://img.shields.io/badge/platform-AI%20agnostic-534AB7?style=flat-square" alt="AI agnostic">
    <img src="https://img.shields.io/badge/lines-214-888780?style=flat-square" alt="214 lines">
  </p>
  <p align="center">
    <a href="#快速上手-quick-start">⚡ 快速上手</a> ·
    <a href="#-核心流程与架构">📋 核心架构</a> ·
    <a href="#-四大深水区飞刀">🔪 四大飞刀</a> ·
    <a href="#-v31-重大演进">✨ v3.1 更新</a> ·
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
> **双向对称防御**：不仅在推方案时寻找反例，在判定弱需求时，也强制回答*“有什么微弱信号可能让它成立”*，防止审查者自身的智力虚荣与过度驳回。

---

## 🎯 这解决了什么问题？

| 😵 没有 Dialectic | 🧠 有 Dialectic v3.1 |
|---|---|
| “我觉得这个需求很真，大家都会用” | **A 轨高频模型**：$Pain(3) 	imes Freq(1) 	imes Dissat(2) 	imes Switch(1) = 6$，**判定弱需求** |
| “一年只用 1~2 次的合规系统，毫无性价比，砍掉” | **B 轨责任除法**：单次出错代价极高、责任暴露在主管领导，**强力拦截“低频误杀”，判定刚需** |
| “功能很完美，但上线后大家在暗中消极抵制” | **冷启动死亡谷**：抓出“第一个倒霉蛋”，在飞轮跑通前未给其即时代偿导致系统猝死 |
| “全员 100% 达成系统考核指标，业务却毫无起色” | **古德哈特反噬**：穿透聪明人的“表演性合规”，提前发现指标被合规玩弄的荒诞笑话 |
| “UI 设计了很多高级确认和选择，用户却直呼难用” | **脑干甩锅税**：严查系统是否因算法偷懒，把不确定性通过弹窗甩锅给用户脑干 |
| “引入 AI 智能决策，结果模型幻觉导致合规灾难” | **AI 物理熔断闸**：强制审查是否有毫秒级脱离大模型的物理硬兜底，无兜底即自杀 |
| “方案被全盘否决，几个月心血白费陷入迷茫” | **Pivot 变形引擎**：提取 20% 发心内核，提供切片 10%、宿主寄生、半人工代偿等退路 |
| “打分变成了凑数字的‘数字占星术’” | **公式脱虚向实**：量化公式不再是算命机器，而是快速定位团队认知分歧的“诊断仪” |

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
适用于：核心产品线、重大商业决策、政企招投标方案（跑完多维深度对抗推演）。

---

## 📋 核心流程与架构

```
                              待评估想法 / 决策
                                      │
        ┌─────────────────────────────┼─────────────────────────────┐
        ▼                             ▼                             ▼
【Flash Mode 折叠手术刀】      【Sandbox Mode 创新沙盒】      【Standard / Deep 全维会诊】
  • 适用：按钮/UI微调/小功能     • 适用：前沿新物种/新交互      • 适用：核心模块/新业务/重大决策
  • 成本：1 分钟两问见血         • 成本：7天/¥500 配额与实验     • 成本：全景组织动力学对抗推演
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
                                                       【深水区四大飞刀 + 硬门禁】
                                                    1. 利益受损角色具象化（指名道姓）
                                                    2. 冷启动相变税（第一个倒霉蛋）
                                                    3. 古德哈特反噬（表演性合规玩弄指标）
                                                    4. 脑干甩锅税（多余弹窗与认知超载）
                                                    5. AI 概率决策毫秒级物理熔断闸
                                                    6. 法规三级隔离（原文/推断/惯例）
                                                                    │
                                                                    ▼
                                                       【Pre-Mortem 事前验尸】
                                                    预设 12 个月后惨败，找出 3 个致命死因
                                                    （至少 1 个源于现场角色消极抵抗/表演反噬）
                                                                    │
                                                                    ▼
                                                       【收敛判定与 Pivot 变形】
                                                    真需求 ｜ 弱需求 ｜ 方案不成立 ｜ 入驻沙盒
                                                    若被驳倒：切片 10% ｜ 宿主寄生 ｜ 服务代偿
```

---

## 🔪 四大深水区飞刀

v3.1 引入了从复杂组织博弈中淬炼出的 4 把锋利飞刀，专门刺杀隐藏最深的“系统死穴”：

1. 💡 **冷启动相变税 (Cold-Start Phase Transition / 第一个倒霉蛋定律)**  
   *“在系统产生哪怕一次正向飞轮之前，链条上的第一个倒霉蛋需要毫无回报地白白付出多久？”*  
   若前期纯靠一线人员无私奉献填数据，且无即时代偿，系统必在产生价值前死于启动真空期。
2. 🎭 **古德哈特反噬 (Goodhart's Gaming / 表演性合规)**  
   *“当系统与考核指标挂钩后，最聪明狡黠的人会用什么合规手段把机制玩成一场荒诞笑话？”*  
   识别全员复制粘贴日志、机器人念模板通关等机制反噬。
3. 🧠 **脑干甩锅税 (Cognitive & Attention Tax / 注意力超载)**  
   *“这个功能是否把系统偷懒留下的‘不确定性’，以多余的弹窗、确认、打标甩锅给了用户的脑干？”*  
   审查系统的非必要弹窗与选择摩擦，拒绝消耗用户的神经带宽。
4. 🛡️ **AI 概率决策物理熔断闸 (AI Circuit Breaker)**  
   *“当底层概率 AI 出现严重幻觉时，是否有毫秒级脱离大模型的物理硬兜底？”*  
   严肃合规场景下，没有物理拉闸兜底的 AI 自动化决策一律判定为自杀式功能。

---

## 🚫 五大不可违背 Hard Gates

1. **Gate 1：利益受损角色具象化 (Stakeholder Friction)**：必须指名道姓具体岗位（经办人、科室主任），严禁“用户习惯难改”等空词。
2. **Gate 2：B 轨严禁使用“频率乘法”误杀 (No Frequency Bias)**：严肃考务、医疗大检、政务合规低频不等于弱需求。
3. **Gate 3：法规与监管三级隔离 (Compliance 3-Tier)**：严格标注【条文原文】、【合理推断】与【实务惯例】。
4. **Gate 4：弱需求强制触发 Pivot 变形 (Pivot Engine Compulsion)**：被驳倒方案必须提炼 20% 发心内核并给出代偿生路。
5. **Gate 5：致命假设显式标记 (Red-Flag Assumption)**：标出唯一致命死穴并制定验证计划。

---

## ✨ v3.1 重大演进

```
v2.1 (824 行) ──────────────→ v3.0 (434 行) ──────────────→ v3.1 Kernel (214 行)
 冗长漏斗大杂烩                 三轨模型与沙盒雏形               Core Kernel 微内核（精简 74%）
 传统高频乘法误杀               B 轨合规除法与沙盒               防数字占星术：公式降维为“分歧诊断仪”
 容易产生泛泛批判               角色博弈硬门禁                   深水区四大飞刀：冷启动/古德哈特/脑干税/AI熔断
 审查者容易智力虚荣             双向少数派防御                   双向对称防御彻底锁死
 驳倒方案即判死刑               Pivot 变形引擎                   切片 10%、宿主寄生、服务代偿体系化
```

---

## 🔧 在任何 AI 工具中使用

Dialectic 是一份精炼的指令文件 (`SKILL.md`)，原生支持所有主流 AI 编程助手与大模型：

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
- **用例 1 (C 端虚荣膨胀)**：桌面小工具增加每日勋章打卡 → *验证 Flash Mode 两问速查拦截*；
- **用例 2 (B 端低频合规)**：千人执业资格统考砍掉人脸核验 → *验证 B 轨责任除法抗低频误杀*；
- **用例 3 (新物种交互)**：耳机微手势盲操闪念录音 → *验证 S 轨沙盒 7 天配额与脆弱假设*；
- **用例 4 (企业管理自嗨)**：全员每日心情晴雨表看板 → *验证 Gate 1 利益阻力穿透与古德哈特反噬*。

---

## 📄 License

MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)

---

<div id="about"></div>

## 🇬🇧 About

> **Most methodologies teach you: "Build a framework, then score it to prove yourself right."**  
> **Dialectic teaches you: "Assume you are wrong, then dismantle it from stakeholder friction and mechanism failure."**

### 🎯 Key Upgrades in v3.1 Kernel (214 lines)

- **Core Micro-Kernel Architecture**: Shrunk from 824 lines to 214 lines of high-density instructions, eliminating cognitive overhead and attention drift.
- **Formula as a Diagnostic Instrument**: Quantitative formulas are explicitly defined not as scoring divination, but as instruments to pinpoint where team disagreements lie (e.g., Switchability vs Institutional Pressure).
- **Four Deep-Water Attack Vectors**:
  1. *Cold-Start Phase Transition (The First Sucker Problem)*: How long must the first user sacrifice without return before the system produces flywheel value?
  2. *Goodhart's Gaming (Performative Compliance)*: How will clever actors legally game this metric into an absurd farce?
  3. *Cognitive & Attention Tax*: Is the system offloading algorithmic uncertainty onto user brainstems via unnecessary confirmations?
  4. *Deterministic Circuit Breaker for AI*: Does high-risk AI decisioning have a sub-second physical failsafe without LLMs?
- **3-Track Evaluation (A/B/S Tracks)**:
  - *Track A (High-Frequency Efficiency)*
  - *Track B (Low-Frequency Liability & Compliance)*
  - *Track S (Non-consensus Sandbox)*
- **Pivot Engine**: Mandatory 10% slice, host attachment, or service-first redemption routes.

### 🔧 Installation

```bash
git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/Dialectic
```
Then ask your AI agent:
> *"Run a Dialectic review on my new proposal."*
