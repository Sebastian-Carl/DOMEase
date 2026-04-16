import __setGlobal from '../../internal/global-registry.js'
import CustomError from './error.custom.js';

/**
 *  A custom error for argument violation.
 */
export default class ArgumentError extends CustomError {
    /**
     *  The expected argument type(s).
     *  @type { string[] }
     */
    expected_args = [];
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
     *  @param { import('../../types/types.js').ArgumentErrorOptions } [options] - An option meta data options to include for the error.
     */
    constructor(message, options = {}) {
        super(message, options);
        this.expected_args = options?.expected_args ?? "<NO_DATA_PROVIDED>";
    }
}

// #: Global Entry
__setGlobal('ArgumentError', ArgumentError, { writable: false });
