import __setGlobal from '../../internal/internal.global-registry.js'
import CustomError from './error.custom.js';

/**
 *  A custom error for duplicate entry.
 */
export default class DuplicateEntryError extends CustomError {
    /**
     *  The duplicate entry **`name`** or **`id`**.
     *  @type { string }
     */
    duplicate_entry;
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
     *  @param { import('../../types/types.js').DuplicateEntryErrorOptions } [options] - An option meta data options to include for the error.
     */
    constructor(message, options = {}) {
        super(message, options);
        this.duplicate_entry = options?.duplicate_entry ?? '<NO_DATA_PROVIDED>';
    }
}

// #: Global Entry
__setGlobal('DuplicateEntryError', DuplicateEntryError, { writable: false });
