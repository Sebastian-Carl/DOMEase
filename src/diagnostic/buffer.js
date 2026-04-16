import __emit from '../internal/emit.js';
import { __getConfig } from '../config/config.js';
import ArgumentError from '../errors/error/error.argument.js';
import CustomError from '../errors/error/error.custom.js';
import MissingArgumentError from '../errors/error/error.missing_argument.js';
import NoSuchKeyError from '../errors/error/error.no_such_key.js';
import { isUndefined } from '../guards/guard/guard.undefined.js';
import { isNum } from '../guards/guard/guard.number.js';
import { isDiagnosticEnabled } from '../guards/guard/guard.policy.js';
import { isEmptyPObj, isPObj } from '../guards/guard/guard.object.js';
import constructorOf from '../utils/util/constructorOf.js';
import getTypeOf from '../utils/util/getTypeOf.js';
import { createDiagnosticEvent } from './service.js'

export default class DiagnosticsBuffer {
    /**
     *  A collection of **`DiagnosticEventRecords`** history.
     *
     *  @private
     *  @readonly
     *  @type { import('../types/diagnostic/meta.js').DiagnosticEventRecords }
     */
    history = [];
    /**
     *  A collection of **`DiagnosticLatestEventsRecord`** map.
     *
     *  @private
     *  @readonly
     *  @type { import('../types/diagnostic/meta.js').DiagnosticLatestEventsRecord }
     */
    latest = new Map([]);

    /**
     *  The maximum `DiagnosticEventRecords` buffer size.
     *
     *  @readonly
     *  @type { number }
     */
    size = 0;
    /**
     *  The pointer head inside of `DiagnosticEventRecords` to write.
     *
     *  @private
     *  @type { number }
     */
    head = 0;
    /**
     *  The total written entries inside of `DiagnosticEvents`.
     *
     *  @private
     *  @type { number }
     */
    count = 0;

    /**
     *  Constructs the maximum size of `DiagnosticEvents`.
     *
     *  @overload
     */
    /**
     *  Constructs the maximum size of `DiagnosticEventRecords` with the specified size.
     *
     *  @overload
     *  @param { number } size - The maximum size of `DiagnosticEventRecords`.
     */
    constructor(size = __getConfig('diagnostic').size) {
        const isEnabled = isDiagnosticEnabled();
        if (!isEnabled) {
            throw new CustomError('Cannot initialize or create a \'DiagnosticBuffer\'. Enable \'GlobalDiagnosticConfiguration\' policy first.', {
                cause: { target: 'diagnostic.enabled', data: isEnabled },
                context: `(@PolicyContract: diagnostic: { enable: ${isEnabled} })`,
                customName: 'PolicyContractError'
            });
        }

        if (isUndefined(size)) {
            throw new MissingArgumentError('Requires a maximum size for \'DiagnosticEvents\' history.', {
                cause: { target: 'size', data: size },
                context: `(@MissingArgument: size)`,
                missing_arg: 'size'
            });
        }

        if (!isNum(size)) {
            throw new ArgumentError('Size of \'DiagnosticEvents\' must be a valid numeric value.', {
                expected_args: 'Number',
                cause: { target: 'size', data: size },
                context: `(@InvalidArgument: size: ${constructorOf(size) ?? getTypeOf(size)})`
            });
        }

        if (size === 0 || size < 0) {
            throw new CustomError(`Maximum size of 'DiagnosticEvents' must be above zero.`, {
                cause: { target: 'size', data: size },
                context: `(@InvalidSize: size: ${size})`,
                customName: 'DiagnosticBufferSizeError'
            });
        }

        this.size = size;
        this.history = new Array(size);
    }

    /**
     *  Records the provided `DiagnosticEvent` object.
     *
     *  @param { import('../types/diagnostic/meta.js').DiagnosticEvent } event - The `DiagnosticEvent` to store.
     */
    newRecord(event) {
        if (isUndefined(event)) {
            this.newRecord(createDiagnosticEvent(
                'MissingArgumentError',
                'fatal',
                this.constructor.name + '.newRecord',
                'Missing \'DiagnosticEvent\'.',
                { id: 'event', data: event }
            ));

            __emit(MissingArgumentError, 'Requires a \'DiagnosticEvent\' to store.', {
                cause: { target: 'event', data: event },
                context: `(@MissingArgument: event)`,
                missing_arg: 'event'
            });
        }

        this.history[this.head] = event;
        this.head = (this.head + 1) % this.size;
        this.count = this.count < this.size ? (this.count + 1) : this.count;

        this.latest.set(event.type, event);
    }

    /**
     *  Retrieves the collection of **`DiagnosticEventRecords`** history.
     *
     *  @param { import('../types/diagnostic/meta.js').DiagnosticGetRecordsOptions } [options]
     *  @returns { import('../types/diagnostic/meta.js').DiagnosticEventRecords }
     */
    getRecords(options) {
        const HISTORY = [];

        for (var i = 0; i < this.size; i++) {
            const INDEX = (this.head - this.count + i + this.size) % this.size;
            const RECORD = this.history[INDEX];

            // #: Skip empty entry
            if (isUndefined(RECORD)) {
                continue;
            }

            // #: Search
            if (options && isPObj(options) && !isEmptyPObj(options)) {
                const STATES = [];
                for (const [OPK, OPV] of Object.entries(options)) {
                    if (!hasProperty(RECORD, OPK)) {
                        this.newRecord(createDiagnosticEvent(
                            'NoSuchKeyError',
                            'fatal',
                            this.constructor.name + '.getRecords',
                            `There's no such key '${OPK}' at 'DiagnosticEventRecord'.`,
                            { id: 'options', data: options }
                        ));

                        __emit(NoSuchKeyError, `There's no such key '${OPK}' at 'DiagnosticEventRecord'.`, {
                            cause: { target: 'options', data: options },
                            context: `(@NoSuchKey: options: { ${OPK} })`
                        });
                    }

                    console.log(RECORD[OPK], OPV);
                    STATES.push(RECORD[OPK] === OPV);
                }

                console.log(STATES);
                if (STATES.every(STATES => STATES === true)) {
                    console.log(RECORD);
                    HISTORY.push(RECORD);
                    continue;
                }

                continue;
            }

            HISTORY.push(RECORD);
        }

        return HISTORY;
    }

    /**
     *  Retrieves the **`DiagnosticLatestEventsRecord`** map.
     *
     *  @returns { import('../types/diagnostic/meta.js').DiagnosticLatestEventsRecord }
     */
    getLatestRecords() {
        return this.latest;
    }

    /**
     *  Resets the **`DiagnosticBuffer`** from its default state.
     */
    reset() {
        this.history = new Array(this.size);
        this.latest = new Map([]);
        this.count = 0;
        this.head = 0;
    }
}

// #: Global Entry
__setGlobal('DiagnosticsBuffer', DiagnosticsBuffer, { writable: false });
