import __setGlobal from '../../internal/global-registry.js'
import CustomError from './error.custom.js';

/**
 *  A custom error for invalid node.
 */
export default class InvalidNodeError extends CustomError {
    /**
     *  The expected node type(s).
     *  @type { (string | number)[] }
     */
    expected_nodes;
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
     *  @param { import('../../types/types.js').InvalidNodeErrorOptions } [options] - An option meta data options to include for the error.
     */
    constructor(message, options = {}) {
        super(message, options);
        this.expected_nodes = options?.expected_nodes ?? '<NO_DATA_PROVIDED>';
    }
}

// #: Global Entry
__setGlobal('InvalidNodeError', InvalidNodeError, { writable: false });
