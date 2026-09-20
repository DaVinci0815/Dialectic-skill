<p align="center">
  <h1 align="center">🛡️ Dialectic · 驳真</h1>
  <p align="center">
    <b>产品决策对抗性审查框架</b><br/>
    <sub>在投入开发前发现方案漏洞与落地阻力，含文件级到期对账闭环</sub>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/version-3.3-black?style=flat-square" alt="v3.3">
    <img src="https://img.shields.io/badge/ledger-~%2F.dialectic%2Fledger.md-blue?style=flat-square" alt="Ledger">
    <img src="https://img.shields.io/badge/support-Claude%20%7C%20Cursor%20%7C%20ChatGPT%20%7C%20Trae%20%7C%20Antigravity-blue?style=flat-square" alt="Support">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT">
  <p align="center">
    <img src="assets/banner.jpg" alt="Dialectic Banner" width="100%">
  </p>
</p>

---

### 功能对比

普通大模型在面对产品构想时倾向于顺从肯定，容易忽略潜在的组织阻力与合规风险。Dialectic 强制模型站在对立面寻找漏洞，并在每次审查后生成可对账的预测记录。

| 用户提议 | 常规回答 | 驳真审查 |
|---|---|---|
| *“在轻量工具里加签到打卡提升日活”* | “很好的方向，积分体系能增强用户粘性……” | **取消**：不做该功能用户流程不受阻；老用户反感打扰；引来非目标羊毛用户。 |
| *“年频次很低的合规系统性价比低，砍掉”* | “按使用频次看确实投入产出比较低……” | **保留**：严肃合规业务按单次出错代价评估。舞弊或违规会导致行政处罚与资质暂停。 |

---

## 运行机制

### 1. 载体能力与 Step 0 对账
- **文件载体 (Cursor / Claude Code / Trae / Antigravity / 命令行)**：  
  全功能模式。自动维护本地账本 `~/.dialectic/ledger.md`。每次启动审查前，模型主动扫描 `## 待对账` 分区中的到期条目；对账完成后将该条标记为 `resolved` 并移入 `## 已归档` 分区，避免重复对账与上下文膨胀。写入新记录后进行回读校验。
- **无文件载体 (ChatGPT Custom Instructions / 纯 Web 聊天)**：  
  自动降级为**「手动台账模式」**。因环境无本地磁盘读写权限，模型在输出留痕桩时提示用户自行复制至本地笔记；下次使用时用户可手动贴回未核销记录。明确声明降级，不假装闭环。

### 2. 三张场景卡片
- **卡片 A（组织影响）**：用于跨部门方案与上会决策。审查利益受损岗位、背锅风险与形式主义应付。
- **卡片 B（功能决策）**：用于日常功能与单点改动。审查核心阻断点、回滚周期（>1 个月按不可逆审查）与验证信号期。
- **卡片 C（合规风险）**：用于严肃合规与低频高损业务。审查责任暴露与法规依据层级（高风险强制给替代方案）。

---

## 规则体系分层

### 🔴 四大硬门禁 (违反直接判定审查无效)
0. **情绪优先**：输入含情绪困扰时推迟审查，先回应感受；输入“别驳我”时停止审查，不追问。
1. **Step 0 前置对账**：未检查本地 ledger 或存在到期未核销项时，禁止直接出具新卡。
2. **断言必须具备检验性**：留痕断言须满足**可观测**（有具体指标）、**可反驳**（有明确落空条件）、**有代价**（命中须改变后续行动）。
3. **必须提供替代路径**：否定方案时，须保留核心诉求并给出低成本降级方案（单点精简、平台挂靠、半人工）。

### 🟡 审查分析指引
- **角色具体化与诚实豁免**：组织方案须指名具体受损岗位；个人项目无受损人时须如实说明核查范围，严禁捏造虚构角色。
- **严肃业务按责任建模**：低频高风险业务禁止套用频次乘法公式，按单次出错代价评估。
- **法规依据三级区分**：严格区分标注 `【条文原文】`、`【合理推断】` 与 `【实务惯例】`。
- **机制四大漏洞排查**：核查初期无回报投入、指标异化、转嫁负担、缺乏规则保底。

---

## 准确率看板与信誉防线

为防止将预测失误轻率归咎于“环境变化”，选择“外部干扰”必须强制提供具体因果阻断举证：

| 指标项 | 当前数据 | 说明 |
|---|---|---|
| **累计有效样本** | **0** | 仅统计命中与失误项，$\ge 5$ 次开始评估 |
| **预测命中率** | **-%** | $\ge 70\%$ 框架有效；$< 50\%$ 须重构规则 |
| **公开失误次数** | **0** | 每次预测失误均沉淀为一条规则补丁 |
| **方案未执行率** | **-%** | 独立统计，评估建议在现实中的落地可行性 |
| **外部干扰率** | **-%** | 占比 $> 20\%$ 提示断言隔离外生变量能力不足 |
| **样本不足率** | **-%** | 占比 $> 30\%$ 提示断言不够具体或观察期过长 |

---

<details>
<summary>📜 v3.2 外部审查复盘记录</summary>

2026 年 9 月，外部审查者使用本框架自身的审查逻辑对框架执行了严格测试，判定“真需求，但原方案不成立”，并指出了以下核心问题：

1. **业务轨道错配**：本框架核心价值在于避免高代价重大失误，属于典型的“低频高责任”工具，前期却误按“每天都想用”的高频日常工具来定位与设计指标；
2. **作者画像盲区**：作者具备对抗性思维、抗压能力与充足心理余量，因此天然耐受否定；但严重忽略了该框架对经验尚浅、处境焦虑、需要信心推力的人群造成的挫败与心理伤害（只有作者能用的工具不是合格产品）；
3. **数字缺乏依据**：设置固定的金额与天数阈值（¥2000/7天），用伪精确替换真判断，滑入形式主义；
4. **诱发角色捏造**：在没有真实用户的早期或个人项目中，强制要求指出受损角色导致模型编造假角色；
5. **缺少验证闭环**：此前版本仅修改文本表述，从未建立真正回测准确率的对账机制。

作者全盘接受审查结论，删除了无依据的固定阈值，增加诚实豁免举证要求、情绪前置门禁与基于 `~/.dialectic/ledger.md` 的 Step 0 到期对账机制，重构完成 v3.3 版本。
</details>

---

## 安装与使用

### 1. 本地文件载体 (推荐)
适用于 **Claude Code / Cursor / Trae / Antigravity / 命令行 Agent**：
```bash
# 初始化账本
mkdir -p ~/.dialectic && touch ~/.dialectic/ledger.md

# 克隆技能
git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/Dialectic
```
将自动启用 Step 0 自动读写与归档对账。

### 2. 无文件载体
适用于 **ChatGPT Custom Instructions / 纯 Web 界面**：  
直接将 [`SKILL.md`](SKILL.md) 复制到 Custom Instructions 中。系统将自动降级为「手动台账模式」，每次审查输出独立留痕文本块供手动记录。

### 3. 调用示例
> *“帮我用驳真评估这个功能要不要做”*  
> *“有个方案下周要上会评审，用卡片 A 检查一下”*

---

## 🇬🇧 English

> **Adversarial product decision review framework with file-backed falsification ledgers.**

### Carrier Modes
- **File System Agents (Cursor / Claude Code / Trae / Antigravity)**: Full automated mode. Reads and writes `~/.dialectic/ledger.md` with separate `## Pending` and `## Archived` sections. Write verification enabled.
- **Stateless Web (ChatGPT Custom Instructions)**: Auto-degrades to Manual Ledger Mode. Emits copyable ledger blocks for manual external tracking without pretending to have disk access.

### Rules Hierarchy
- **Hard Gates**: Emotional Priority, Step 0 Pre-Flight Check, Falsifiable Sharp Assertions, Mandatory Alternatives.
- **Guidelines**: Concrete Stakeholders (reverse burden of proof for solo tools), Liability Exposure Modeling, 3-Tier Regulatory Tagging, 4 System Loopholes.

---

## 📄 License
MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)
