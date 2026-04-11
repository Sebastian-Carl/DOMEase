import __setGlobal from '../internal/internal.global-registry.js'

/**
 *  Returns the **`constructor`** name of the specified value.
 *
 *  @param { unknown } val
 *  @returns { string | undefined }
 */
export default function getConstructorOf(val) {
    return val?.constructor?.name;
}

// #: Global Entry
__setGlobal('getConstructorOf', getConstructorOf, { writable: false });
