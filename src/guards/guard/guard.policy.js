import { __getConfig } from '../../config/config.js';
import __setGlobal from '../../internal/internal.global-registry.js';

/**
 *  Checks if the **`GlobalConfigurationVerbose`** is enabled.
 *  @returns { boolean }
 */
export function isVerbose() {
    return __getConfig('verbose');
}

/**
 *  Checks if the **`GlobalConfigurationStrict`** is enabled.
 *
 *  @returns { boolean }
 */
export function isStrict() {
    return __getConfig('strict');
}

/**
 *  Checks if the **`GlobalConfigurationMode`** for the environment is set to **`Development`**.
 *
 *  @returns { boolean }
 */
export function isDevMode() {
    return __getConfig('mode') === 'dev';
}

/**
 *  Checks if the **`GlobalConfigurationMode`** for the environment is set to **`Production`**.
 *
 *  @returns { boolean }
 */
export function isProdMode() {
    return __getConfig('mode') === 'prod';
}

// #: Global Entry
const ENTRIES = [
    isDevMode, isProdMode, isStrict, isVerbose
];
for (const ENTRY of ENTRIES) {
    __setGlobal(ENTRY.name, ENTRY, { writable: false });
}
