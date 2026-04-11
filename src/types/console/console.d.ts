declare global {
    /**
     *  Clears or reset the **`console`** contents if possible.
     */
    function clearConsole(): void;

    /**
     *  Writes a **`console`** message event at **`debug`** level.
     *
     *  @param message - The message to write.
     */
    function debug(message: string): void;

    /**
     *  Writes a **`console`** message event at **`debug`** level.
     *
     *  @param data - The data to write.
     */
    function debug(...data: any[]): void;

    /**
     *  Writes a grouped **`console`** message event.
     *
     *  @param label - The label of the group.
     */
    function group(label: string): void;

    /**
     *  Writes a grouped **`console`** message event.
     *
     *  @param label - The label of this group.
     *  @param data - The data of this group.
     */
    function group(label: string, ...data: any[]): void;

    /**
     *  Writes a **`console`** message event.
     *
     *  @param message - The message to write.
     */
    function log(message: string): void;

    /**
     *  Writes a **`console`** message event.
     *
     *  @param data - The data to write.
     */
    function log(...data: any[]): void;

    /**
     *  Writes a **`console`** message event at **`info`** level.
     *
     *  @param message - The message to write.
     */
    function notice(message: string): void;

    /**
     *  Writes a **`console`** message event at **`info`** level.
     *
     *  @param data - The data to write.
     */
    function notice(...data: any[]): void;

    /**
     *  Writes a **`console`** message event at **`critical`** level.
     *
     *  @param message - The message to write.
     */
    function report(message: string): void;

    /**
     *  Writes a **`console`** message event at **`critical`** level.
     *
     *  @param data - The data to write.
     */
    function report(...data: any[]): void;

    /**
     *  Writes a **`console`** message event at **`warning`** level.
     *
     *  @param message - The message to write.
     */
    function warn(message: string): void;

    /**
     *  Writes a **`console`** message event at **`warning`** level.
     *
     *  @param data - The data to write.
     */
    function warn(...data: any[]): void;
}

export {}
