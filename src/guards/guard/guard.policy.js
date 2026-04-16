import { __getConfig } from '../../config/config.js';
import __setGlobal from '../../internal/global-registry.js';

/**
 *  Checks if the **`GlobalVerboseConfiguration`** is enabled.
 *  @returns { boolean }
 */
export function isVerbose() {
    return __getConfig('verbose');
}

/**
 *  Checks if the **`GlobalStrictConfiguration`** is enabled.
 *
 *  @returns { boolean }
 */
export function isStrict() {
    return __getConfig('strict');
}

/**
 *  Checks if the **`GlobalModeConfiguration`** for the environment is set to **`Development`**.
 *
 *  @returns { boolean }
 */
export function isDevMode() {
    return __getConfig('mode') === 'dev';
}

/**
 *  Checks if the **`GlobalModeConfiguration`** for the environment is set to **`Production`**.
 *
 *  @returns { boolean }
 */
export function isProdMode() {
    return __getConfig('mode') === 'prod';
}

/**
 *  Checks if the **`GlobalDiagnosticConfiguration`** is enabled.
 *
 *  @returns { boolean }
 */
export function isDiagnosticEnabled() {
    return __getConfig('diagnostic').enable;
}

// #: Global Entry
const ENTRIES = [
    isDevMode, isDiagnosticEnabled, isProdMode, isStrict, isVerbose
];
for (const ENTRY of ENTRIES) {
    __setGlobal(ENTRY.name, ENTRY, { writable: false });
}
