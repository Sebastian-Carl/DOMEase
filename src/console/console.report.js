import { isVerbose } from '../guards/guard/guard.policy.js';
import __setGlobal from '../internal/internal.global-registry.js'

/**
 *  Writes a **`console`** event message at **`critical`** level.
 *
 *  @overload
 *  @param { string } message
 *  @returns { void }
 */
/**
 *  Writes a **`console`** event message at **`critical`** level.
 *
 *  @template T
 *  @overload
 *  @param { T[] } data
 *  @returns { void }
 */
export default function report(...data) {
    if (isVerbose()) {
        if (data.length === 0) {
            data = ['<EMPTY_REPORT_DATA>'];
        }

        console.error('[REPORT]:', ...data);
    }
}

// #: Global Entry
__setGlobal('report', report, { writable: false });
