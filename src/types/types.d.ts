import './errors/errors.d.ts';

// #: Error Types
export type ErrorCause = {
    /**
     *  The id or name of the argument that cause the error.
     */
    target: string;
    /**
     *  The data of argument that trigger the error.
     */
    data: unknown;
}

// #: Custom Error Options Base.
export type ERROR_OPTIONS<OtherOptions extends {} = {}> = {
    /**
     *  The cause object argument of the error.
     */
    cause?: ErrorCause;
    /**
     *  The context message of the error
     */
    context?: string;
    /**
     *  A custom name for the error.
     */
    customName?: string;
} & OtherOptions;

// #: Sub Errors Options.
export type ArgumentErrorOptions = ERROR_OPTIONS<{
    /**
     *  The expected argument type(s).
     */
    expected_args: string | string[]
}>;
export type MissingArgumentErrorOptions = ERROR_OPTIONS<{
    /**
     *  The missing argument name or id.
     */
    missing_arg: string;
}>;
export type InvalidNodeErrorOptions = ERROR_OPTIONS<{
    /**
     *  The expected node type(s).
     */
    expected_nodes: string | number | (string | number)[]
}>;
export type EmptyDataErrorOptions = ERROR_OPTIONS;
export type DuplicateEntryErrorOptions = ERROR_OPTIONS<{
    /**
     *  The duplicate entry name or id.
     */
    duplicate_entry: string;
}>;
export type NoSuchKeyErrorOptions = ERROR_OPTIONS;
export type UnknownOptionErrorOptions = ERROR_OPTIONS<{
    /**
     *  The unknown option **`name`** or **`id`**.
     */
    unknown_option: string;
}>;

// #: Error Map
export type ErrorMap = {
    CustomError: typeof CustomError;
    ArgumentError: typeof ArgumentError;
    DuplicateEntryError: typeof DuplicateEntryError;
    EmptyDataError: typeof EmptyDataError;
    InvalidNodeError: typeof InvalidNodeError;
    MissingArgumentError: typeof MissingArgumentError;
    NoSuchKeyError: typeof NoSuchKeyError;
    UnknownOptionError: typeof UnknownOptionError;
}

// #: Error Options
export type ErrorOptionsMap = {
    CustomError: ERROR_OPTIONS;
    ArgumentError: ArgumentErrorOptions;
    DuplicateEntryError: DuplicateEntryErrorOptions;
    EmptyDataError: EmptyDataErrorOptions;
    InvalidNodeError: InvalidNodeErrorOptions;
    MissingArgumentError: MissingArgumentErrorOptions;
    NoSuchKeyError: NoSuchKeyErrorOptions;
    UnknownOptionError: UnknownOptionErrorOptions;
}

// #: Get Error Options
export type GetErrorOptions<E> = {
    [K in keyof ErrorMap]:
        E extends ErrorMap[K] ?
            ErrorOptionsMap[K] : ERROR_OPTIONS;
}[keyof ErrorMap];

// #: Global Registry Options
export type GlobalRegistryOptions = {
    /**
     *  Determines whether if this property is configurable.
     */
    configurable?: boolean;
    /**
     *  Determines whether if this property is can be enumerable or loop-able.
     */
    enumerable?: boolean;
    get?: PropertyDescriptor["get"];
    set?: PropertyDescriptor["set"];
    /**
     *  Determines whether if the value of this property is can be changed or re-written.
     */
    writable?: boolean;
}

// #: Global Configuration
export type GlobalConfiguration = {
    /**
     *  Diagnostic event policy.
     */
    diagnostic: {
        enable: boolean;
        size: number;
        visibility: 'always' | 'dev-only'
    };
    /**
     *  Environment mode.
     *
     *  ***Note***:
     *   - When set in **`production`** mode, the **`verbose`** configuration would be override in order to avoid
     *     noises or events related to **`console`**.
     */
    mode: 'dev' | 'prod';
    /**
     *  Set the state of the environment into strict mode.
     *
     *  ***Note***:
     *   - When enabled, soft-error features of this library would now be treated as hard-error.
     */
    strict: boolean,
    /**
     *  Enable or disable console related logging events.
     */
    verbose: boolean;
}

// #: Type Options
export type TypeOfOptions = 'string' | 'number' | 'bigint' | 'boolean' | 'symbol' | 'undefined' | 'object' | 'function';
export type ResolveTypeOptions<T extends TypeOfOptions> =
    T extends 'string' ? string :
    T extends 'number' ? number :
    T extends 'bigint' ? bigint :
    T extends 'boolean' ? boolean :
    T extends 'symbol' ? symbol :
    T extends 'undefined' ? undefined :
    T extends 'object' ? object :
    T extends 'function' ? Function :
    undefined


// #: Node Types Map
export type NodeTypeMap = {
    ELEMENT_NODE: Element;
    ATTRIBUTE_NODE: Attr;
    TEXT_NODE: Text;
    CDATA_SECTION_NODE: CDATASection;
    PROCESSING_INSTRUCTION_NODE: ProcessingInstruction;
    COMMENT_NODE: Comment;
    DOCUMENT_NODE: Document;
    DOCUMENT_TYPE_NODE: DocumentType;
    DOCUMENT_FRAGMENT_NODE: DocumentFragment;
}

export type ResolveNodeType<N extends Node, NType extends keyof NodeTypeMap> =
    N extends NodeTypeMap[NType] ? NodeTypeMap[NType] : N;
