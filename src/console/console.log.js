import { isVerbose } from '../guards/guard/guard.policy.js';
import __setGlobal from '../internal/global-registry.js'

/**
 *  Writes a **`console`** message event.
 *
 *  @overload
 *  @param { string } message
 *  @returns { void }
 */
/**
 *  Writes a **`console`** message event.
 *
 *  @template T
 *  @overload
 *  @param { T[] } data
 *  @returns { void }
 */
export default function log(...data) {
    if (isVerbose()) {
        if (data.length === 0) {
            data = ["<EMPTY_LOG_DATA>"];
        }

        console.log('[LOG]', ...data);
    }
}

// #: Global Entry
__setGlobal('log', log, { writable: false });
