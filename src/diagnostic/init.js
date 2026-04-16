import { isDiagnosticEnabled } from '../guards/guard/guard.policy.js';
import { hasProperty } from '../guards/guard/guard.object.js';
import __setGlobal from '../internal/global-registry.js';
import DiagnosticsBuffer from './buffer.js';

/**
 *  Initialized **`DiagnosticBuffer`** and creates an entry from the runtime (**`globalThis`**) object.
 */
export function initDiagnosticsBuffer() {
    if (!isDiagnosticEnabled()) {
        return;
    }

    if (!hasProperty(self, 'diagnostic')) {
        __setGlobal('diagnostic', new DiagnosticsBuffer(), { writable: false });
    }
}

// #: Global Entry
__setGlobal('initDiagnosticsBuffer', initDiagnosticsBuffer, { writable: false });
