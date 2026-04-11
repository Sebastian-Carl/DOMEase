import CONFIG from './config.json' with { type: 'json' };
import { hasProperty, isEmptyPObj, isPObj } from '../guards/guard/guard.object.js';
import { isEmptyStr, isStr } from '../guards/guard/guard.string.js';
import { isUndefined } from '../guards/guard/guard.undefined.js';
import __emit from '../internal/internal.emit.js';
import ArgumentError from '../errors/error/error.argument.js';
import EmptyDataError from '../errors/error/error.empty_data.js';
import NoSuchKeyError from '../errors/error/error.no_such_key.js';
import getConstructorOf from '../get/get.constructor.js';
import getTypeOf from '../get/get.typeOf.js';
import __setGlobal from '../internal/internal.global-registry.js'

/**
 *  @param { import('../types/types.js').GlobalConfig } conf
 */
export default function __setConfig(conf) {
    const CONF = conf;

    if (!isPObj(CONF)) {
        __emit(ArgumentError, 'Cannot set configuration with an invalid argument!', {
            expected_args: 'Object ({})',
            cause: { target: 'conf', data: CONF },
            context: `(@InvalidArgument: conf: ${CONF})`,
        });
    }

    if (isEmptyPObj(CONF)) {
        __emit(EmptyDataError, 'Cannot set configuration with an empty object!', {
            cause: { target: 'conf', data: CONF },
            context: `(@EmptyObject: conf: ${CONF})`
        });
    }

    for (const [PK, PV] of Object.entries(CONF)) {
        if (!hasProperty(CONFIG, PK)) {
            __emit(NoSuchKeyError, 'Cannot set an unknown or invalid configuration access key.', {
                cause: { target: 'conf', data: CONF },
                context: `(@UnknownKey: conf: { ${PK}: ${PV} )`
            });
        }

        const [O_TYPE, C_TYPE] = [CONFIG[PK], PV].map(V =>
            getConstructorOf(V) ?? getTypeOf(V)
        );

        if (C_TYPE !== O_TYPE) {
            __emit(ArgumentError, `Global configuration '${PK}' can only accept '${O_TYPE}' type, not '${C_TYPE}'.`, {
                expected_args: O_TYPE,
                cause: { target: 'conf', data: `{ ${PK}: ${PV} }` },
                context: `(@InvalidArgument: conf.${PK}: ${PV})`
            });
        }

        CONFIG[PK] = PV;
    }
}

/**
 *  @overload
 *  @returns { import('../types/types.js').GlobalConfig }
 */
/**
 *  @template { keyof import('../types/types.js').GlobalConfig } K
 *  @overload
 *  @param { K } key
 *  @returns { K extends keyof import('../types/types.js').GlobalConfig ? import('../types/types.js').GlobalConfig[K] : undefined }
 */
export function __getConfig(key) {
    const KEY = key;

    if (isUndefined(KEY)) {
        return CONFIG;
    }

    if (!isStr(KEY)) {
        __emit(ArgumentError, 'Cannot retrieve configuration data with a non-string format for configuration access key.', {
            expected_args: 'String',
            cause: { target: 'key', data: KEY },
            context: `(@InvalidType: key: ${getConstructorOf(KEY) ?? getTypeOf(KEY)})`
        });
    }

    if (isEmptyStr(KEY)) {
        __emit(EmptyDataError, 'Cannot retrieve a configuration data with an empty-string format of access key.', {
            cause: { target: 'key', data: KEY },
            context: `(@EmptyKey: key: \'\')`
        });
    }

    if (hasProperty(CONFIG, KEY)) {
        return CONFIG[KEY];
    }

    __emit(NoSuchKeyError, `There's no such key '${KEY}' at global configuration.`, {
        cause: { target: 'key', data: KEY },
        context: `(@UnknownKey: key: ${KEY})`
    });
}

// #: GLOBAL ENTRIES
for (const ENTRY of [__getConfig, __setConfig]) {
    __setGlobal(ENTRY.name, ENTRY, { writable: false });
}
