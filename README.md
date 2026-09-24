<p align="center">
  <h1 align="center">🛡️ Dialectic · 驳真</h1>
  <p align="center">
    <b>面向产品决策的对抗性审查框架</b><br/>
    <sub>在投入开发前发现真正阻力，带本地账本与到期对账闭环</sub>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/version-3.3-black?style=flat-square" alt="v3.3">
    <img src="https://img.shields.io/badge/ledger-~%2F.dialectic%2Fledger.md-blue?style=flat-square" alt="Ledger">
    <img src="https://img.shields.io/badge/support-Cursor%20%7C%20Claude%20Code%20%7C%20Trae%20%7C%20Antigravity%20%7C%20ChatGPT-blue?style=flat-square" alt="Support">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT">
  <p align="center">
    <img src="assets/banner.jpg" alt="Dialectic Banner" width="100%">
  </p>
</p>

---

### 为什么需要它？

默认的大模型倾向于顺从赞美你的构想，容易忽视真实的组织推行阻力与潜在的合规风险。Dialectic 强迫大模型站在反面寻找真实破绽，并在每次审查后留下可验证的预测记录。

| 用户提议 | 普通回答 | 驳真审查 |
|---|---|---|
| *“在轻量工具里做签到打卡提升活跃度”* | “很好的想法，打卡积分能增加用户粘性……” | **建议放弃**：不做该功能核心流程完全不受阻；老用户反感打扰；引来的多是非目标羊毛党。 |
| *“一年用一两次的合规系统性价比低，砍掉”* | “确实，按使用频率看投入产出比不高……” | **建议保留**：严肃合规按单次出错代价评估。违规会导致行政处罚与资质暂停，不能因用得少就砍掉。 |
| *“收货地址输入框增加成熟的前端实时校验”* | “可以做，但要注意增加用户认知负担……” | **建议通过 (PASS)**：已有真实报错数据支撑，交互成熟且 5 分钟可无损回滚，正面证据充分，客观放行。 |

---

## 核心机制

### 1. Step 0 账本扫描与到期对账
大模型对话结束后没有持久记忆。Dialectic 通过本地文件 `~/.dialectic/ledger.md` 实现跨会话对账。
- **有文件权限环境 (Cursor / Claude Code / Trae / Antigravity / 命令行)**：  
  全自动读写与归档。账本按 **待观察 (Pending)**、**逾期未对账 (Overdue Debt)**、**已归档 (Archived)** 三区严格管理。
  - 会话交互时：发现逾期项，必须先弹出对账卡请用户核销，核销后移入归档区；
  - 单轮自动化时：检测到逾期坏账，在结果顶部挂起【逾期债务警示】，不阻塞执行，杜绝掩盖陈年坏账。
- **无文件权限环境 (网页版 ChatGPT / 纯聊天窗口)**：  
  自动切换为「手动台账模式」。输出审查结论与独立留痕文本块，提示用户自行复制保存，绝不假装访问了本地磁盘。

### 2. 三大审查焦点
不搞抽象代号，直接按问题本质对齐审查焦点：
- 🏢 **组织阻力 (Friction)**：多部门方案或需要上会评审。看谁吃亏、谁背锅、大家会不会表面配合私下敷衍。
- 🔪 **功能必要 (Necessity)**：日常功能增删与新点子。看不做卡在哪一步、万一做错恢复原样要多久（恢复成本超 1 个月按重大决策审查）。
- ⚖️ **合规红线 (Compliance)**：严肃业务与法规合规。看出错代价有多大、依据是法律原文还是平时习惯（高风险必须给出低成本兜底替代方案）。

---

## 规则分层

### 🔴 四大硬门禁 (只要违反任何一条，本次审查直接作废)
1. **Gate 1：情绪关怀与显式叫停**：发现用户情绪低落或疲惫时，先接住情绪，推迟本轮审查；用户明确输入“别驳我”时立刻彻底退出，不追问、不输出卡片。
2. **Gate 2：先对旧账与逾期清算**：启动审查前先扫描历史账本，有逾期账目时显式核销或公开债务警示，杜绝只开新账不管旧账。
3. **Gate 3：预测必须具备可检验性**：留底预测必须满足“有具体客观指标”、“有明确反驳落空条件”、“有触发动作”，严禁无法证伪的空话。
4. **Gate 4：否定必给可落地的替代路径**：否定一个方案时，必须提炼核心诉求，同时给出一个低成本尝试的替代做法。

### 🟡 四项实用分析指引
- **找具体角色，禁止编造**：内部方案找具体受损岗位；早期个人项目若没有受损人，如实声明即可通过，严禁虚构老用户反对。
- **守住客观底线，好方案必须放行**：对证据充分、成熟且可快速回滚的改动，客观放行通过 (PASS)，严禁为批判而批判。
- **不能因用得少就砍掉**：一年只用一两次但一旦出事要负重大责任的功能，按单次责任代价评估。
- **分清依据硬度，严禁胡编法条**：严格区分标注 `【条文原文】`、`【合理推断】` 与 `【实务惯例】`。

---

## 准确率看板与统计科学

本框架公开记录预测对账结果，作为规则持续修订的凭证。选择“外部干扰”必须注明具体客观原因，防止把失误归咎于大环境。

| 指标项 | 当前数据 | 说明与计算口径 |
|---|---|---|
| **已归档总样本** | **0** | 命中 + 失误 + 未执行 + 外部干扰 + 样本不足 之和 |
| **有效结案样本** | **0** | 仅统计命中与失误项。$N < 20$ 为探索积累期，不宣称已证明；$N \ge 20$ 具备统计参考价值 |
| **预测命中率** | **-%** | $\text{命中次数} / (\text{命中次数} + \text{失误次数})$ |
| **公开失误次数** | **0** | 每次预测失误均沉淀为一条规则补丁 |
| **方案未执行率** | **-%** | $\text{未执行次数} / \text{已归档总样本}$，评估建议在实际中的落地可行性 |
| **外部干扰率** | **-%** | $\text{外部干扰次数} / \text{已归档总样本}$，偏高提示立项时未剥离外部变量 |
| **样本不足率** | **-%** | $\text{样本不足次数} / \text{已归档总样本}$，偏高提示观察期过短或指标不具体 |

---

<details>
<summary>📜 外部审查实录：一次彻底的自我推翻与重构</summary>

在 v3.2 版本发布前夕，由外部审查者严格按本框架自身逻辑对框架进行了一次审查，判定“真需求，但原方案不成立”，抓出了以下核心问题：

1. **业务轨道错配**：本框架核心价值在于避免高代价重大失误，属于低频工具，前期却误按“每天都想用”的高频日常工具去设计指标；
2. **作者画像盲区**：作者具备对抗性思维与极高心理余量，天然耐受否定；但忽略了框架对经验尚浅、处境焦虑、需要信心推力的人群造成的挫败与心理伤害（只有作者能用的工具不是合格产品）；
3. **数字缺乏依据**：设置固定的金额与天数门槛（¥2000/7天），陷入形式主义；
4. **诱发角色捏造**：在没有真实用户的早期或个人项目中，强制要求指出受损角色导致模型编造假角色；
5. **缺少验证闭环**：此前版本仅修改文本表述，从未建立真正回测准确率的对账机制。

作者全盘接受审查结论，删除了无依据的固定阈值，增加诚实豁免要求、情绪前置门禁与基于 `~/.dialectic/ledger.md` 的到期对账机制，重构完成 v3.3 版本。
</details>

---

## 安装与配置

### 1. 本地文件环境 (支持全自动账本对账)

- **Cursor**：将 [`SKILL.md`](SKILL.md) 内容直接复制到项目的 `.cursorrules` 或全局 Settings $\to$ Rules 中。
- **Trae / Antigravity / 自定义 Agent**：克隆本仓库到用户技能目录：
  ```bash
  git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/dialectic
  ```
- **Claude Code**：将 [`SKILL.md`](SKILL.md) 放入当前项目根目录 `.claude/skills/` 下，或作为 Custom Instructions / CLAUDE.md 引入。

首次运行时，工具将自动创建 `~/.dialectic/ledger.md`（若遇到沙盒权限限制则自动降级在当前工程目录 `.dialectic/ledger.md` 下创建）。

### 2. 纯网页无文件环境 (手动台账模式)
适用于 **ChatGPT 网页版 / Claude.ai 纯 Web 界面**：  
直接将 [`SKILL.md`](SKILL.md) 复制到 Custom Instructions（自定义指令）中。系统自动切换为「手动台账模式」，每次审查输出独立留痕文本块供用户手动记录。

### 3. 调用示例
> *“帮我用驳真评估这个功能要不要做”*  
> *“有个方案下周要上会评审，从组织阻力角度帮我过一下”*  
> *“新做的地址校验功能，用驳真看看”*

---

## 🇬🇧 English

> **Adversarial product decision review framework with file-backed falsification ledgers.**

### 3 Review Lenses
- 🏢 **Friction**: Bureaucratic resistance, scapegoating, and compliance theatre.
- 🔪 **Necessity**: Failure points, rollback horizon (>1 month = one-way door), and validation latency.
- ⚖️ **Compliance**: Statutory text vs inferences. High risk mandates alternative fallbacks.

### 4 Hard Gates
- **Gate 1: Emotional Priority & User Stop**: Deferred on user emotional distress; disabled immediately upon "don't critique".
- **Gate 2: Ledger Check & Overdue Handling**: Pre-flight inspection of `ledger.md` to prevent unverified debt accumulation.
- **Gate 3: Falsifiable Sharp Prediction**: Concrete metrics, failure criteria, and bound trigger actions.
- **Gate 4: Mandatory Fallback Path**: Mandates practical, low-cost fallback options whenever rejecting proposals.

---

## 📄 License
MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)
