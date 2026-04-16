import { GlobalConfig, NodeTypeMap, ResolveNodeType } from '../types.js'

declare global {
    /**
     *  +------------------------------------------------+
     *  |                                                |
     *  |               Array Intellisense               |
     *  |                                                |
     *  +------------------------------------------------+
     */

    /**
     *  Checks if the specified argument is **`Array`**.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument.
     */
    function isArr(arg: unknown): arg is unknown[];

    /**
     *  Checks if the specified **`Array`** argument is empty.
     *
     *  @param arr - The **`Array`** argument to validate.
     *  @returns The validated **`Array`** argument.
     */
    function isEmptyArr(arr: unknown[]): arr is never[];

    /**
     *  +--------------------------------------------------+
     *  |                                                  |
     *  |               Boolean Intellisense               |
     *  |                                                  |
     *  +--------------------------------------------------+
     */

    /**
     *  Checks if the specified argument is **`boolean`**.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument.
     */
    function isBool(arg: unknown): arg is boolean;

    /**
     *  +------------------------------------------------+
     *  |                                                |
     *  |               Error Intellisense               |
     *  |                                                |
     *  +------------------------------------------------+
     */

    /**
     *  Checks if the specified argument is instance or constructor of **`Error`**.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument.
     */
    function isErr(arg: unknown): arg is Error;

    /**
     *  +---------------------------------------------------+
     *  |                                                   |
     *  |               Function Intellisense               |
     *  |                                                   |
     *  +---------------------------------------------------+
     */

    /**
     *  Checks if the specified argument is **`Function`**.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument.
     */
    function isFunc(arg: unknown): arg is Function;

    /**
     *  Checks if the specified **`Function`** is anonymous or does not have a name.
     *
     *  @param func - The **`Function`** to check.
     *  @returns The validated **`Function`**.
     */
    function isAnonymousFunc(func: Function): boolean;

    /**
     *  Checks if the specified **`Function`** is **`Asynchronous`**.
     *
     *  @param func - The **`Function`** to check.
     *  @returns The validated **`Function`**.
     */
    export function isAsyncFunc(func: Function): func is () => Promise<unknown>;

    /**
     *  +-----------------------------------------------------------+
     *  |                                                           |
     *  |               Null & Undefined Intellisense               |
     *  |                                                           |
     *  +-----------------------------------------------------------+
     */

    /**
     *  Checks if the specified argument is **`null`** or **`undefined`**.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument.
     */
    function isNil<T extends unknown>(arg: T): arg is Extract<T, null | undefined>;

    /**
     *  Checks if the specified argument is **`null`**.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument.
     */
    function isNull(arg: unknown): arg is null;

    /**
     *  Checks if the specified argument is **`undefined`**.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument.
     */
    function isUndefined(arg: unknown): arg is undefined;

    /**
     *  +--------------------------------------------------------+
     *  |                                                        |
     *  |               IsPrototypeOf Intellisense               |
     *  |                                                        |
     *  +--------------------------------------------------------+
     */

    /**
     *  Checks if the specified **`object`** is **`prototype`** of or under the **`prototype`** chain of the other specified
     *  **`object`**.
     *
     *  @param _this - The target **`object`**.
     *  @param ofThis - The **`object`** of where to check the target **`object`**.
     */
    function isPrototypeOf<T extends object, O extends object>(_this: T, ofThis: O): boolean;

    /**
     *  +-----------------------------------------------+
     *  |                                               |
     *  |               Node Intellisense               |
     *  |                                               |
     *  +-----------------------------------------------+
     */

    /**
     *  Checks if the specified argument is **`Node`**.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument.
     */
    function isNode(arg: unknown): arg is Node;

    /**
     *  Checks if the specified **`node`** type matches the specified **`node`** type option.
     *
     *  @param node - The **`node`** to validate.
     *  @param type - The **`node`** type to compare.
     *  @returns The validated type of **`node`**.
     */
    function isNodeType<N extends Node, K extends keyof NodeTypeMap>(node: N, type: K): node is Extract<N, NodeTypeMap[K]>;

    /**
     *  Checks if the specified **`node`** is **`document`**.
     *
     *  @param node - The **`node`** to validate.
     *  @returns The validated **`node`**.
     */
    function isDocument(node: Node): node is Document;

    /**
     *  Checks if the specified **`node`** is **`DocumentType`**.
     *
     *  @param node - The **`node`** to validate.
     *  @returns The validated **`node`**.
     */
    function isDocType(node: Node): node is DocumentType;

    /**
     *  Checks if the specified **`node`** is **`DocumentFragment`**.
     *
     *  @param node - The **`node`** to validate.
     *  @returns The validated **`node`**.
     */
    function isDocType(node: Node): node is DocumentFragment;

    /**
     *  Checks if the specified **`node`** has a **`ParentNode`**.
     *
     *  @param node - The **`node`** to validate.
     *  @returns The validated **`node`**.
     */
    function hasParentNode(node: Node): node is ChildNode;

    /**
     *  Checks if the specified two **`nodes`** are the same.
     *
     *  @param node - The target **`node`** to compare.
     *  @param thisNode - The reference **`node`** to compare with.
     *  @returns The validated comparison of **`node`**.
     */
    function isSameNode<TN extends Node>(node: Node, thisNode: TN): node is TN;

    /**
     *  Checks if the specified **`node`** is **`parent`** of the specified **`ChildNode`**.
     *
     *  @param child - The **`ChildNode`**.
     *  @param thisNode - The **`node`** of where search the **`ChildNode`**.
     *  @returns The search state result.
     */
    function isParentOf<CN extends ChildNode, TN extends Node>(child: CN, thisNode: TN): boolean;

    /**
     *  Checks if the specified **`node`** is **`child`** of the specified **`ParentNode`**.
     *
     *  @param parent - The **`ParentNode`**.
     *  @param thisNode - The **`node`** to check at tree of **`ParentNode`**.
     *  @returns The search state result.
     */
    function isChildOf<PN extends ParentNode, TN extends Node>(parent: PN, thisNode: TN): boolean;

    /**
     *  Checks if the specified **`node`** is connected to the **`Document`**.
     *
     *  @param node - The **`node`** to check.
     *  @returns The search state result.
     */
    function isNodeConnected<N extends Node>(node: N): boolean;

    /**
     *  Checks if the specified **`node`** is **`Element`**.
     *
     *  @param node - The **`node`** to validate.
     *  @returns The validated **`node`**.
     */
    function isElementNode(node: Node): node is Element;

    /**
     *  Checks if the specified **`element`** is **`HTMLElement`**.
     *
     *  @param element - The **`element`** to validate.
     *  @returns The validated **`element`**.
     */
    function isHTMLElement(element: Element): element is HTMLElement;

    /**
     *  Checks if the specified **`element`** is **`MathMLElement`**.
     *
     *  @param element - The **`element`** to validate.
     *  @returns The validated **`element`**.
     */
    function isMathElement(element: Element): element is MathMLElement;

    /**
     *  Checks if the specified **`element`** is **`SVGElement`**.
     *
     *  @param element - The **`element`** to validate.
     *  @returns The validated **`element`**.
     */
    function isSVGElement(element: Element): element is SVGElement;

    /**
     *  Checks if the specified **`node`** is **`TextNode`**.
     *
     *  @param node - The **`node`** to validate.
     *  @returns The validated **`node`**.
     */
    function isTextNode(node: Node): node is Text;

    /**
     *  Checks if the specified **`node`** is **`CommentNode`**.
     *
     *  @param node - The **`node`** to validate.
     *  @returns The validated **`node`**.
     */
    function isCommentNode(node: Node): node is Comment;

    /**
     *  Checks if the specified **`node`** is **`AttributeNode`**.
     *
     *  @param node - The **`node`** to validate.
     *  @returns The validated **`node`**.
     */
    function isAttrNode(node: Node): node is Attr;

    /**
     *  +-------------------------------------------------+
     *  |                                                 |
     *  |               Number Intellisense               |
     *  |                                                 |
     *  +-------------------------------------------------+
     */

    /**
     *  Checks if the specified **`number`** is a type **`NaN`** (not a number).
     *
     *  @param num - The number to validate.
     *  @returns The validated number.
     */
    function isNaN(num: number): boolean

    /**
     *  Checks if the specified argument is **`number`**.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument.
     */
    function isNum(arg: unknown): arg is number;

    /**
     *  +-------------------------------------------------+
     *  |                                                 |
     *  |               Object Intellisense               |
     *  |                                                 |
     *  +-------------------------------------------------+
     */

    /**
     *  Checks if the specified argument is **`object`**.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument.
     */
    function isObj(arg: unknown): arg is object;

    /**
     *  Checks if the specified **`object`** argument is plain/literal (**`{}`**)
     *
     *  @param obj - The **`object`** argument to validate.
     *  @returns The validated **`object`** argument.
     */
    function isPObj(obj: object): obj is {};

    /**
     *  Checks if the specified plain/literal **`object`** argument (**`{}`**) is empty.
     *
     *  @param obj - The **`object`** argument to validate.
     *  @returns The validated **`object`** argument.
     */
    function isEmptyPObj(obj: {}): boolean;

    /**
     *  Checks if the specified plain/literal **`object`** contains the specified **`property`** name.
     *
     *  @param obj - The plain/literal **`object`**.
     *  @param key - The **`property`** key to search.
     *  @returns The property search state result.
     */
    function hasProperty<O extends { [p: string]: any }>(obj: O, key: string): boolean;
    function hasProperty<O extends { [p: string]: any }>(obj: O, key: keyof O): boolean;

    /**
     *  +-------------------------------------------------+
     *  |                                                 |
     *  |               Policy Intellisense               |
     *  |                                                 |
     *  +-------------------------------------------------+
     */

    /**
     *  Checks if the **`GlobalVerboseConfiguration`** policy is enabled.
     *
     *  @returns The state of **`GlobalVerboseConfiguration`** policy.
     */
    function isVerbose(): GlobalConfig['verbose'];

    /**
     *  Checks if the **`GlobalStrictConfiguration`** policy is enabled.
     *
     *  @returns The state of **`GlobalStrictConfiguration`** policy.
     */
    function isStrict(): GlobalConfig['strict'];

    /**
     *  Checks if the **`GlobalModeConfiguration`** policy is set to **`dev`**.
     *
     *  @returns The validated **`GlobalModeConfiguration`** policy mode.
     */
    function isDevMode(): boolean;

    /**
     *  Checks if the **`GlobalModeConfiguration`** policy is set to **`prod`**.
     *
     *  @returns The validated of **`GlobalModeConfiguration`** mode.
     */
    function isProdMode(): boolean;

    /**
     *  Checks if the **`GlobalDiagnosticConfiguration`** policy is enabled.
     *
     *  @returns The state of **`GlobalDiagnosticConfiguration`** policy.
     */
    function isDiagnosticEnabled(): boolean;

    /**
     *  +-------------------------------------------------+
     *  |                                                 |
     *  |               String Intellisense               |
     *  |                                                 |
     *  +-------------------------------------------------+
     */

    /**
     *  Checks if the specified argument is **`string`**.
     *
     *  @param arg - The argument to validate.
     *  @returns The validated argument.
     */
    function isStr(arg: unknown): arg is string;

    /**
     *  Checks if the specified **`string`** argument is empty.
     *
     *  @param str - The **`string`** argument to validate.
     *  @returns The validated **`string`** argument.
     */
    function isEmptyStr(str: string): boolean;
}

export {}
