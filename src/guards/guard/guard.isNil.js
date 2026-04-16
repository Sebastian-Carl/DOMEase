import __setGlobal from '../../internal/global-registry.js'
import { isNull } from './guard.null.js';
import { isUndefined } from './guard.undefined.js';

/**
 *  Checks if the specified argument is **`null`** or **`undefined`**.
 *
 *  @template { unknown } T
 *  @param { T } arg
 *  @returns { arg is Extract<T, null | undefined> }
 */
export function isNil(arg) {
    return isNull(arg) || isUndefined(arg);
}

// #: Global Entry.
__setGlobal('isNil', isNil, { writable: false });
