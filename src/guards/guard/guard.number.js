import __setGlobal from '../../internal/internal.global-registry.js'

/**
 *  Checks if the specified argument is **`number`**.
 *
 *  @param { unknown } arg
 *  @returns { arg is number }
 */
export function isNum(arg) {
    return 'number' === typeof arg;
}

/**
 *  Checks if the specified **`number`** argument is type **`NaN`** (not a number).
 *
 *  @param { number } num
 *  @returns { boolean }
 */
export function isNaN(num) {
    return isNum(num) && Number.isNaN(num);
}

// #: Global Entry
for (const ENTRY of [isNaN, isNum]) {
    __setGlobal(ENTRY.name, ENTRY, { writable: false });
}
