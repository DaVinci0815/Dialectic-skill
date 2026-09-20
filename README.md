<p align="center">
  <h1 align="center">🛡️ Dialectic · 驳真</h1>
  <p align="center">
    <b>让 AI 停止当“马屁精”。</b><br/>
    <sub>一个为产品决策挑刺、拦截自嗨伪需求、自带协议级到期对账的极简 AI 对抗性框架</sub>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/version-3.3-black?style=flat-square" alt="v3.3">
    <img src="https://img.shields.io/badge/falsifiable-ledger%20enabled-green?style=flat-square" alt="Falsifiable">
    <img src="https://img.shields.io/badge/support-Claude%20%7C%20Cursor%20%7C%20ChatGPT%20%7C%20Trae%20%7C%20Antigravity-blue?style=flat-square" alt="Support">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT">
  <p align="center">
    <img src="assets/banner.jpg" alt="Dialectic Banner" width="100%">
  </p>
</p>

---

### 💡 为什么需要它？

默认的 AI 都有“讨好型人格”。当你兴奋地提出一个平庸构想时，AI 永远只会顺着你夸：*“这个想法很有潜力！我们可以从以下 5 点展开……”*，然后微笑着看你带着团队白白烧掉几个月。

**Dialectic 是一把装进 AI 里的冷酷手术刀：在你付出真实代价之前，强迫 AI 站在对立面寻找机制死穴，并自带到期留痕与真实准确率对账。**

| 你的提议 | 默认 AI（讨好型） | 挂载 Dialectic 的 AI（对抗型） |
|---|---|---|
| *“在轻工具里加个签到打卡拉日活”* | “太棒了！积分打卡能极大提升用户粘性……” | **砍掉**：不做用户根本不会死；核心老用户最反感被打扰；引来的全是羊毛党。 |
| *“一年用一次的合规系统太低频，砍掉”* | “确实，按频次看性价比太低……” | **刚需**：严禁低频误杀！单次出错主管直接担责处分，这是刚性合规避险需求。 |

---

## ⚡ 协议自闭环：Step 0 到期对账扫描

市面上 99% 的决策框架都死在“从不验证自己准不准”。

**Dialectic 将闭环直接写进协议底层**：每次调用本 Skill，AI 的 **Step 0 是主动扫描历史留痕桩**。若有历史预测已过观察窗口，必须先引导完成四态对账，方可进入新审查：
```text
[ ] 验证命中 (预测成立) ｜ [ ] 被打脸 (预测落空) ｜ [ ] 窗口内无信号 (待定) ｜ [ ] 无法归因 (外部干扰)
```
**谁用它做下一次决策，谁就必须先面对上一次的真实结果。**

---

## 🃏 三张 3 分钟场景卡

解耦**回滚周期**（成本维度）与**验证窗口**（证据维度），拒绝形式主义：

- 🏢 **卡片 A（组织与会议穿透卡）**：方案上会、跨部门协作。穿透利益受损角色、背锅方与潜在的“表演性应付”。（关键经办人实质受损 $\to$ 强制深度推演）
- 🔪 **卡片 B（功能与单点探针卡）**：新功能增删、日常点子。穿透“不做真的会死吗”与验证信号期。（回滚周期 $> 1$ 个月或后果外化 $\to$ 升单向门）
- ⚖️ **卡片 C（合规与责任避险卡）**：医疗、严肃考务、安全审计等低频高损场景。穿透责任暴露与三级依据。（缺乏条文原文且单次代价极高 $\to$ 最高风险标记 + 强制代偿）

---

## 🚫 底线铁律与情绪仲裁

0. **情绪仲裁 (Soul First Gate)**：人优先于事。当输入混杂情绪宣泄/失落焦虑与方案构想时，**推迟一轮审查**，先接住情绪；出现“别驳我”等豁免词强制停用，绝不追问。
1. **利益受损具象化 (含诚实豁免)**：组织级必须指名经办人背锅与新增麻烦；个人产品严禁臆造虚拟角色，**实行举证责任倒置**（必须声明已核查范围但无法识别，禁止凭空捏造）。
2. **严禁低频场景误杀**：严肃合规业务，严禁套用消费级 C 端“频次×痛点”公式，必须按责任暴露与出错代价建模。
3. **法规依据三级隔离**：政策与标准必须显式区分标注：`【条文原文】`、`【合理推断】`、`【实务惯例】`。
4. **强制给出代偿生路**：方案被毙掉时，必须提炼 20% 真正发心，给出单点切片、成熟平台寄生或半人工服务退路。
5. **留痕桩断言锐度门禁**：留痕桩断言必须同时满足**可观测**（具体客观指标）、**可反驳**（输赢边界明确）、**有代价**（命中必须改变具体行动），严禁不可证伪的水话。

---

## 📊 准确率看板与打脸记录 (Public Falsification Ledger)

我们不追求“宣称自己永远正确”，而是把**“累计被打脸”当成核心资产公开记录**——每一次被打脸，都是规则进化的真实证据：

| 指标项 | 当前数据 | 判定准则 |
|---|---|---|
| **累计有效回测样本** | **0** 次 | 剔除“无信号”与“无法归因”后累计 $\ge 5$ 次开始统计 |
| **验证命中率** | **-%** | $\ge 70\%$ 为有效；$< 50\%$ 强制规则复盘重构 |
| **累计公开被打脸** | **0** 次 | 每被打脸一次，沉淀一条规则补丁 |
| **无信号避险占比** | **-%** | 占比 $> 30\%$ 强制触发断言迟钝警戒 |

---

<details>
<summary>📜 外部审查实录：别人拿这把刀审我，我照单全收</summary>

在 v3.2 版本发布前夕，由外部审查者严格按本框架的 Deep 协议对框架自身执行了一次残酷的对抗性审查，给出了致命判定：**“真需求，但当前形态方案不成立”**。

**审查抓出的核心死穴**：
1. **伪精确数字自相矛盾**：给硬分界设置 ¥2000/7天 等无依据阈值，用更难的问题替换更简单的问题，陷入形式主义；
2. **逼模型造假角色**：铁律 1 强制角色具象化，但在个人独立产品中根本没有“科室主任”，反而逼模型编造老用户不满，成了幻觉制造机；
3. **缺乏闭环机制**：三个版本改的都是“说法”，从无回测数据；卡片轻量化后留痕反而更少，更难被证伪。

**作者全盘接受审查结论**，不护短、不辩解，彻底削去伪精确与形式主义八股，确立了协议级 Step 0 到期扫描、诚实豁免举证责任倒置与动态留痕桩，完成了 v3.3 的彻底重构。

**审查不是为了证明自己英明，而是为了在现实残酷打脸前，把胃切开给自己看。**
</details>

---

## 🔧 一键使用 (Installation)

```bash
# 克隆到本地技能目录 (Claude Code / Antigravity)
git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/Dialectic
```

或直接将 [`SKILL.md`](SKILL.md) 复制到 **Cursor (`.cursorrules`) / Trae / ChatGPT (Custom Instructions)** 中。

随时在对话中唤醒：
> *“帮我用驳真评估这个方案靠不靠谱”*  
> *“想加个新功能，用单点探针卡自检一下”*

---

## 🇬🇧 English

> **Stop your AI from being a Yes-Man.**  
> An ultra-lean adversarial decision skill with native pre-flight reconciliation and verifiable falsification ledgers.

### Protocol-Native Loop: Step 0 Due Reconciliation
Before executing any new review, Dialectic actively scans past ledgers. If an observation window has expired, the user must resolve the 4-state outcome first:
`[ ] Hit (Verified) | [ ] Falsified (Hit by reality) | [ ] Inconclusive | [ ] Confounded`

### 3 Focused Cards
- 🏢 **Card A (Org & Politics)**: Stakeholder friction, scapegoating, metric gaming.
- 🔪 **Card B (Feature & Probe)**: Single-point ideas, rollback horizon ($\le 1$ month = two-way door), validation latency.
- ⚖️ **Card C (Compliance & Risk)**: Statutory text vs inferences, exposure cost. (High stakes $\to$ Max Risk Flag + Mandatory Compensation).

### Hard Gates & Soul First
0. **Soul First Gate**: People over tasks. Delay audit if user is in distress; instant silent exit on opt-out.
1. **Concrete Stakeholder Friction**: Reverse burden of proof for solopreneur tools (must prove honest exemption).
2. **No Low-Frequency Bias**: Model by liability exposure, not consumer vanity frequency.
3. **3-Tier Regulatory Isolation**: Statutory Text vs Inference vs Custom.
4. **Mandatory Alternative Pathways**: Always provide a 10% slice, host attachment, or service-first route.
5. **Ledger Sharpness Gate**: Assertions must be Observable, Falsifiable, and Action-consequential.

---

## 📄 License
MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)
