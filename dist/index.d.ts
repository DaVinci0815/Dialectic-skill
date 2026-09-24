import { Server } from '@modelcontextprotocol/sdk/server/index.js';

type LensType = 'friction' | 'necessity' | 'compliance';
type ResolutionStatus = 'verified' | 'falsified' | 'insufficient_sample' | 'unimplemented' | 'external_disruption';
interface LedgerEntry {
    id: string;
    status: 'pending' | 'resolved';
    createdAt: string;
    target: string;
    lens: LensType;
    prediction: string;
    windowEnd: string;
    failureCondition: string;
    triggerAction: string;
    resolution: ResolutionStatus | 'unverified';
    attribution: string;
    resolvedAt?: string;
}
interface LedgerData {
    version: number;
    entries: LedgerEntry[];
}
interface LedgerStats {
    total: number;
    activePending: number;
    overdue: number;
    archived: number;
    verified: number;
    falsified: number;
    insufficientSample: number;
    unimplemented: number;
    externalDisruption: number;
    hitRate: number | null;
    unimplementedRate: number;
    externalDisruptionRate: number;
    insufficientSampleRate: number;
}

declare class LedgerStore {
    private baseDir;
    private jsonPath;
    private mdPath;
    constructor(customDir?: string);
    private ensureInitialized;
    getPaths(): {
        baseDir: string;
        jsonPath: string;
        mdPath: string;
    };
    private loadData;
    private saveData;
    private importFromMarkdownIfEmpty;
    private syncMarkdown;
    private formatLens;
    getDebts(): {
        activePending: LedgerEntry[];
        overdue: LedgerEntry[];
        archivedCount: number;
    };
    recordPrediction(params: {
        target: string;
        lens: LensType;
        prediction: string;
        windowDays: number;
        failureCondition: string;
        triggerAction: string;
    }): LedgerEntry;
    reconcileDebt(params: {
        id: string;
        resolution: ResolutionStatus;
        attribution?: string;
    }): LedgerEntry;
    getStats(): LedgerStats;
}

declare function createMcpServer(customDir?: string): {
    server: Server<{
        method: string;
        params?: {
            [x: string]: unknown;
            _meta?: {
                [x: string]: unknown;
                progressToken?: string | number | undefined;
                "io.modelcontextprotocol/related-task"?: {
                    taskId: string;
                } | undefined;
            } | undefined;
        } | undefined;
    }, {
        method: string;
        params?: {
            [x: string]: unknown;
            _meta?: {
                [x: string]: unknown;
                progressToken?: string | number | undefined;
                "io.modelcontextprotocol/related-task"?: {
                    taskId: string;
                } | undefined;
            } | undefined;
        } | undefined;
    }, {
        [x: string]: unknown;
        _meta?: {
            [x: string]: unknown;
            progressToken?: string | number | undefined;
            "io.modelcontextprotocol/related-task"?: {
                taskId: string;
            } | undefined;
        } | undefined;
    }>;
    store: LedgerStore;
};
declare function runMcpServer(): Promise<void>;

export { type LedgerData, type LedgerEntry, type LedgerStats, LedgerStore, type LensType, type ResolutionStatus, createMcpServer, runMcpServer };
