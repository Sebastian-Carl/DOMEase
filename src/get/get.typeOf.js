import { isEmptyStr, isStr } from '../guards/guard/guard.string.js';
import __emit from '../internal/internal.emit.js';
import ArgumentError from '../errors/error/error.argument.js';
import EmptyDataError from '../errors/error/error.empty_data.js';
import UnknownOptionError from '../errors/error/error.unknown_option.js';
import { isStrict } from '../guards/guard/guard.policy.js';
import warn from '../console/console.warn.js';
import __setGlobal from '../internal/internal.global-registry.js'

/**
 *  Returns the **`type`** of the specified value.
 *
 *  @template T
 *  @overload
 *  @param { T } val
 *  @returns { import('../types/types.js').TypeOfOptions }
 */
/**
 *  Checks if the **`type`** of the specified value matches the specified **`type`**.
 *
 *  @template T
 *  @overload
 *  @param { T } val
 *  @param { import('../types/types.js').TypeOfOptions } thisType
 *  @returns { boolean }
 */
export default function getTypeOf(val, thisType) {
    if (thisType) {
        if (!isStr(thisType)) {
            if (isStrict()) {
                __emit(ArgumentError, `Parameter 'thisType' must be a string.`, {
                    expected_args: 'String',
                    cause: { target: 'thisType', data: thisType },
                    context: `(@InvalidArgument: thisType: ${thisType})`
                });
            }

            warn(`[typeOf]: Cannot compare the type of the specified value with an invalid option type format. (Exited with false)`);
            return false;
        }

        if (isEmptyStr(thisType)) {
            if (isStrict()) {
                __emit(EmptyDataError, 'Parameter \'thisType\' must not be an empty-string.', {
                    cause: { target: 'thisType', data: thisType },
                    cause: `(@EmptyString: thisType: \'\')`
                });
            }

            warn(`[typeOf]: Cannot compare the type of the specified value with an empty option type format. (Exited with false)`);
            return false;
        }

        const TYPE_SET = new Set(["string", "number", "bigint", "boolean", "symbol", "undefined", "object", "function"]);
        if (!TYPE_SET.has(thisType)) {
            if (isStrict()) {
                __emit(UnknownOptionError, `Unknown type option '${thisType}'! Expected type options: ${Array.from(TYPE_SET).join(' | ')}`, {
                    unknown_option: thisType,
                    cause: { target: 'thisType', data: thisType },
                    context: `(@UnknownOption: thisType: ${thisType})`
                });
            }

            warn(`[typeOf]: Cannot compare the type of the specified value with an unknown type option '${thisType}'. (Exited with false)`);
            return false;
        }

        return thisType === typeof val;
    }

    return typeof val;
}

// #: Global Entry
__setGlobal('getTypeOf', getTypeOf, { writable: false });
