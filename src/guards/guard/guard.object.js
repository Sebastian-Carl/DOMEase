import __setGlobal from '../../internal/global-registry.js';
import { isEmptyStr, isStr } from './guard.string.js';

/**
 *  Checks if the specified argument is **`object`**.
 *
 *  @param { unknown } arg
 *  @returns { arg is object }
 */
export function isObj(arg) {
    return 'object' === typeof arg;
}

/**
 *  Checks if the specified **`object`** is plain/literal (**`{}`**).
 *
 *  @param { object } obj
 *  @returns { obj is {} }
 */
export function isPObj(obj) {
    if (!isObj(obj)) {
        return false;
    }

    const PROTO = Object.getPrototypeOf(obj);
    return PROTO === Object.prototype || PROTO === null;
}

/**
 *  Checks if the specified plain/literal **`object`** is empty.
 *
 *  @param {{}} obj
 *  @returns { boolean }
 */
export function isEmptyPObj(obj) {
    return isPObj(obj) && Object.keys(obj).length === 0;
}

/**
 *  Checks if the specified **`object`** has or contains the specified **`property`**.
 *
 *  @template {{ [p: string]: any }} O
 *  @param { O } obj
 *  @param { keyof O } prop
 *  @returns { boolean }
 */
export function hasProperty(obj, prop) {
    if (!isObj(obj) || isEmptyPObj(obj) || !isStr(prop) || isEmptyStr(prop)) {
        return false;
    }

    return Object.hasOwn(obj, prop) || (prop in obj);
}

// #: Global Entry
for (const ENTRY of [hasProperty, isEmptyPObj, isObj, isPObj]) {
    __setGlobal(ENTRY.name, ENTRY, { writable: false });
}
