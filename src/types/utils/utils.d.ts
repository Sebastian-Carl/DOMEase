import { ResolveTypeOptions, TypeOfOptions } from '../types.js'

declare global {
    /**
     *  Retrieves the **`constructor`** name of the specified value.
     *
     *  @param val - The target value.
     *  @returns The retrieved **`constructor`** name of value.
     */
    function constructorOf(val: unknown): string | undefined;

    /**
     *  Returns the **`type`** of the specified value.
     *
     *  @param val - The target value.
     *  @returns The retrieved **`type`** of value.
     */
    function getTypeOf(val: unknown): TypeOfOptions;

    /**
     *  Compares the **`type`** of the specified value with the specified **`type`** option.
     *
     *  @param val - The target value.
     *  @param thisType - The **`type`** to compare.
     *  @returns The result of **`type`** comparison.
     */
    function getTypeOf<T extends TypeOfOptions>(val: unknown, thisType: T): val is ResolveTypeOptions<T>;
}

export {}
