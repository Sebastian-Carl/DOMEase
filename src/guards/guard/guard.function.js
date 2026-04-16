import __setGlobal from '../../internal/global-registry.js';
import { isEmptyStr } from './guard.string.js';

/**
 *  Checks if the specified argument is **`Function`**.
 *
 *  @param { unknown } arg
 *  @returns { arg is Function }
 */
export function isFunc(arg) {
    return 'function' === typeof arg;
}

/**
 *  Checks if the specified **`Function`** is anonymous or does not have a name.
 *
 *  @param { Function } func
 *  @returns { boolean }
 */
export function isAnonymousFunc(func) {
    return isFunc(func) && isEmptyStr(func.name);
}

/**
 *  Checks if the specified **`Function`** is **`Asynchronous`**.
 *
 *  @param { Function } func
 *  @returns { func is () => Promise<unknown> }
 */
export function isAsyncFunc(func) {
    return isFunc(func) && func?.constructor?.name === 'AsyncFunction';
}

// #: Global Entry
for (const ENTRY of [isAnonymousFunc, isAsyncFunc, isFunc]) {
    __setGlobal(ENTRY.name, ENTRY, { writable: false });
}
