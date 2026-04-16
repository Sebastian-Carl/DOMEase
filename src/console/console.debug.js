import { isVerbose } from '../guards/guard/guard.policy.js';
import __setGlobal from '../internal/global-registry.js'

/**
 *  Writes a **`console`** event message at **`debug`** level.
 *
 *  @overload
 *  @param { string } message
 *  @returns { void }
 */
/**
 *  Writes a **`console`** event message at **`debug`** level.
 *
 *  @template T
 *  @overload
 *  @param { T[] } data
 *  @returns { void }
 */
export default function debug(...data) {
    if (isVerbose()) {
        if (data.length === 0) {
            data = ['<EMPTY_DEBUG_DATA>'];
        }

        console.debug(`[DEBUG]:`, ...data);
    }
}

// #: Global Entry
__setGlobal('debug', debug, { writable: false });
