import __setGlobal from '../../internal/global-registry.js'

/**
 *  Checks if the specified argument is **`Array`**.
 *
 *  @param { unknown } arg
 *  @returns { arg is unknown[] }
 */
export function isArr(arg) {
    return Array.isArray(arg);
}

/**
 *  Checks if the specified **`Array`** is empty.
 *
 *  @param { unknown[] } arr
 *  @returns { arr is never[] }
 */
export function isEmptyArr(arr) {
    return isArr(arr) && arr.length === 0;
}

// #: Global Entry
for (const ENTRY of [isArr, isEmptyArr]) {
    __setGlobal(ENTRY.name, ENTRY, { writable: false });
}
