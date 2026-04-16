import { isVerbose } from '../guards/guard/guard.policy.js';
import __setGlobal from '../internal/global-registry.js'

/**
 *  Writes a **`console`** event message at **`info`** level.
 *
 *  @overload
 *  @param { string } message
 *  @returns { void }
 */
/**
 *  Writes a **`console`** event message at **`info`** level.
 *
 *  @template T
 *  @overload
 *  @param { T[] } data
 *  @returns { void }
 */
export default function notice(...data) {
    if (isVerbose()) {
        if (data.length === 0) {
            data = ['<EMPTY_NOTICE_DATA>'];
        }

        console.info('[NOTICE]:', ...data);
    }
}

// #: Global Entry
__setGlobal('notice', notice, { writable: false });
