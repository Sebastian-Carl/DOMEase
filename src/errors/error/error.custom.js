import __setGlobal from '../../internal/global-registry.js'
import { isUndefined } from '../../guards/guard/guard.undefined.js';
import { isStr } from '../../guards/guard/guard.string.js';
import { isPObj } from '../../guards/guard/guard.object.js';
import { dateNow } from '../../date/date.js'

/**
 *  A custom error class object for custom errors.
 */
export default class CustomError extends Error {
    /**
     *  A cause object argument of the error.
     *  @type { import('../../types/types.js').ErrorCause }
     */
    cause;
    /**
     *  A context message of the error.
     *  @type { string }
     */
    context;
    /**
     *  The message data of the error.
     *  @type { string }
     */
    message;
    /**
     *  The **`Date`** and **`Time`** stamp of the error occurrence.
     *  @type { number }
     */
    timestamp;
    /**
     *  Constructs the message data of the error.
     *
     *  @overload
     *  @param { string } message - The message of the error.
     */
    /**
     *  Constructs the message and meta options of the error.
     *
     *  @overload
     *  @param { string } message - The message of the error.
     *  @param { import('../../types/types.js').ERROR_OPTIONS } [options] - An option meta data options to include for the error.
     */
    constructor(message, options = {}) {
        if (isUndefined(message)) {
            throw new CustomError('A missing required message', {
                cause: { target: 'message', data: message },
                context: `(@Missing: message: ${message})`,
                customName: "MissingParameterError"
            });
        }

        if (!isStr(message)) {
            throw new CustomError('Cannot accept an non-string data format for \'message\' parameter!', {
                cause: { target: 'message', data: message },
                context: `(@InvalidArgument: message: ${message?.constructor?.name ?? typeof message})`,
                customName: 'ArgumentError',
                expected_args: 'String'
            });
        }

        if (!isUndefined(options) && !isPObj(options)) {
            throw new CustomError('Only accepts a error meta options in \'Object ({})\' format!', {
                cause: { target: 'options', data: options },
                context: `(@InvalidArgument: options: ${options?.constructor?.name ?? typeof options})`,
                customName: "ArgumentError",
                expected_args: 'Object'
            });
        }

        super(message);
        this.cause = options?.cause ?? "<NO_DATA_PROVIDED>";
        this.context = options?.context ?? "<NO_DATA_PROVIDED>";
        this.message = message ?? "<EMPTY_MESSAGE>";
        this.name = options?.customName ?? this?.constructor.name;
        this.timestamp = dateNow();
    }
}

// #: Global Entry
__setGlobal('CustomError', CustomError, { writable: false });
