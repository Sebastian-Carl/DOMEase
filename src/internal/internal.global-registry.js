import { isBool } from '../guards/guard/guard.bool.js';
import { isStr, isEmptyStr } from '../guards/guard/guard.string.js';
import { isPObj, hasProperty } from '../guards/guard/guard.object.js';
import { isStrict } from '../guards/guard/guard.policy.js';
import { isFunc } from '../guards/guard/guard.function.js';
import { isUndefined } from '../guards/guard/guard.undefined.js';
import ArgumentError from '../errors/error/error.argument.js';
import EmptyDataError from '../errors/error/error.empty_data.js';
import DuplicateEntryError from '../errors/error/error.duplicate_entry.js';
import __emit from './internal.emit.js';
import getConstructorOf from '../get/get.constructor.js';
import getTypeOf from '../get/get.typeOf.js';
import warn from '../console/console.warn.js';

/**
 *  @param { string } key
 *  @param { unknown } data
 *  @param { import('../types/types.js').GlobalRegistryOptions } options
 */
export default function __setGlobal(key, data, options) {
    const KEY = key, DATA = data, OPTIONS = options;

    if (!isStr(KEY)) {
        const KEY_TYPE = getConstructorOf(KEY) ?? getTypeOf(KEY);
        __emit(ArgumentError, 'Expects an access key of an object for global registration in string format!', {
            cause: { target: 'key', data: KEY },
            context: `(@InvalidArgument: key: ${KEY_TYPE})`,
            expected_args: 'String',
        });
    }

    if (isEmptyStr(KEY)) {
        __emit(EmptyDataError, 'Cannot set a new global property item with an empty-string as access key!', {
            cause: { target: 'key', data: KEY },
            context: `(@EmptyArgument: key: \'\')`,
        });
    }

    if (!isUndefined(OPTIONS) && !isPObj(OPTIONS)) {
        const OPTIONS_TYPE = getConstructorOf(OPTIONS) ?? getTypeOf(OPTIONS);
        __emit(ArgumentError, 'Only accepts options in Object ({}) format!', {
            cause: { target: 'options', data: OPTIONS },
            context: `(@InvalidArgument: options: ${OPTIONS_TYPE})`,
            expected_args: 'Object ({})'
        });
    }

    if (hasProperty(self, KEY)) {
        __emit(DuplicateEntryError, `Cannot re-register an already existing data with property key of '${KEY}'.`, {
            duplicate_entry: KEY,
            cause: { target: 'key', data: KEY },
            context: `(@ExistingEntry: globalThis: { ${KEY} })`
        });
    }

    const ATTRIBUTE_KEYS = ['configurable', 'enumerable', 'get', 'set', 'writable']
    const ATTRIBUTES = ATTRIBUTE_KEYS.reduce((O, K) => {
        if ((K === 'get' || K === 'set') && hasProperty(OPTIONS, K)) {
            if (!isFunc(OPTIONS[K])) {
                if (isStrict()) {
                    __emit(ArgumentError, `Attribute '${K}' only accepts a function as its value.`, {
                        expected_args: 'Function',
                        cause: { target: `options.${K}`, data: OPTIONS[K] },
                        context: `(@InvalidArgument: options.${K}: ${OPTIONS[K]})`
                    });
                }

                warn(`[setGlobal]: Attribute '${K}' must be a valid function! (Skipped)`);
                return O;
            }

            Object.defineProperty(O, K, {
                value: OPTIONS[K],
                writable: false, configurable: true, enumerable: true
            });

            return O;
        }

        if (hasProperty(OPTIONS, K)) {
            if (!isBool(OPTIONS[K])) {
                if (isStrict()) {
                    __emit(ArgumentError, `Attribute '${K}' only accepts boolean as its data.`, {
                        expected_args: 'Boolean',
                        cause: { target: `options.${K}`, data: OPTIONS[K] },
                        context: `(@InvalidArgument: options.${K}: ${OPTIONS[K]})`
                    });
                }

                warn(`[setGlobal]: Attribute '${K}' must be a boolean! (Resolved with default state)`);
                O[K] = true;
                return O;
            }

            O[K] = OPTIONS[K];
        }

        return O;
    }, {});

    Object.defineProperty(self, KEY, {
        value: DATA, ...ATTRIBUTES
    });
}

// #: GLOBAL ENTRY
__setGlobal('__setGlobal', __setGlobal, { writable: false });
