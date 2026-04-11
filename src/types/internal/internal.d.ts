import { GetErrorOptions, GlobalRegistryOptions } from '../types.js'

declare global {
    /**
     *  +------------------------------------------------------+
     *  |                                                      |
     *  |                SetGlobal Intellisense                |
     *  |                                                      |
     *  +------------------------------------------------------+
     */

    /**
     *  Register a new **`property`** data at **`globalThis`** runtime.
     *
     *  @param key - The access key of the new **`property`**.
     *  @param data - The data of the new **`property`**.
     *  @param options - The **`attribute`** options of the new **`property`**.
     */
    function __setGlobal<K extends string>(key: K, data: unknown, options?: GlobalRegistryOptions): void;

    /**
     *  +-------------------------------------------------+
     *  |                                                 |
     *  |                Emit Intellisense                |
     *  |                                                 |
     *  +-------------------------------------------------+
     */

    /**
     *  Constructs and emit the given contents of the specified error object.
     *
     *  @param err - The error object to emit.
     *  @param message - The message of the error.
     */
    function __emit<E>(err: E, message: string): never;

    /**
     *  Constructs and emit the given contents of the specified error object.
     *
     *  @param err - The error object to emit.
     *  @param message - The message of the error.
     *  @param options - An optional available meta contents to include for the error.
     */
    function __emit<E>(err: E, message: string, options?: GetErrorOptions<E>): never;

    /**
     *  Emits the object.
     *
     *  @param o - The object to emit.
     */
    function __emit(o: unknown): never;
}

export {}
