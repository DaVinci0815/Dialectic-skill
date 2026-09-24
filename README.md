<p align="center">
  <h1 align="center">🛡️ 驳真 · Dialectic</h1>
  <p align="center">
    <b>大模型总爱顺从。驳真负责提出异议。</b><br/>
    <sub>在投入开发前，撞上真正的阻力。自带本地对账闭环，每一次预测都立字据。</sub>
  </p>
  <p align="center">
    <img src="https://img.shields.io/badge/version-3.3-black?style=flat-square" alt="v3.3">
    <img src="https://img.shields.io/badge/ledger-~%2F.dialectic%2Fledger.md-blue?style=flat-square" alt="Ledger">
    <img src="https://img.shields.io/badge/platforms-Cursor%20%7C%20Claude%20Code%20%7C%20Trae%20%7C%20Antigravity%20%7C%20ChatGPT-blue?style=flat-square" alt="Platforms">
    <img src="https://img.shields.io/badge/license-MIT-green?style=flat-square" alt="MIT">
  </p>
  <p align="center">
    <img src="assets/banner.jpg" alt="Dialectic Banner" width="100%">
  </p>
</p>

---

### 为什么需要它？

默认的大模型总在赞美你的构想，却看不见落地后的推行阻力与违规隐患。  
**驳真只做一件事：站到你的反面，逼出真正的破绽。**

| 提议 | 普通 AI | 驳真审查 |
|---|---|---|
| *“加个打卡积分系统提日活”* | “很好的想法，积分能增加粘性……” | **建议放弃**。不做该功能流程不受阻；老用户反感打扰；引来的多是羊毛党。<br/>*替代解法：仅在本地安静记录连续使用天数。* |
| *“合规系统一年用两次，太贵了砍掉”* | “确实，按使用频率看投入不划算……” | **建议保留**。严肃业务按单次出错代价算。违规会导致停牌处罚，不能按用得少就砍。<br/>*替代解法：按场次租赁设备与服务。* |
| *“地址输入框加个前端实时格式校验”* | “建议慎重，可能会增加用户操作负担……” | **建议通过 (PASS)**。已有真实报错日志支撑，交互成熟且 5 分钟可无损回滚。<br/>*大方放行，绝不无病呻吟。* |

---

## 三大审查透镜

不搞抽象代号，只对齐三类本质问题：

- 🏢 **组织阻力 (Friction)**  
  *多部门协作 / 方案评审*  
  方案动了谁的奶酪？谁在背锅？谁在表面配合、私下应付差事？
- 🔪 **功能必要 (Necessity)**  
  *业务单点改动 / 新功能*  
  不做它业务到底卡在哪？万一做烂了能不能在 1 个月内退回去？
- ⚖️ **合规红线 (Compliance)**  
  *法律合规 / 审计财务*  
  单次出错代价有多大？依据是法律白纸黑字，还是大家的通融惯例？

---

## 四项不可妥协的底线

1. **Gate 1：先顾人，再顾事**  
   察觉到疲惫与焦虑，推迟审查，先接情绪；用户明确叫停时立刻退出，不追问、不输出卡片。
2. **Gate 2：先平旧账，再开新账**  
   启动审查前自动扫描账本。有旧账到期先对账，不拖欠坏账。
3. **Gate 3：说狠话，立字据**  
   留存的预测必须写清客观指标、写清“怎样算我说错了”、并绑定命中后的调整动作。拒绝无法反驳的空话。
4. **Gate 4：否定，必须给出路**  
   砍掉一个方案时，必须提炼核心诉求，给出一个低成本尝试的替代解法。绝不只管否定不管解决。

> **守门底线**：证据扎实、改动可逆的好方案，**必须客观放行通过 (PASS)**，严禁为体现批判深度而无理挑刺。

---

## 本地账本与到期对账

大模型没有持久记忆。驳真通过 `~/.dialectic/ledger.md` 实现跨越会话的持续对账。

```
~/.dialectic/ledger.md
├── ## 待观察 (Active Pending)     # 观察期内的健康预测
├── ## 逾期未对账 (Overdue Debt)   # 已过观察期、等待核销的账目
└── ## 已归档 (Archived)           # 已核销结案的历史记录
```

- **交互对话中**：检测到逾期记录，先弹出对账卡请用户核销（命中 / 失误 / 样本不足 / 未执行 / 外部干扰），确认后归档。
- **单轮运行中**：在结果顶部公开挂起【逾期债务警示】，不阻塞执行，杜绝掩盖陈年坏账。
- **纯网页环境**：无文件权限时自动切换为「手动台账模式」，输出独立文本块供用户手动复制，绝不假装读写了磁盘。

---

## 准确率看板

公开对账结果，作为持续修订审查规则的凭证：

| 指标 | 状态 | 说明 |
|---|---|---|
| **归档总样本** | **0** | 已结案的全部记录总和 |
| **有效结案样本** | **0** | 仅含命中与失误项。$N < 20$ 为早期积累，不宣称已证明；$N \ge 20$ 具备参考价值 |
| **预测命中率** | **-%** | $\text{命中次数} / (\text{命中次数} + \text{失误次数})$ |
| **方案未执行率** | **-%** | 评估给出的建议在现实中的可行性 |
| **外部干扰率** | **-%** | 偏高说明当初立项时未把外部变数剥离干净 |
| **样本不足率** | **-%** | 偏高说明设置的观察期过短，或指标不够具体 |

---

<details>
<summary>📜 外部审查实录：一次彻底的自我推翻与重构</summary>

在 v3.2 版本发布前夕，外部审查者严格按本框架自身逻辑对框架进行了一次审查，判定“真需求，但原方案不成立”，抓出了五个核心问题：

1. **业务轨道错配**：本框架核心价值在于避免高代价重大失误，属于低频工具，前期却误按“每天都想用”的高频工具去设计指标；
2. **作者画像盲区**：作者具备对抗性思维与极高心理余量，天然耐受否定；但忽略了框架对处境焦虑、需要信心推力的人群造成的心理伤害；
3. **数字缺乏依据**：设置固定的金额与天数门槛（¥2000/7天），陷入伪精确形式主义；
4. **诱发角色捏造**：早期项目中强制指出受损角色导致模型编造假角色；
5. **缺少验证闭环**：此前版本从未建立真正回测准确率的对账机制。

作者全盘接受审查结论，删除了无依据的固定阈值，增加诚实声明免检、情绪优先门禁与基于 `ledger.md` 的到期对账机制，重构完成 v3.3 版本。
</details>

---

## 安装与使用

### 1. 支持本地文件的工具 (自动对账)
- **Cursor**：将 [`SKILL.md`](SKILL.md) 放入 `.cursorrules` 或全局 Rules 中；
- **Claude Code**：放入项目 `.claude/skills/` 下，或作为 Custom Instructions / CLAUDE.md 载入；
- **Trae / Antigravity**：克隆本仓库到技能目录：
  ```bash
  git clone https://github.com/shahuichao24-ops/Dialectic-skill.git ~/.agents/skills/dialectic
  ```

### 2. 纯网页对话环境 (手动模式)
- **ChatGPT / Claude.ai 网页版**：将 [`SKILL.md`](SKILL.md) 复制到 Custom Instructions 中。系统自动切换为手动模式，审查后输出独立留痕文本块供你复制保存。

### 3. 开始对话
> *“用驳真看看这个新功能做不做”*  
> *“方案下周上会，帮我从组织阻力角度过一遍”*

---

## 🇬🇧 English

> **Adversarial product decision review framework with file-backed falsification ledgers.**

### 3 Lenses
- 🏢 **Friction**: Bureaucratic inertia, scapegoating, and compliance theatre.
- 🔪 **Necessity**: Failure points, rollback horizon (>1 month = one-way door), and validation latency.
- ⚖️ **Compliance**: Statutory text vs inferences. High risk mandates practical fallbacks.

### 4 Non-Negotiables
- **Gate 1: People Over Tasks**: Deferred on emotional distress; halts immediately upon user request.
- **Gate 2: Clear Old Debts First**: Pre-flight inspection of `ledger.md`. Overdue items must be reconciled or highlighted.
- **Gate 3: Sharp & Falsifiable**: Concrete metrics, clear failure conditions, and bound actions.
- **Gate 4: Mandatory Fallback**: Any rejection must provide a low-cost, actionable alternative.

---

## 📄 License
MIT © 2026 [shahuichao](https://github.com/shahuichao24-ops)
