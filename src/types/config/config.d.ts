import { GlobalConfig } from '../types.js'

declare global {
    /**
     *  Set and update the global configuration data.
     *
     *  @param conf - The configuration object to set.
     */
    function __setConfig(conf: GlobalConfig): void;

    /**
     *  Retrieves the global configuration object.
     */
    function __getConfig(): GlobalConfig;

    /**
     *  Search and retrieves the data of the specified global configuration access key.
     *
     *  @param key - The access key of global configuration item.
     */
    function __getConfig(key: string): unknown;
    function __getConfig<K extends keyof GlobalConfig>(key: K): GlobalConfig[K];
}

export {}
