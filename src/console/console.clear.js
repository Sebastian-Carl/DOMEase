import __setGlobal from '../internal/global-registry.js'

/**
 *  Clears the **`console`** messages if possible.
 *
 *  @returns { void }
 */
export default function clearConsole() {
    console.clear();
}

// #: Global Entry
__setGlobal('clearConsole', clearConsole, { writable: false });
