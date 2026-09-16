<p align="center">
  <h1 align="center">🛡️ Dialectic · 驳真</h1>
  <p align="center">
    <b>让 AI 停止当“马屁精”。</b><br/>
    <sub>专门为产品决策挑刺、拦截自嗨伪需求的极简 AI 技能（Skill）</sub>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/version-3.1-black?style=flat-square" alt="v3.1">
    <img src="https://img.shields.io/badge/support-Claude%20%7C%20Cursor%20%7C%20ChatGPT%20%7C%20Trae%20%7C%20Antigravity-blue?style=flat-square" alt="Support">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT">
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

## ⚡ 三档极简入口

- 🔪 **极速两问 (Flash · 1 分钟)**：小改动、单点功能。只问两句：*“不做真的会死吗？”、“现场谁最不想让它上线？”*
- 🧪 **试错沙盒 (Sandbox · 7 天)**：前沿新物种、全新概念。锁定唯一致命假设，以 $\le$ 7天 / ¥500 配额做极小闭环实验。
- 📋 **全维审查 (Deep · 15 分钟)**：核心业务线与重大方案。审查现场利益抵制、防指标表演性合规、输出代偿降级生路。

---

## 🚫 四条底线铁律

1. **指名道姓**：必须指明具体岗位（经办人、科室主任）的利益受损，严禁使用“用户习惯难改”等空词。
2. **防误杀低频**：严肃合规业务，严禁套用消费级 C 端“频次×痛点”乘法公式。
3. **给代偿生路**：方案被毙掉时，强制提炼真正发心，给出单点切片、成熟平台寄生或半人工服务退路。
4. **公式是诊断仪**：量化公式不是打分机器，唯一作用是找准团队认知分歧点。

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

随库附带标准测试集：[evals/test_cases.md](evals/test_cases.md)（含 C 端功能、B 端低频合规、前沿交互、自嗨看板 4 大典型场景）。

---

## 🇬🇧 English

> **Stop your AI from being a Yes-Man.**  
> An ultra-lean AI skill designed to stress-test product decisions, eliminate vanity features, and identify hidden friction before you spend real capital.

### Visceral Contrast
- **You**: *"Should we add daily check-in badges to our utility app to boost retention?"*
- **Default AI**: *"Great idea! Gamification boosts daily active users..."*
- **Dialectic AI**: *"Kill it. Users won't die without it. Loyal users hate notification clutter. You only attract free-riders. Keep a silent local streak if needed."*

### 3 Execution Modes
- 🔪 **Flash Screen (1 min)**: *Will users critically get stuck without it? Who least wants this deployed?*
- 🧪 **Innovation Sandbox (7 days / $50)**: Isolate the single fatal assumption with an explicit stopping condition.
- 📋 **Deep Audit (15 min)**: Penetrate stakeholder resistance, early contributor deficit, and metric gaming.

### 4 Ground Rules
1. **Specific Roles Only**: Must name concrete stakeholders (e.g., clerks, directors) and their real friction.
2. **No Low-Frequency Bias**: High-liability compliance tasks cannot be dismissed by consumer frequency metrics.
3. **Alternative Pathways**: Rejected proposals must provide a 10% slice, host attachment, or service-first alternative.
4. **Formulas as Diagnostics**: Math is used solely to locate team disagreements, not for arbitrary scoring.

```bash
git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/Dialectic
```
Works natively with **Cursor, Claude Code, ChatGPT, Antigravity, and Trae**.  
Prompt: *"Run a Dialectic review on this proposal."*

---

## 📄 License
MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)
