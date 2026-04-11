import { isVerbose } from '../guards/guard/guard.policy.js';
import __setGlobal from '../internal/internal.global-registry.js'

/**
 *  Writes a **`console`** event message at **`warning`** level.
 *
 *  @overload
 *  @param { string } message
 *  @returns { void }
 */
/**
 *  Writes a **`console`** event message at **`warning`** level.
 *
 *  @template T
 *  @overload
 *  @param { T[] } data
 *  @returns { void }
 */
export default function warn(...data) {
    if (isVerbose()) {
        if (data.length === 0) {
            data = ['<EMPTY_WARNING_DATA>'];
        }

        console.warn('[WARNING]:', ...data);
    }
}

// #: Global Entry
__setGlobal('warn', warn, { writable: false });
