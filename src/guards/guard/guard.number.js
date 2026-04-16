import __setGlobal from '../../internal/global-registry.js'

/**
 *  Checks if the specified argument is **`number`**.
 *
 *  @param { unknown } arg
 *  @returns { arg is number }
 */
export function isNum(arg) {
    return 'number' === typeof arg;
}

// #: Global Entry
for (const ENTRY of [isNum]) {
    __setGlobal(ENTRY.name, ENTRY, { writable: false });
}
