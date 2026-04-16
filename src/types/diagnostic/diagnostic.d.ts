import { DiagnosticEvent, DiagnosticEventRecords, DiagnosticEventSeverity, DiagnosticEventTarget, DiagnosticEventType, DiagnosticGetRecordsOptions, DiagnosticLatestEventsRecord } from './meta.js'

declare global {
    /**
     *  A **`DiagnosticBuffer`** object for storing reports record from features.
     */
    class DiagnosticsBuffer {
        /**
         *  A collection of **`DiagnosticEvent`** records history.
         */
        history: DiagnosticEventRecords;
        /**
         *  A **`DiagnosticEvent`** latest records report map.
         */
        latest: DiagnosticLatestEventsRecord;
        /**
         *  The specified maximum buffer size of **`DiagnosticEvent`** history can store.
         */
        size: number;

        /**
         *  Constructs the **`DiagnosticsBuffer`** size.
         */
        constructor();
        /**
         *  Constructs the specified **`DiagnosticsBuffer`** size.
         *
         *  @param size - The maximum buffer size to set.
         */
        constructor(size?: number);

        /**
         *  Returns the **`DiagnosticLatestEventsRecord`** map.
         */
        getLatestRecords(): DiagnosticLatestEventsRecord;
        /**
         *  Returns the stored **`DiagnosticEventRecords`** history.
         */
        getRecords(): DiagnosticEventRecords;
        /**
         *  Returns the specific stored **`DiagnosticEvent`** record from **`DiagnosticEventRecords`** that satisfy the given options.
         *
         *  @param predicate
         */
        getRecords(options?: DiagnosticGetRecordsOptions): DiagnosticEventRecords;
        /**
         *  Stores a new record of the specified **`DiagnosticEvent`**.
         *
         *  @param event - The **`DiagnosticEvent`** to store.
         */
        newRecord(event: DiagnosticEvent): void;
        /**
         *  Resets the **`DiagnosticBuffer`** from its default state.
         */
        reset(): void;
    }

    /**
     *  A initialized **`DiagnosticBuffer`** runtime entry.
     */
    const diagnostic: DiagnosticsBuffer;

    /**
     *  Initialized **`DiagnosticBuffer`** and register it from the runtime (**`globalThis`**) object.
     */
    function initDiagnosticsBuffer(): void;

    /**
     *  A lazy handler for storing a record of **`DiagnosticEvent`**.
     *
     *  @param event - The **`DiagnosticEvent`** to record.
     */
    function recordDiagnosticEvent(event: DiagnosticEvent): void;

    /**
     *  Creates a **`DiagnosticEvent`** object with the given data.
     *
     *  @param type - Served as identifier of the report.
     *  @param severity - The severity level identifier of the report.
     *  @param source - Served as identifier id of the one that made this report.
     *  @param message - The message of the report.
     *  @param target - (*optional*): The argument **`id`** and **`data`** object.
     *  @returns The created **`DiagnosticEvent`** record object.
     */
    function createDiagnosticEvent(type: DiagnosticEventType, severity: DiagnosticEventSeverity, source: string, message: string, target?: DiagnosticEventTarget): DiagnosticEvent;
}

export {}
