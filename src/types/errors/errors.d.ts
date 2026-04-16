import { ArgumentErrorOptions, DuplicateEntryErrorOptions, EmptyDataErrorOptions, ERROR_OPTIONS, ErrorCause, InvalidNodeErrorOptions, MissingArgumentErrorOptions, NoSuchKeyErrorOptions, UnknownOptionErrorOptions } from '../types.js'

declare global {
    /**
     *  A custom error class object for custom errors.
     */
    class CustomError extends Error {
        /**
         *  The cause object arguments of the error.
         */
        cause?: ErrorCause;
        /**
         *  The context message of the error.
         */
        context?: string;
        /**
         *  The message of the error.
         */
        message: string;
        /**
         *  The **`Date`** and **`Time`** stamp of the error occurrence.
         */
        timestamp: number;
        /**
         *  Constructs the message data of the error.
         */
        constructor(message: string);
        /**
         *  Constructs the message and meta options of the error.
         */
        constructor(message: string, options?: ERROR_OPTIONS);
    }

    /**
     *  A custom error for argument data or types violation.
     */
    class ArgumentError extends CustomError {
        /**
         *  The expected argument type(s).
         */
        expected_args: string | string[];
        /**
         *  Constructs the message data of the error.
         */
        constructor(message: string);
        /**
         *  Constructs the message and meta options of the error.
         */
        constructor(message: string, options: ArgumentErrorOptions);
    }

    /**
     *  A custom error for duplicate entry.
     */
    class DuplicateEntryError extends CustomError {
        /**
         *  The duplicate entry **`name`** or **`id`**.
         */
        duplicate_entry: string;
        /**
         *  Constructs the message data of the error.
         */
        constructor(message: string);
        /**
         *  Constructs the message and meta options of the error.
         */
        constructor(message: string, options?: DuplicateEntryErrorOptions);
    }

    /**
     *  A custom error for empty data.
     */
    class EmptyDataError extends CustomError {
        /**
         *  Constructs the message data of the error.
         */
        constructor(message: string);
        /**
         *  Constructs the message and meta options of the error.
         */
        constructor(message: string, options?: EmptyDataErrorOptions);
    }

    /**
     *  A custom error for invalid node.
     */
    class InvalidNodeError extends CustomError {
        /**
         *  The expected node(s).
         */
        expected_nodes: string | number | (string | number)[];

        /**
         *  Constructs the message data of the error.
         */
        constructor(message: string);
        /**
         *  Constructs the message and meta options of the error.
         */
        constructor(message: string, options?: InvalidNodeErrorOptions);
    }

    /**
     *  A custom error for missing required argument.
     */
    class MissingArgumentError extends CustomError {
        /**
         *  The missing required argument(s).
         */
        missing_args: string[];
        /**
         *  Constructs the message data of the error.
         */
        constructor(message: string);
        /**
         *  Constructs the message and meta options of the error.
         */
        constructor(message: string, options?: MissingArgumentErrorOptions);
    }

    /**
     *  A custom error for unknown or non-existing entry key.
     */
    class NoSuchKeyError extends CustomError {
        /**
         *  Constructs the message data of the error.
         */
        constructor(message: string);
        /**
         *  Constructs the message and meta options of the error.
         */
        constructor(message: string, options?: NoSuchKeyErrorOptions);
    }

    /**
     *  A custom error for unknown option.
     */
    class UnknownOptionError extends CustomError {
        /**
         *  The unknown option **`name`** or **`id`**.
         */
        unknown_option: string;
        /**
         *  Constructs the message data of the error.
         */
        constructor(message: string);
        /**
         *  Constructs the message and meta options of the error.
         */
        constructor(message: string, options?: UnknownOptionErrorOptions);
    }
}

export {}
