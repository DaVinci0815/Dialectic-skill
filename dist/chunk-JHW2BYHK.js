#!/usr/bin/env node

// src/store.ts
import fs from "fs";
import path from "path";
import os from "os";
var LedgerStore = class {
  baseDir;
  jsonPath;
  mdPath;
  constructor(customDir) {
    if (customDir) {
      this.baseDir = customDir;
    } else {
      const homeDir = os.homedir();
      this.baseDir = path.join(homeDir, ".dialectic");
    }
    this.jsonPath = path.join(this.baseDir, "ledger.json");
    this.mdPath = path.join(this.baseDir, "ledger.md");
    this.ensureInitialized();
  }
  ensureInitialized() {
    try {
      if (!fs.existsSync(this.baseDir)) {
        fs.mkdirSync(this.baseDir, { recursive: true });
      }
      if (!fs.existsSync(this.jsonPath)) {
        const initialData = {
          version: 1,
          entries: []
        };
        fs.writeFileSync(this.jsonPath, JSON.stringify(initialData, null, 2), "utf-8");
      }
      const currentData = this.loadData();
      if (currentData.entries.length === 0 && fs.existsSync(this.mdPath)) {
        this.importFromMarkdownIfEmpty(currentData);
      }
      if (!fs.existsSync(this.mdPath)) {
        this.syncMarkdown(this.loadData());
      }
    } catch {
      const fallbackDir = path.join(process.cwd(), ".dialectic");
      this.baseDir = fallbackDir;
      this.jsonPath = path.join(fallbackDir, "ledger.json");
      this.mdPath = path.join(fallbackDir, "ledger.md");
      fs.mkdirSync(fallbackDir, { recursive: true });
      if (!fs.existsSync(this.jsonPath)) {
        const initialData = {
          version: 1,
          entries: []
        };
        fs.writeFileSync(this.jsonPath, JSON.stringify(initialData, null, 2), "utf-8");
      }
      if (!fs.existsSync(this.mdPath)) {
        this.syncMarkdown(this.loadData());
      }
    }
  }
  getPaths() {
    return {
      baseDir: this.baseDir,
      jsonPath: this.jsonPath,
      mdPath: this.mdPath
    };
  }
  loadData() {
    try {
      const raw = fs.readFileSync(this.jsonPath, "utf-8");
      return JSON.parse(raw);
    } catch {
      return { version: 1, entries: [] };
    }
  }
  saveData(data) {
    fs.writeFileSync(this.jsonPath, JSON.stringify(data, null, 2), "utf-8");
    this.syncMarkdown(data);
  }
  importFromMarkdownIfEmpty(data) {
    try {
      const content = fs.readFileSync(this.mdPath, "utf-8");
      const blocks = content.split("\u{1F4CC} \u3010\u5B9E\u6218\u7559\u75D5\u6869\u3011").slice(1);
      for (const block of blocks) {
        const idMatch = block.match(/- id:\s*([^\n\r]+)/);
        const statusMatch = block.match(/- status:\s*([^\n\r]+)/);
        const timeMatch = block.match(/- 审查时间：\s*([^\n\r]+)/);
        const targetMatch = block.match(/- 审查对象：\s*([^\n\r]+)/);
        const lensMatch = block.match(/- 审查透镜：\s*([^\n\r]+)/);
        const predMatch = block.match(/- 核心预测：\s*([^\n\r]+)/);
        const windowMatch = block.match(/- 观察窗口：\s*([^\n\r]+)/);
        const failureMatch = block.match(/- 输赢边界：\s*([^\n\r]+)/);
        const actionMatch = block.match(/- 触发动作：\s*([^\n\r]+)/);
        const resMatch = block.match(/- 对账结果：\s*([^\n\r]+)/);
        const attrMatch = block.match(/- 归因说明：\s*([^\n\r]+)/);
        if (idMatch && targetMatch && predMatch) {
          const id = idMatch[1].trim();
          let lens = "necessity";
          const lensText = lensMatch ? lensMatch[1] : "";
          if (lensText.includes("\u7EC4\u7EC7")) lens = "friction";
          else if (lensText.includes("\u5408\u89C4")) lens = "compliance";
          let windowEnd = new Date(Date.now() + 30 * 24 * 60 * 60 * 1e3).toISOString().split("T")[0];
          if (windowMatch) {
            const dateMatch = windowMatch[1].match(/\d{4}-\d{2}-\d{2}/g);
            if (dateMatch && dateMatch.length > 0) {
              windowEnd = dateMatch[dateMatch.length - 1];
            }
          }
          data.entries.push({
            id,
            status: statusMatch && statusMatch[1].trim() === "resolved" ? "resolved" : "pending",
            createdAt: timeMatch ? timeMatch[1].trim().replace(" ", "T") + ":00Z" : (/* @__PURE__ */ new Date()).toISOString(),
            target: targetMatch[1].trim(),
            lens,
            prediction: predMatch[1].trim(),
            windowEnd,
            failureCondition: failureMatch ? failureMatch[1].trim() : "",
            triggerAction: actionMatch ? actionMatch[1].trim() : "",
            resolution: resMatch ? resMatch[1].trim() : "unverified",
            attribution: attrMatch ? attrMatch[1].trim() : "none"
          });
        }
      }
      if (data.entries.length > 0) {
        fs.writeFileSync(this.jsonPath, JSON.stringify(data, null, 2), "utf-8");
      }
    } catch {
    }
  }
  syncMarkdown(data) {
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const activePending = [];
    const overdueDebt = [];
    const archived = [];
    for (const entry of data.entries) {
      if (entry.status === "resolved") {
        archived.push(entry);
      } else if (entry.windowEnd < today) {
        overdueDebt.push(entry);
      } else {
        activePending.push(entry);
      }
    }
    const renderEntry = (e) => {
      const lines = [
        `\u{1F4CC} \u3010\u5B9E\u6218\u7559\u75D5\u6869\u3011`,
        `- id: ${e.id}`,
        `- status: ${e.status}`,
        `- \u5BA1\u67E5\u65F6\u95F4\uFF1A${e.createdAt.replace("T", " ").slice(0, 16)}`,
        `- \u5BA1\u67E5\u5BF9\u8C61\uFF1A${e.target}`,
        `- \u5BA1\u67E5\u900F\u955C\uFF1A${this.formatLens(e.lens)}`,
        `- \u6838\u5FC3\u9884\u6D4B\uFF1A${e.prediction}`,
        `- \u89C2\u5BDF\u7A97\u53E3\uFF1A\u81F3 ${e.windowEnd}`,
        `- \u8F93\u8D62\u8FB9\u754C\uFF1A${e.failureCondition}`,
        `- \u89E6\u53D1\u52A8\u4F5C\uFF1A${e.triggerAction}`,
        `- \u5BF9\u8D26\u7ED3\u679C\uFF1A${e.resolution}`,
        `- \u5F52\u56E0\u8BF4\u660E\uFF1A${e.attribution || "none"}`
      ];
      if (e.resolvedAt) {
        lines.push(`- \u6838\u9500\u65F6\u95F4\uFF1A${e.resolvedAt.replace("T", " ").slice(0, 16)}`);
      }
      return lines.join("\n");
    };
    const mdContent = [
      `# \u9A73\u771F\u5B9E\u6218\u51B3\u7B56\u53F0\u8D26 (Dialectic Ledger)`,
      ``,
      `> \u672C\u53F0\u8D26\u7531 Dialectic \u5F15\u64CE\u81EA\u52A8\u7EF4\u62A4\u3002\u81EA\u52A8\u6BD4\u5BF9\u7CFB\u7EDF\u65F6\u949F\uFF0C\u675C\u7EDD\u9648\u5E74\u574F\u8D26\u63A9\u76D6\u3002`,
      ``,
      `## \u5F85\u89C2\u5BDF (Active Pending)`,
      `<!-- \u89C2\u5BDF\u671F\u5C1A\u672A\u5C4A\u6EE1\u7684\u5065\u5EB7\u9884\u6D4B -->`,
      activePending.length > 0 ? activePending.map(renderEntry).join("\n\n") : `*(\u6682\u65E0)*`,
      ``,
      `## \u903E\u671F\u672A\u5BF9\u8D26 (Overdue Debt)`,
      `<!-- \u89C2\u5BDF\u671F\u5DF2\u5C4A\u6EE1\u3001\u5C1A\u672A\u6838\u9500\u7684\u574F\u8D26\u8BB0\u5F55 -->`,
      overdueDebt.length > 0 ? overdueDebt.map(renderEntry).join("\n\n") : `*(\u6682\u65E0)*`,
      ``,
      `## \u5DF2\u5F52\u6863 (Archived)`,
      `<!-- \u5DF2\u5B8C\u6210\u5BF9\u8D26\u6838\u9500\u7684\u5386\u53F2\u8BB0\u5F55 -->`,
      archived.length > 0 ? archived.map(renderEntry).join("\n\n") : `*(\u6682\u65E0)*`,
      ``
    ].join("\n");
    fs.writeFileSync(this.mdPath, mdContent, "utf-8");
  }
  formatLens(lens) {
    switch (lens) {
      case "friction":
        return "\u7EC4\u7EC7\u963B\u529B (Friction)";
      case "necessity":
        return "\u529F\u80FD\u5FC5\u8981 (Necessity)";
      case "compliance":
        return "\u5408\u89C4\u7EA2\u7EBF (Compliance)";
    }
  }
  // 获取分类账目
  getDebts() {
    const data = this.loadData();
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const activePending = [];
    const overdue = [];
    let archivedCount = 0;
    for (const entry of data.entries) {
      if (entry.status === "resolved") {
        archivedCount++;
      } else if (entry.windowEnd < today) {
        overdue.push(entry);
      } else {
        activePending.push(entry);
      }
    }
    return { activePending, overdue, archivedCount };
  }
  // 记录新预测
  recordPrediction(params) {
    const data = this.loadData();
    const now = /* @__PURE__ */ new Date();
    const today = now.toISOString().split("T")[0];
    const endDate = new Date(now.getTime() + params.windowDays * 24 * 60 * 60 * 1e3);
    const windowEnd = endDate.toISOString().split("T")[0];
    const datePrefix = today.replace(/-/g, "");
    const todayEntries = data.entries.filter((e) => e.id.startsWith(datePrefix));
    const nextSeq = String(todayEntries.length + 1).padStart(2, "0");
    const id = `${datePrefix}-${nextSeq}`;
    const newEntry = {
      id,
      status: "pending",
      createdAt: now.toISOString(),
      target: params.target,
      lens: params.lens,
      prediction: params.prediction,
      windowEnd,
      failureCondition: params.failureCondition,
      triggerAction: params.triggerAction,
      resolution: "unverified",
      attribution: "none"
    };
    data.entries.push(newEntry);
    this.saveData(data);
    return newEntry;
  }
  // 核销旧账
  reconcileDebt(params) {
    const data = this.loadData();
    const targetEntry = data.entries.find((e) => e.id === params.id);
    if (!targetEntry) {
      throw new Error(`\u672A\u627E\u5230 ID \u4E3A ${params.id} \u7684\u7559\u75D5\u8BB0\u5F55`);
    }
    if (params.resolution === "external_disruption" && (!params.attribution || params.attribution.trim() === "none")) {
      throw new Error(`\u9009\u62E9\u201C\u5916\u90E8\u5E72\u6270\u201D\u65F6\u5FC5\u987B\u63D0\u4F9B\u5177\u4F53\u7684\u7A81\u53D1\u56E0\u679C\u963B\u65AD\u8BF4\u660E`);
    }
    targetEntry.status = "resolved";
    targetEntry.resolution = params.resolution;
    targetEntry.attribution = params.attribution || "none";
    targetEntry.resolvedAt = (/* @__PURE__ */ new Date()).toISOString();
    this.saveData(data);
    return targetEntry;
  }
  // 计算严密的看板统计指标
  getStats() {
    const data = this.loadData();
    const today = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    let activePending = 0;
    let overdue = 0;
    let archived = 0;
    let verified = 0;
    let falsified = 0;
    let insufficientSample = 0;
    let unimplemented = 0;
    let externalDisruption = 0;
    for (const e of data.entries) {
      if (e.status === "resolved") {
        archived++;
        if (e.resolution === "verified") verified++;
        else if (e.resolution === "falsified") falsified++;
        else if (e.resolution === "insufficient_sample") insufficientSample++;
        else if (e.resolution === "unimplemented") unimplemented++;
        else if (e.resolution === "external_disruption") externalDisruption++;
      } else if (e.windowEnd < today) {
        overdue++;
      } else {
        activePending++;
      }
    }
    const effectiveTotal = verified + falsified;
    const hitRate = effectiveTotal > 0 ? verified / effectiveTotal * 100 : null;
    const totalArchived = archived;
    const unimplementedRate = totalArchived > 0 ? unimplemented / totalArchived * 100 : 0;
    const externalDisruptionRate = totalArchived > 0 ? externalDisruption / totalArchived * 100 : 0;
    const insufficientSampleRate = totalArchived > 0 ? insufficientSample / totalArchived * 100 : 0;
    return {
      total: data.entries.length,
      activePending,
      overdue,
      archived,
      verified,
      falsified,
      insufficientSample,
      unimplemented,
      externalDisruption,
      hitRate,
      unimplementedRate,
      externalDisruptionRate,
      insufficientSampleRate
    };
  }
};

// src/server.ts
import { Server } from "@modelcontextprotocol/sdk/server/index.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import {
  CallToolRequestSchema,
  ListToolsRequestSchema
} from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";
function createMcpServer(customDir) {
  const store = new LedgerStore(customDir);
  const server = new Server(
    {
      name: "dialectic-mcp",
      version: "4.0.0"
    },
    {
      capabilities: {
        tools: {}
      }
    }
  );
  server.setRequestHandler(ListToolsRequestSchema, async () => {
    return {
      tools: [
        {
          name: "dialectic_check_debts",
          description: "\u3010Step 0 \u5FC5\u5907\u3011\u542F\u52A8\u5BA1\u67E5\u524D\u5FC5\u987B\u8C03\u7528\u3002\u81EA\u52A8\u6392\u67E5\u672C\u5730\u8D26\u672C\u4E2D\u7684\u5F85\u89C2\u5BDF\u9884\u6D4B\u4E0E\u903E\u671F\u672A\u7ED3\u6848\u574F\u8D26\uFF0C\u675C\u7EDD\u7B97\u9519\u65F6\u949F\u4E0E\u8D26\u76EE\u63A9\u76D6\u3002",
          inputSchema: {
            type: "object",
            properties: {}
          }
        },
        {
          name: "dialectic_record_prediction",
          description: "\u5BA1\u67E5\u5B8C\u6210\u540E\u8C03\u7528\u3002\u5728\u672C\u5730\u8D26\u672C\u4E2D\u5B89\u5168\u5199\u5165\u4E00\u6761\u5177\u5907\u53EF\u68C0\u9A8C\u6027\u7684\u5B9E\u6218\u7559\u75D5\u6869\uFF0C\u81EA\u52A8\u751F\u6210 ID \u4E0E\u65F6\u95F4\u6233\uFF0C\u5E76\u540C\u6B65 Markdown \u8D26\u672C\u3002",
          inputSchema: {
            type: "object",
            properties: {
              target: {
                type: "string",
                description: "\u5BA1\u67E5\u5BF9\u8C61 (\u65B9\u6848\u6216\u529F\u80FD\u540D\u79F0)"
              },
              lens: {
                type: "string",
                enum: ["friction", "necessity", "compliance"],
                description: "\u5BA1\u67E5\u900F\u955C\uFF1Afriction (\u7EC4\u7EC7\u963B\u529B) \uFF5C necessity (\u529F\u80FD\u5FC5\u8981) \uFF5C compliance (\u5408\u89C4\u7EA2\u7EBF)"
              },
              prediction: {
                type: "string",
                description: "\u6838\u5FC3\u9884\u6D4B\uFF1A\u82E5 [\u4E0D\u505A\u67D0\u4E8B / \u5F3A\u63A8\u67D0\u4E8B]\uFF0C\u5728\u89C2\u5BDF\u671F\u5185\u5FC5\u7136\u51FA\u73B0 [\u5BA2\u89C2\u6307\u6807]"
              },
              windowDays: {
                type: "number",
                description: "\u89C2\u5BDF\u7A97\u53E3\u5929\u6570 (\u5982 14, 30, 60 \u5929\uFF0C\u6839\u636E\u4E1A\u52A1\u5468\u671F\u5B9A\uFF0C\u7981\u6B62\u76F2\u76EE\u586B\u5929\u6570)"
              },
              failureCondition: {
                type: "string",
                description: "\u8F93\u8D62\u8FB9\u754C\uFF1A\u51FA\u73B0\u4EC0\u4E48\u5177\u4F53\u53CD\u4F8B\u8BC1\u660E\u672C\u6B21\u5BA1\u67E5\u5224\u65AD\u5931\u8BEF"
              },
              triggerAction: {
                type: "string",
                description: "\u89E6\u53D1\u52A8\u4F5C\uFF1A\u82E5\u9884\u6D4B\u547D\u4E2D\uFF0C\u4E0B\u4E00\u6B65\u56E2\u961F\u5177\u4F53\u6267\u884C\u4EC0\u4E48\u8C03\u6574\u52A8\u4F5C"
              }
            },
            required: ["target", "lens", "prediction", "windowDays", "failureCondition", "triggerAction"]
          }
        },
        {
          name: "dialectic_reconcile_debt",
          description: "\u6838\u9500\u7ED3\u6848\u67D0\u6761\u5DF2\u5230\u671F\u7684\u5386\u53F2\u7559\u75D5\u3002\u5C06\u8BB0\u5F55\u539F\u5B50\u5316\u79FB\u5165\u5DF2\u5F52\u6863\u533A\uFF0C\u4FDD\u8BC1\u5BF9\u8D26\u95ED\u73AF\u81EA\u6D3D\u3002",
          inputSchema: {
            type: "object",
            properties: {
              id: {
                type: "string",
                description: "\u5F85\u6838\u9500\u7684\u7559\u75D5\u8BB0\u5F55 ID (\u5982 20260924-01)"
              },
              resolution: {
                type: "string",
                enum: ["verified", "falsified", "insufficient_sample", "unimplemented", "external_disruption"],
                description: "\u6838\u9500\u7ED3\u679C\uFF1Averified (\u9A8C\u8BC1\u547D\u4E2D) \uFF5C falsified (\u9884\u6D4B\u5931\u8BEF) \uFF5C insufficient_sample (\u6837\u672C\u4E0D\u8DB3) \uFF5C unimplemented (\u65B9\u6848\u672A\u6267\u884C) \uFF5C external_disruption (\u5916\u90E8\u5E72\u6270)"
              },
              attribution: {
                type: "string",
                description: "\u5F52\u56E0\u8BF4\u660E (\u9009\u62E9 external_disruption \u5916\u90E8\u5E72\u6270\u65F6\u5FC5\u987B\u8BE6\u7EC6\u4E3E\u8BC1\u7A81\u53D1\u56E0\u679C)"
              }
            },
            required: ["id", "resolution"]
          }
        },
        {
          name: "dialectic_get_stats",
          description: "\u83B7\u53D6\u5F53\u524D\u53F0\u8D26\u7684\u5386\u53F2\u9884\u6D4B\u6218\u7EE9\u3001\u6709\u6548\u547D\u4E2D\u7387\u53CA\u5206\u9879\u6307\u6807\u7EDF\u8BA1\u3002",
          inputSchema: {
            type: "object",
            properties: {}
          }
        }
      ]
    };
  });
  server.setRequestHandler(CallToolRequestSchema, async (request) => {
    const { name, arguments: args } = request.params;
    try {
      if (name === "dialectic_check_debts") {
        const debts = store.getDebts();
        const stats = store.getStats();
        let message = `[Step 0 \u8D26\u672C\u67E5\u9A8C\u5B8C\u6210]`;
        if (debts.overdue.length > 0) {
          message += `
\u26A0\uFE0F \u3010\u903E\u671F\u574F\u8D26\u8B66\u793A\u3011\u68C0\u6D4B\u5230 ${debts.overdue.length} \u9879\u5386\u53F2\u7559\u75D5\u5DF2\u8FC7\u89C2\u5BDF\u671F\u672A\u7ED3\u6848\uFF01\u8BF7\u5728\u672C\u6B21\u5BA1\u67E5\u524D\u4F18\u5148\u4E0E\u7528\u6237\u5BF9\u8D26\u6838\u9500\uFF0C\u6216\u5728\u5BA1\u67E5\u7ED3\u679C\u9876\u90E8\u516C\u5F00\u5C55\u793A\u503A\u52A1\u6807\u8BB0\u3002`;
        } else {
          message += `
\u2705 \u5F53\u524D\u65E0\u903E\u671F\u574F\u8D26\u3002`;
        }
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(
                {
                  message,
                  overdueCount: debts.overdue.length,
                  overdueItems: debts.overdue,
                  activePendingCount: debts.activePending.length,
                  activePendingItems: debts.activePending,
                  archivedCount: debts.archivedCount,
                  stats
                },
                null,
                2
              )
            }
          ]
        };
      }
      if (name === "dialectic_record_prediction") {
        const schema = z.object({
          target: z.string().min(1),
          lens: z.enum(["friction", "necessity", "compliance"]),
          prediction: z.string().min(1),
          windowDays: z.number().int().positive(),
          failureCondition: z.string().min(1),
          triggerAction: z.string().min(1)
        });
        const parsed = schema.parse(args);
        const record = store.recordPrediction(parsed);
        const debts = store.getDebts();
        return {
          content: [
            {
              type: "text",
              text: `[Step 0 \u7559\u75D5\u6869\u5DF2\u5B89\u5168\u5199\u5165] ID: ${record.id}\uFF0C\u89C2\u5BDF\u671F\u622A\u6B62: ${record.windowEnd}
\u5F53\u524D\u72B6\u6001: \u6B63\u5E38\u89C2\u5BDF\u4E2D ${debts.activePending.length} \u6761, \u26A0\uFE0F \u903E\u671F\u672A\u5BF9\u8D26 ${debts.overdue.length} \u6761, \u5DF2\u5F52\u6863 ${debts.archivedCount} \u6761
(\u5DF2\u540C\u6B65\u5199\u5165 ~/.dialectic/ledger.md)`
            }
          ]
        };
      }
      if (name === "dialectic_reconcile_debt") {
        const schema = z.object({
          id: z.string().min(1),
          resolution: z.enum(["verified", "falsified", "insufficient_sample", "unimplemented", "external_disruption"]),
          attribution: z.string().optional()
        });
        const parsed = schema.parse(args);
        const reconciled = store.reconcileDebt(parsed);
        return {
          content: [
            {
              type: "text",
              text: `[\u5BF9\u8D26\u6838\u9500\u6210\u529F] \u8BB0\u5F55 ${reconciled.id} \u5DF2\u6838\u9500\u4E3A\u3010${reconciled.resolution}\u3011\u5E76\u79FB\u5165 ## \u5DF2\u5F52\u6863 \u5206\u533A\u3002`
            }
          ]
        };
      }
      if (name === "dialectic_get_stats") {
        const stats = store.getStats();
        return {
          content: [
            {
              type: "text",
              text: JSON.stringify(stats, null, 2)
            }
          ]
        };
      }
      throw new Error(`\u672A\u77E5\u7684\u5DE5\u5177: ${name}`);
    } catch (err) {
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `[Dialectic \u5F15\u64CE\u9519\u8BEF] ${err.message || String(err)}`
          }
        ]
      };
    }
  });
  return { server, store };
}
async function runMcpServer() {
  const { server } = createMcpServer();
  const transport = new StdioServerTransport();
  await server.connect(transport);
}

export {
  LedgerStore,
  createMcpServer,
  runMcpServer
};
