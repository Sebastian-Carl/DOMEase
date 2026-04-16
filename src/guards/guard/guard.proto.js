import __setGlobal from '../../internal/global-registry.js'
import { isObj } from './guard.object.js'

/**
 *  Checks if the specified **`object`** is **`prototype`** of the other specified **`object`**
 *
 *  @param { object } obj
 *  @param { object } thisObj
 *  @returns { boolean }
 */
export function isProtoOf(obj, thisObj) {
    if (!isObj(obj) || !isObj(thisObj)) {
        return false;
    }

    return thisObj.isPrototypeOf(obj);
}

// #: Global Entry
__setGlobal('isProtoOf', isProtoOf, { writable: false });
