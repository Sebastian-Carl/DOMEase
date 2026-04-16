import { ErrorMap } from '../types.js';

export type DiagnosticEventType = keyof ErrorMap;
export type DiagnosticEventSeverity = 'fatal' | 'recoverable';
export type DiagnosticEventTarget = { id: string, data?: unknown };
export type DiagnosticEvent = {
    type: DiagnosticEventType;
    severity: DiagnosticEventSeverity;
    source: string;
    message: string;
    target?: DiagnosticEventTarget;
    timestamp: number;
}
export type DiagnosticLatestEventsRecord = Map<DiagnosticEventType, DiagnosticEvent>;
export type DiagnosticEventRecords = DiagnosticEvent[];
export type DiagnosticGetRecordsOptions = {
    type?: DiagnosticEventType;
    severity?: DiagnosticEventSeverity;
    source?: string;
    target?: DiagnosticEventTarget;
}
