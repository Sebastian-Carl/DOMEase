import __setGlobal from '../../internal/internal.global-registry.js'
import { isFunc } from './guard.function.js';

/**
 *  Checks if the specified argument is instance or extended to **`Error`**.
 *
 *  @param { unknown } arg
 *  @returns { arg is Error }
 */
export function isErr(arg) {
    return arg instanceof Error || (
        isFunc(arg) && (arg === Error || Error.isPrototypeOf(arg))
    );
}

// #: Global Entry
__setGlobal('isErr', isErr, { writable: false });
