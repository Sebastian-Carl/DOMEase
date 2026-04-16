import __setGlobal from '../../internal/global-registry.js'
import CustomError from './error.custom.js';

/**
 *  A custom error for missing required arguments.
 */
export default class MissingArgumentError extends CustomError {
    /**
     *  The missing argument **`name`** or **`id`**.
     *  @type { string }
     */
    missing_arg;
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
     *  @param { import('../../types/types.js').MissingArgumentErrorOptions } [options] - An option meta data options to include for the error.
     */
    constructor(message, options = {}) {
        super(message, options);
        this.missing_arg = options?.missing_arg ?? '<NO_DATA_PROVIDED>';
    }
}

// #: Global Entry
__setGlobal('MissingArgumentError', MissingArgumentError, { writable: false });
