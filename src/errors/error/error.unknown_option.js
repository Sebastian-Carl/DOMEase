import __setGlobal from '../../internal/internal.global-registry.js'
import CustomError from './error.custom.js';

/**
 *  A custom error for unknown option.
 */
export default class UnknownOptionError extends CustomError {
    /**
     *  The unknown option **`name`** or **`id`**.
     *  @type { string }
     */
    unknown_option;
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
     *  @param { import('../../types/types.js').UnknownOptionErrorOptions } [options] - An option meta data options to include for the error.
     */
    constructor(message, options = {}) {
        super(message, options);
        this.unknown_option = options?.unknown_option ?? '<NO_DATA_PROVIDED>';
    }
}

// #: Global Entry
__setGlobal('UnknownOptionError', UnknownOptionError, { writable: false });
