import __setGlobal from '../../internal/internal.global-registry.js'
import { isObj } from './guard.object.js'

/**
 *  Checks if the specified **`object`** is **`prototype`** of the other specified **`object`**
 *
 *  @param { object } _this
 *  @param { object } ofThis
 *  @returns { boolean }
 */
export function isPrototypeOf(_this, ofThis) {
    if (!isObj(_this) || !isObj(ofThis)) {
        return false;
    }

    return ofThis.isPrototypeOf(_this);
}

// #: Global Entry
__setGlobal('isPrototypeOf', isPrototypeOf, { writable: false });
