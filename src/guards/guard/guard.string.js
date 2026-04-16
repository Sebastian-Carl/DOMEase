import __setGlobal from '../../internal/global-registry.js'

/**
 *  Checks if the specified argument is **`string`**.
 *
 *  @param { unknown } arg
 *  @returns { arg is string }
 */
export function isStr(arg) {
    return 'string' === typeof arg;
}

/**
 *  Checks if the specified **`string`** argument is empty.
 *
 *  @param { string } str
 *  @returns { boolean }
 */
export function isEmptyStr(str) {
    return isStr(str) && str.trim().length === 0;
}

// #: Global Entries.
for (const ENTRY of [isEmptyStr, isStr]) {
    __setGlobal(ENTRY.name, ENTRY, { writable: false });
}
