import __setGlobal from '../../internal/internal.global-registry.js'

/**
 *  Checks if the specified argument is **`null`**.
 *
 *  @param { unknown } arg
 *  @returns { arg is null }
 */
export function isNull(arg) {
    return arg === null;
}

// #: Global Entry
__setGlobal('isNull', isNull, { writable: false });
