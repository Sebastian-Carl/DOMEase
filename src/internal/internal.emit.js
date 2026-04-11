import __setGlobal from './internal.global-registry.js'
import { isErr } from '../guards/guard/guard.error.js';

/**
 *  @overload
 *  @param { unknown } o
 *  @returns { never }
 */
/**
 *  @template E
 *  @overload
 *  @param { E } err
 *  @param { string } message
 *  @returns { never }
 */
/**
 *  @template E
 *  @overload
 *  @param { E } err
 *  @param { string } message
 *  @param { import('../types/types.js').GetErrorOptions<E> } [options]
 *  @returns { never }
 */
export default function __emit(err, message, options = {}) {
    if (!isErr(err)) {
        throw err;
    }

    throw new err(message, options);
}

// #: GLOBAL ENTRY
__setGlobal('__emit', __emit, { writable: false });
