import __setGlobal from '../../internal/internal.global-registry.js'
import CustomError from './error.custom.js';

/**
 *  A custom error for empty data.
 */
export default class EmptyDataError extends CustomError {
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
     *  @param { import('../../types/types.js').EmptyDataErrorOptions } [options] - An option meta data options to include for the error.
     */
    constructor(message, options = {}) {
        super(message, options);
    }
}

// #: Global Entry
__setGlobal('EmptyDataError', EmptyDataError, { writable: false });
