<p align="center">
  <h1 align="center">🛡️ Dialectic · 驳真</h1>
  <p align="center">
    <b>面向产品决策的对抗性审查框架</b><br/>
    <sub>在投入开发前发现真正阻力，带本地账本与到期对账闭环</sub>
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

### 为什么需要它？

默认的大模型倾向于顺从赞美你的构想，容易忽视组织推行阻力与潜在的合规风险。Dialectic 强迫大模型站在反面寻找真实破绽，并在每次审查后留下可验证的预测记录。

| 用户提议 | 普通回答 | 驳真审查 |
|---|---|---|
| *“在轻量工具里做签到打卡提升活跃度”* | “很好的想法，积分能增加粘性……” | **放弃**：不做这个功能用户流程不受阻；老用户反感打扰；引来的多是非目标用户。 |
| *“一年用一两次的合规系统性价比低，砍掉”* | “确实，按使用频率看投入不划算……” | **保留**：严肃合规按单次出错代价评估。违规会导致行政处罚与业务暂停，不能因用得少就砍掉。 |

---

## 核心机制

### 1. Step 0 账本扫描与到期对账
大模型对话结束后没有持久记忆。Dialectic 通过本地文件 `~/.dialectic/ledger.md` 实现跨会话对账。
- **有文件权限环境 (Cursor / Claude Code / Trae / Antigravity / 命令行)**：  
  全自动读写。每次审查前，自动检查待对账清单；有到期项时，请用户确认结果（验证命中 / 预测失误 / 样本不足 / 方案未执行 / 外部干扰）；确认后自动移入归档区，防止重复询问。新审查完成后，自动追加新记录。
- **无文件权限环境 (网页版 ChatGPT / 纯聊天窗口)**：  
  自动切换为「手动模式」。输出审查结论与留痕文本块，提示用户自行复制保存，绝不假装访问了本地磁盘。

### 2. 三大审查焦点
不搞抽象代号，直接按问题本质对齐审查焦点：
- 🏢 **组织阻力 (Friction)**：多部门方案或需要上会评审。看谁吃亏、谁背锅、大家会不会表面配合私下敷衍。
- 🔪 **功能必要 (Necessity)**：日常功能增删与新点子。看不做卡在哪一步、万一做错恢复原样要多久（超 1 个月按重大决策审查）。
- ⚖️ **合规红线 (Compliance)**：严肃业务与法规合规。看出错代价有多大、依据是法律原文还是平时习惯（高风险必须给出低成本替代兜底方案）。

---

## 规则分层

### 🔴 四大硬门禁 (只要违反，审查直接作废)
0. **情绪优先**：发现用户情绪低落或疲惫时，先接住情绪，推迟审查；用户叫停立刻停止。
1. **先对旧账**：本地账本有到期未确认项时，必须先对账，禁止直接开新账。
2. **预测必须能检验**：留底预测必须有具体指标、必须写明“怎样算我说错了”、命中后必须有具体的调整动作，严禁空话。
3. **必须给替代路径**：否定一个方案时，必须同时给出一个低成本尝试的替代解法。

### 🟡 四项实用分析指引
- **找具体角色，禁止编造**：内部方案找具体受损岗位；早期个人项目若没有受损人，如实声明即可，禁止虚构老用户反对。
- **不能因用得少就砍掉**：一年只用一两次但一旦出事要负重大责任的功能，按责任代价评估。
- **分清依据硬不硬**：严格区分标注 `【条文原文】`、`【合理推断】` 与 `【实务惯例】`。
- **排查机制漏洞**：看初期是否单向填数据无回报、考核是否诱发刷假数据、系统是否偷懒转嫁操作成本。

---

## 准确率看板与失误记录

本框架公开记录预测对账结果，作为规则持续修订的凭证。选择“外部干扰”必须注明具体因果原因，防止把失误归咎于大环境：

| 指标项 | 当前数据 | 说明 |
|---|---|---|
| **累计有效样本** | **0** | 仅统计命中与失误项，累计 $\ge 5$ 次开始评估 |
| **预测命中率** | **-%** | $\ge 70\%$ 说明框架有效；$< 50\%$ 须重新修订规则 |
| **公开失误次数** | **0** | 每次预测失误均沉淀为一条规则补丁 |
| **方案未执行率** | **-%** | 独立统计，评估建议在实际中的落地可行性 |
| **外部干扰率** | **-%** | 占比 $> 20\%$ 说明预测时未充分考虑外部变数 |
| **样本不足率** | **-%** | 占比 $> 30\%$ 提示观察期设置过短或指标不具体 |

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

## 安装与使用

### 1. 本地文件环境 (推荐)
适用于 **Claude Code / Cursor / Trae / Antigravity / 命令行 Agent**：
```bash
# 初始化账本
mkdir -p ~/.dialectic && touch ~/.dialectic/ledger.md

# 克隆技能
git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/Dialectic
```
将自动启用 Step 0 自动读写与归档对账。

### 2. 网页无文件环境
适用于 **ChatGPT Custom Instructions / 纯 Web 界面**：  
直接将 [`SKILL.md`](SKILL.md) 复制到 Custom Instructions 中。系统自动切换为「手动模式」，审查后输出独立留痕文本块供用户手动记录。

### 3. 调用示例
> *“帮我用驳真评估这个功能要不要做”*  
> *“有个方案下周要上会评审，从组织阻力角度检查一下”*

---

## 🇬🇧 English

> **Adversarial product decision review framework with file-backed falsification ledgers.**

### 3 Review Lenses
- 🏢 **Friction**: Bureaucratic resistance, scapegoating, and compliance theatre.
- 🔪 **Necessity**: Failure points, rollback horizon (>1 month = one-way door), and validation latency.
- ⚖️ **Compliance**: Statutory text vs inferences. High risk mandates alternative fallbacks.

### Core Rules
- **Hard Gates**: Emotional Priority, Pre-Flight Ledger Check, Falsifiable Sharp Assertions, Mandatory Alternatives.
- **Guidelines**: Concrete Stakeholders (reverse burden of proof for solo projects), Liability Modeling, 3-Tier Regulatory Tagging, 4 System Loopholes.

---

## 📄 License
MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)
