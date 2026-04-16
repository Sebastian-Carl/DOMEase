import __setGlobal from '../../internal/global-registry.js'

/**
 *  Returns the **`constructor`** name of the specified value.
 *
 *  @param { unknown } val
 *  @returns { string | undefined }
 */
export default function constructorOf(val) {
    return val?.constructor?.name;
}

// #: Global Entry
__setGlobal('constructorOf', constructorOf, { writable: false });
