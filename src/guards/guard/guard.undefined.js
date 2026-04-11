import __setGlobal from '../../internal/internal.global-registry.js'

/**
 *  Checks if the specified argument is **`undefined`**.
 *
 *  @param { unknown } arg
 *  @returns { arg is undefined }
 */
export function isUndefined(arg) {
    return arg === undefined;
}

// #: Global Entry
__setGlobal('isUndefined', isUndefined, { writable: false });
