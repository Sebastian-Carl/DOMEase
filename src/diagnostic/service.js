import { __getConfig } from '../config/config.js';
import { isEmptyStr, isStr } from '../guards/guard/guard.string.js';
import { isDiagnosticEnabled } from '../guards/guard/guard.policy.js';
import { isEmptyPObj, isPObj } from '../guards/guard/guard.object.js';
import { isStrict } from '../guards/guard/guard.policy.js';
import __emit from '../internal/emit.js';
import ArgumentError from '../errors/error/error.argument.js';
import EmptyDataError from '../errors/error/error.empty_data.js';
import constructorOf from '../utils/util/constructorOf.js';
import getTypeOf from '../utils/util/getTypeOf.js';
import { dateNow } from '../date/date.js'
import { initDiagnosticsBuffer } from './init.js';
import __setGlobal from '../internal/global-registry.js';

/**
 *  A lazy handler for storing a record of **`DiagnosticEvent`**.
 *
 *  @param { import('../types/diagnostic/meta.js').DiagnosticEvent } event
 */
export function recordDiagnosticEvent(event) {
    if (!isDiagnosticEnabled()) {
        return;
    }

    // #: Ensures 'diagnostic' entry.
    initDiagnosticsBuffer();

    diagnostic.newRecord(event);
}

/**
 *  Creates a **`DiagnosticEvent`** object that can be store at **`DiagnosticBuffer`**.
 *
 *  @param { import('../types/diagnostic/meta.js').DiagnosticEventType } type
 *  @param { import('../types/diagnostic/meta.js').DiagnosticEventSeverity } severity
 *  @param { string } source
 *  @param { string } message
 *  @param { import('../types/diagnostic/meta.js').DiagnosticEventTarget } [target]
 *  @returns { import('../types/diagnostic/meta.js').DiagnosticEvent }
 */
export function createDiagnosticEvent(type, severity, source, message, target) {
    const ATTRIBUTES = [type, severity, source, message, target],
        ATTRIBUTES_ID = ['type', 'severity', 'source', 'message', 'target'],
        SOURCE = 'createDiagnosticEvent';

    ATTRIBUTES.slice(0, ATTRIBUTES.length - 1).forEach((attr, pos) => {
        const ID = ATTRIBUTES_ID[pos].charAt(0).toUpperCase() + ATTRIBUTES_ID[pos].slice(1);
        if (!isStr(attr)) {
            recordDiagnosticEvent(createDiagnosticEvent(
                'ArgumentError',
                'fatal',
                SOURCE,
                `Cannot create a diagnostic event object. Ensure that parameter '${ATTRIBUTES_ID[pos]}' for 'DiagnosticEvent${ID}' is in string format.`,
                { id: ATTRIBUTES_ID[pos], data: attr }
            ));

            __emit(ArgumentError, `Expects a string format (runtime) value for DiagnosticEvent${ID}.`, {
                expected_args: 'String',
                cause: { target: ATTRIBUTES_ID[pos], data: attr },
                context: `(@InvalidArgument: ${ATTRIBUTES_ID[pos]}: ${constructorOf(attr) ?? getTypeOf(attr)})`
            });
        }

        if (pos < 3 && isEmptyStr(attr)) {
            recordDiagnosticEvent(createDiagnosticEvent(
                'EmptyDataError',
                'fatal',
                SOURCE,
                `Cannot create a diagnostic event object. Ensure that parameter '${ATTRIBUTES_ID[pos]}' for 'DiagnosticEvent${ID}' is not an empty string.`,
                { id: ATTRIBUTES_ID[pos], data: attr }
            ));

            __emit(EmptyDataError, `Expects a non-empty string (runtime) value for DiagnosticEvent${ID}.`, {
                cause: { target: ATTRIBUTES_ID[pos], data: attr },
                context: `(@EmptyData: ${ATTRIBUTES_ID[pos]}: \'\')`
            });
        }
    });

    if (!isUndefined(target)) {
        if (!isPObj(target)) {
            recordDiagnosticEvent(createDiagnosticEvent(
                'ArgumentError',
                'fatal',
                SOURCE,
                `Cannot create a diagnostic event object. Ensure that parameter 'target' for 'DiagnosticEventTarget' is in plain object format.`,
                { id: 'target', data: target }
            ));

            __emit(ArgumentError, `Expects a plain object format (runtime) value for DiagnosticEventTarget.`, {
                expected_args: 'Object ({})',
                cause: { target: 'target', data: target },
                context: `(@InvalidArgument: target: ${constructorOf(target) ?? getTypeOf(target)})`
            });
        }

        if (isEmptyPObj(target)) {
            if (isStrict()) {
                recordDiagnosticEvent(createDiagnosticEvent(
                    'EmptyDataError',
                    'fatal',
                    SOURCE,
                    `Expects a non-empty plain object (runtime) value for DiagnosticEventTarget.`,
                    { id: 'target', data: target }
                ));

                __emit(EmptyDataError, 'Expects a non-empty plain object (runtime) value for DiagnosticEventTarget.', {
                    cause: { target: 'target', data: target },
                    context: `(@EmptyArgument: target: ${target})`
                });
            }

            recordDiagnosticEvent(createDiagnosticEvent(
                'EmptyDataError',
                'recoverable',
                SOURCE,
                `Cannot create a DiagnosticEventTarget with an empty plain object. Resolved parameter 'target' with null.`,
                { id: 'target', data: target }
            ));
            target = null;
        } else {
            const TARGET_PROPS = new Set(Object.keys(target));
            if (!TARGET_PROPS.has('id')) {
                if (isStrict()) {
                    recordDiagnosticEvent(createDiagnosticEvent(
                        'MissingArgumentError',
                        'fatal',
                        SOURCE,
                        `Required property 'id' at parameter 'target' is missing for DiagnosticEventTarget.`,
                        { id: 'target', data: target }
                    ));

                    __emit(MissingArgumentError, 'Missing required property \'id\' at parameter \'target\' for DiagnosticEventTarget.', {
                        missing_arg: 'id',
                        cause: { target: 'target', data: target },
                        context: `(@MissingProperty: target: ${target})`
                    });
                }

                recordDiagnosticEvent(createDiagnosticEvent(
                    'MissingArgumentError',
                    'recoverable',
                    SOURCE,
                    `Cannot create a DiagnosticEventTarget object with a missing required property 'id'. Resolved parameter 'target' with null.`,
                    { id: 'target', data: target }
                ));
                target = null;
            }
        }
    }

    return {
        message: message,
        severity: severity,
        source: source,
        timestamp: dateNow(),
        type: type,
        target: target
    }
}

// #: Global Entry
for (const ENTRY of [createDiagnosticEvent, recordDiagnosticEvent]) {
    __setGlobal(ENTRY.name, ENTRY, { writable: false });
}
