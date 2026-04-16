import __setGlobal from '../../internal/global-registry.js'

/**
 *  Checks if the specified argument is **`boolean`**.
 *
 *  @param { unknown } arg
 *  @returns { arg is boolean }
 */
export function isBool(arg) {
    return 'boolean' === typeof arg;
}

// #: Global Entry
__setGlobal('isBool', isBool, { writable: false });
