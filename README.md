<p align="center">
  <h1 align="center">🛡️ Dialectic · 驳真</h1>
  <p align="center">
    <b>产品决策对抗性审查框架</b><br/>
    <sub>在投入开发前发现方案漏洞与落地阻力，含协议级到期对账闭环</sub>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/version-3.3-black?style=flat-square" alt="v3.3">
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

### 1. Step 0 前置对账扫描
每次调用本框架时，模型首先检查历史留痕项。若有断言已达到观察期，须先完成四态对账，再进入本次审查：
`[ ] 验证命中 ｜ [ ] 预测失误 ｜ [ ] 窗口内无信号 ｜ [ ] 无法归因(未执行/外部干扰)`

### 2. 三张场景卡片
- **卡片 A（组织影响）**：用于跨部门方案与上会决策。审查利益受损岗位、背锅风险与形式主义应付。
- **卡片 B（功能决策）**：用于日常功能与单点改动。审查核心阻断点、回滚周期（>1 个月按不可逆审查）与验证信号期。
- **卡片 C（合规风险）**：用于严肃合规与低频高损业务。审查责任暴露与法规依据层级（高风险强制给替代方案）。

---

## 五项基本规则

0. **情绪优先**：输入含情绪困扰时推迟审查，先回应感受；输入“别驳我”时停止审查，不追问。
1. **角色具体化与诚实豁免**：组织方案须指名具体受损岗位；个人项目无受损人时须如实说明核查范围，严禁臆造虚构角色。
2. **严肃业务按责任建模**：低频高风险业务禁止套用频次乘法公式，按单次出错代价评估。
3. **法规依据三级区分**：严格区分标注 `【条文原文】`、`【合理推断】` 与 `【实务惯例】`。
4. **必须提供替代路径**：否定方案时，须保留核心诉求并给出低成本降级方案（单点精简、平台挂靠、半人工）。
5. **断言必须具备检验性**：留痕桩断言须满足**可观测**（有具体指标）、**可反驳**（有明确落空条件）、**有代价**（命中须改变后续行动）。

---

## 准确率看板与失误记录

本框架记录每次预测对账结果，作为规则持续修订的依据：

| 指标项 | 当前数据 | 说明 |
|---|---|---|
| **累计有效样本** | **0** | 剔除无信号与无法归因项，$\ge 5$ 次开始评估 |
| **预测命中率** | **-%** | $\ge 70\%$ 框架有效；$< 50\%$ 须重构规则 |
| **公开失误次数** | **0** | 每次预测失误均沉淀为一条规则补丁 |
| **无信号占比** | **-%** | 占比 $> 30\%$ 提示断言不够具体或观察期过长 |

---

<details>
<summary>📜 v3.2 外部审查复盘记录</summary>

2026 年 9 月，外部审查者使用本框架自身的审查逻辑对框架进行了测试，指出了以下核心问题：
1. **数字缺乏依据**：设置固定的金额与时间阈值，增加形式主义；
2. **诱发角色捏造**：在没有真实用户的早期或个人项目中，强制要求指出利益受损角色导致模型编造假角色；
3. **缺少验证闭环**：此前版本仅修改文本表述，未对预测准确率建立持续对账机制。

作者接受审查结论，删除了无依据的固定阈值，增加诚实豁免举证要求与协议级 Step 0 到期对账机制，重构完成 v3.3 版本。
</details>

---

## 使用方式

### 安装
```bash
git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/Dialectic
```
或直接将 [`SKILL.md`](SKILL.md) 复制到 Cursor (`.cursorrules`)、Trae 或 ChatGPT Custom Instructions 中。

### 调用示例
> *“帮我用驳真评估这个功能要不要做”*  
> *“有个方案下周要上会评审，用卡片 A 检查一下”*

---

## 🇬🇧 English

> **Adversarial product decision review framework with protocol-native falsification ledgers.**

### Mechanism
- **Step 0 Pre-Flight Check**: Automatically scans previous overdue predictions and requires 4-state resolution before starting a new audit.
- **Card A (Org Impact)**: Penetrates stakeholder friction, bureaucratic gaming, and accountability.
- **Card B (Feature Decision)**: Tests failure points, rollback horizon (>1 month = one-way door), and validation latency.
- **Card C (Compliance & Risk)**: Distinguishes statutory text from inferences. High risk mandates alternative paths.

### Core Rules
0. **Emotional Priority**: Pauses review when user is under distress. Opt-out commands stop execution immediately.
1. **Concrete Stakeholders & Honest Exemption**: Reverse burden of proof for solopreneur tools (prove checked scope, no fake roles).
2. **Liability Exposure Modeling**: Low-frequency compliance tasks must not be dismissed by vanity usage metrics.
3. **3-Tier Regulatory Tagging**: `[Statutory Text]`, `[Logical Inference]`, `[Industry Custom]`.
4. **Mandatory Alternatives**: Must extract core intent and provide a lightweight fallback.
5. **Ledger Sharpness**: Assertions must be Observable, Falsifiable, and Action-consequential.

---

## 📄 License
MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)
