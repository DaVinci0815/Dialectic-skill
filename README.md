<p align="center">
  <h1 align="center">🛡️ Dialectic · 驳真</h1>
  <p align="center">
    <b>让 AI 停止当“马屁精”。</b><br/>
    <sub>专门为产品决策挑刺、拦截自嗨伪需求的极简 AI 技能（Skill）</sub>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/version-3.2-black?style=flat-square" alt="v3.2">
    <img src="https://img.shields.io/badge/support-Claude%20%7C%20Cursor%20%7C%20ChatGPT%20%7C%20Trae%20%7C%20Antigravity-blue?style=flat-square" alt="Support">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT">
  <p align="center">
    <img src="assets/banner.jpg" alt="Dialectic Banner" width="100%">
  </p>
</p>

---

### 💡 为什么需要它？

默认的 AI 都有“讨好型人格”。当你兴奋地提出一个平庸构想时，AI 永远只会顺着你夸：*“这个想法很有潜力！我们可以从以下 5 点展开……”*，然后微笑着看你带着团队白白烧掉几个月。

**Dialectic 是一把装进 AI 里的冷酷手术刀：在你付出真实研发代价之前，强迫 AI 站在对立面，摧毁任何不切实际的自嗨幻觉。**

| 你的提议 | 默认 AI（讨好型） | 挂载 Dialectic 的 AI（对抗型） |
|---|---|---|
| *“在轻工具里加个签到打卡拉日活”* | “太棒了！积分打卡能极大提升用户粘性……” | **砍掉**：不做用户根本不会死；核心老用户最反感被通知打扰；引来的全是羊毛党。 |
| *“一年用一次的合规系统太低频，砍掉”* | “确实，按频次看性价比太低……” | **刚需**：严禁低频误杀！单次出错主管领导直接担责处分，这是刚性合规避险需求。 |

---

## ⚡ 三档入口与硬分界规则

严格按**决策成本硬分界**自动匹配，杜绝形式主义：
- 🔪 **极速两问 (Flash · 1 分钟)**：改动面 $\le 1$ 个流程节点、物理可秒级回滚、零外部预算。两问见血（若答“致命卡死”或说不出具体受阻角色，**自动强制升档至 Deep**）。
- 🧪 **试错沙盒 (Sandbox · 7 天)**：无历史先例/全新交互，且必须先花时间或金钱才能验证真伪。锁定唯一致命假设，以 $\le$ 7天 / ¥500 做极简闭环验证。
- 📋 **全维审查 (Deep · 15 分钟)**：涉及 $\ge 2$ 个角色/部门利益重分配、牵涉外部合规责任、或直接预算 > ¥2000。全景推演博弈、制度穿透与代偿生路。

---

## 🚫 五大底线铁律与情绪仲裁

0. **情绪仲裁 (Soul First Gate)**：人优先于事。当输入混杂情绪宣泄/失落焦虑与方案构想时，驳真**推迟一轮**先接住情绪；出现“别驳我”等显式豁免词强制停用，绝不追问。
1. **利益受损具象化 (指名道姓)**：必须指明具体岗位（经办人、科室主任）的利益受损、权力削弱与背锅风险，严禁使用“用户习惯难改”等空词。
2. **严禁低频场景误杀 (责任建模)**：严肃合规业务，严禁套用消费级 C 端“频次×痛点”乘法公式，必须按责任暴露与出错代价建模。
3. **法规依据三级隔离**：涉及政策标准，必须显式区分标注：`【条文原文】`、`【合理推断】`、`【实务惯例】`。
4. **强制给出代偿生路**：方案被毙掉时，强制提炼 20% 真正发心，给出单点切片、成熟平台寄生或半人工服务退路。
5. **核心致命假设显式标记**：必须标出唯一最脆弱假设，回答“若该假设被推翻，项目靠什么立足”。

> 💡 **附注（诊断仪非打分器）**：量化公式唯一作用是找准团队认知分歧点（如对迁移可行性或监管外力的判断分歧），非机械算命打分机器。

---

## 🔧 一键使用 (Installation)

```bash
# 克隆到本地技能目录 (Claude Code / Antigravity)
git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/Dialectic
```

或直接将 [`SKILL.md`](SKILL.md) 复制到 **Cursor (`.cursorrules`) / Trae / ChatGPT (Custom Instructions)** 中。

随时在对话中唤醒：
> *“帮我用驳真评估这个方案靠不靠谱”*  
> *“想加个新功能，用极速两问自检一下”*

随库附带标准测试集：[evals/test_cases.md](evals/test_cases.md)（含 C 端功能、B 端低频合规、前沿交互、自嗨看板、情绪熔断、动态升档 6 大典型场景）。

---

## 🇬🇧 English

> **Stop your AI from being a Yes-Man.**  
> An ultra-lean AI skill designed to stress-test product decisions, eliminate vanity features, and identify hidden friction before you spend real capital.

### Visceral Contrast
- **You**: *"Should we add daily check-in badges to our utility app to boost retention?"*
- **Default AI**: *"Great idea! Gamification boosts daily active users..."*
- **Dialectic AI**: *"Kill it. Users won't die without it. Loyal users hate notification clutter. You only attract free-riders. Keep a silent local streak if needed."*

### 3 Execution Modes & Hard Boundaries
- 🔪 **Flash Screen (1 min)**: $\le 1$ process node, physically reversible, zero budget. Two razor-sharp questions (auto-escalates to Deep if critical block is hit or resistance is ambiguous).
- 🧪 **Innovation Sandbox (7 days / $50)**: No precedent/data, requires capital/time to validate. Test the single fatal assumption.
- 📋 **Deep Audit (15 min)**: Affects $\ge 2$ departments/roles, external compliance liability, or budget > $300 / ¥2000. Full audit of stakeholder gaming, regulatory friction, and alternative pathways.

### 5 Ground Rules & Soul First Gate
0. **Soul First Gate (Emotional Priority)**: People over tasks. When emotional fatigue/crisis conflicts with proposal signals, delay Dialectic for one turn to validate the user's situation; explicit opt-outs ("don't audit me", "just venting") immediately shut down the skill with no nagging.
1. **Specific Roles Only**: Must name concrete stakeholders (e.g., clerks, directors) and their real friction, loss of control, or liability. Vague terms banned.
2. **No Low-Frequency Bias**: High-liability compliance tasks cannot be dismissed by consumer frequency metrics. Model by error cost and exposure.
3. **3-Tier Regulatory Isolation**: Explicitly tag regulatory claims as `[Statutory Text]`, `[Logical Inference]`, or `[Industry Custom]`.
4. **Alternative Pathways**: Rejected proposals must extract the core 20% intent to provide a 10% slice, host attachment, or service-first alternative.
5. **Explicit Fatal Assumption**: Must isolate the single most fragile hypothesis that could sink the entire initiative.

> 💡 **Note (Diagnostics over Scoring)**: Formulas serve solely to pinpoint team disagreements (e.g., switchability vs. regulatory pressure), not as arbitrary scorecards.

```bash
git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/Dialectic
```
Works natively with **Cursor, Claude Code, ChatGPT, Antigravity, and Trae**.  
Prompt: *"Run a Dialectic review on this proposal."*

---

## 📄 License
MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)
