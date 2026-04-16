import __setGlobal from '../internal/global-registry.js'
import { isVerbose } from '../guards/guard/guard.policy.js';
import { isArr } from '../guards/guard/guard.array.js';

/**
 *  Writes a grouped **`console`** message event.
 *
 *  @template T
 *  @param { string } label
 *  @param { T[] } data
 *  @returns { void }
 */
export function group(label, ...data) {
    if (isVerbose()) {
        console.group(label);

        if (data.length > 0) {
            for (const ITEM of data) {
                console.log(...(isArr(ITEM) ? ITEM : [ITEM]));
            }
        }
    }
}

// #: Global Entry
__setGlobal('group', group, { writable: false });
