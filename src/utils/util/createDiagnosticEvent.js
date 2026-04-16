import { isStr } from '../../guards/guard/guard.string.js';
import { __getConfig } from '../../config/config.js';

/**
 *  Creates a **`DiagnosticEvent`** object that can be store at **`DiagnosticBuffer`**.
 *
 *  @param { import('../../types/types.js').DiagnosticEventType } type
 *  @param { import('../../types/types.js').DiagnosticEventSeverity } severity
 *  @param { string } source
 *  @param { string } message
 *  @param { import('../../types/types.js').DiagnosticEventTarget } [target]
 *  @returns { import('../../types/types.js').DiagnosticEvent }
 */
export function createDiagnosticEvent(type, severity, source, message, target) {
    const ATTRIBUTES = [type, severity, source, message, target],
        ATTRIBUTES_ID = ['type', 'severity', 'source', 'message', 'target'];

    ATTRIBUTES.slice(0, ATTRIBUTES.size - 1).forEach((attr) => {
        if (!isStr(attr)) {
            if (isDiagnosticEnabled()) {
                
            }
        }
    });
}
