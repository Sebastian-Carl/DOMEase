# DOM-EASE README

- [DOM-EASE README](#dom-ease-readme)
  - [Global Configuration Policy](#global-configuration-policy)
  - [Features](#features)
  - [Repository](#repository)

## Global Configuration Policy
```ts
{
  mode: 'dev' | 'prod'; // #: Default: 'dev'
  strict: boolean; // #: Default: false
  verbose: boolean; // #: Default: true
}
```
- **mode** - Changes the environment from the specified mode options.
  - *Note* - When it is set to `prod` mode, configuration `verbose` would automatically set be disabled.
- **strict** - Changes the environment ***Soft Error*** policy to ***Hard Error***. All of considered as ***Soft Error*** in this library that only emits **warning**, would now emit ***Error***.
- **verbose** - Enable or disable the verbose state for **Console** logging events.

## Features
- ### **Global Configuration Methods**
  - `__setConfig()` - Modify the data of the current **GlobalConfigurationPolicy** properties.
  - `__getConfig()` - Returns the **GlobalConfigurationPolicy** object, or, the data of the specified access key of **GlobalConfiguration** properties.
- ### **Console Methods**
  - `clearConsole()` - Clear or reset the logs at **Console** or **Terminal** if possible.
  - `debug()` - Writes a **Console** event data at **debug** level.
  - `group()` - Writes a grouped **Console** event data.
  - `log()` - Writes a **Console** event data.
  - `notice()` - Writes a **Console** event data at **info** level.
  - `report()` - Writes a **Console** event data at **error** level.
  - `warn()` - Writes a **Console** event data at **warning** level.
- ### **Custom Errors**
  - `CustomError()` - A custom error object for customized errors.
  - `ArgumentError()` - A customized error for argument related violation.
  - `DuplicateEntryError()` - A customized error for duplicate entry.
  - `EmptyDataError()` - A customized error for empty related data or values.
  - `InvalidNodeError()` - A customized error for invalid node.
  - `MissingArgument()` - A customized error for missing required argument.
  - `NoSuchKeyError()` - A customized error for unknown or non-existing entry key.
  - `UnknownOptionError()` - A customized error for unknown or invalid options.
- ### **Guards Methods**
  - **Array**
    - `isArr()` - For checking whether if the specified argument is an **array** type.
    - `isEmptyArr()` - For checking whether if the specified **array** argument is empty.
  - **Boolean**
    - `isBool()` - For checking whether if the specified argument is a **boolean** type.
  - **Error**
    - `isErr()` - For checking whether if the specified **object** is an instance or extended to an **Error** object.
  - **Function**
    - `isFunc()` - For checking whether if the specified argument is a **function** type.
    - `isAnonymousFunc()` - For checking whether if the specified **function** argument does not have a **name**.
    - `isAsyncFunc()` - For checking whether if the specified **function** argument is **asynchronous**.
  - **Node**
    - `isAttrNode()` - For checking whether if the specified **Node** is an **AttributeNode**.
    - `isCommentNode()` - For checking whether if the specified **Node** is a **CommentNode**.
    - `isDocument()` - For checking whether if the specified **Node** is a **Document**.
    - `isDocType()` - For checking whether if the specified **Node** is a **DocumentType**.
    - `isDocFragment()` - For checking whether if the specified **Node** is a **DocumentFragment**.
    - `hasParentNode()` - For checking whether if the specified **Node** has a **ParentNode**.
    - `isChildOf()` - For checking whether if the specified **Node** is a **child** of the other specified **Node**.
    - `isElementNode()` - For checking whether if the specified **Node** is an **Element**.
    - `isHTMLElement()` - For checking whether if the specified **Element** is an instance of **HTMLElement**.
    - `isMathElement()` - For checking whether if the specified **Element** is an instance of **MathMLElement**.
    - `isNode()` - For checking whether if the specified argument is **Node**.
    - `isNodeConnected()` - For checking whether if the specified **Node** is currently existing somewhere in **Document**.
    - `isNodeType()` - For checking whether if the specified **nodeType** of a **Node** matches the specified **nodeType** option.
    - `isParentOf()` - For checking whether if the specified **ChildNode** is **child** of the specified **Node**.
    - `isSameNode()` - For checking whether if the two specified **Node** are the same.
    - `isSVGElement()` - For checking whether if the specified **Element** is an instance of **SVGElement**.
    - `isTextNode()` - For checking whether if the specified **Node** is a **TextNode**.
  - **Null & Undefined**
    - `isNil()` - For checking whether if the specified argument is a **null** or **undefined** type.
    - `isNull()` - For checking whether if the specified argument is **null** type.
    - `isUndefined()` - For checking whether if the specified argument is **undefined** type.
  - **Number**
    - `isNaN()` - For checking whether if the specified ****number** is a **NaN** or **Not-A-Number** type.
    - `isNum()` - For checking whether if the specified argument is a **number** type.
  - **Object**
    - `hasProperty()` - For checking whether if the specified plain/literal **object** contains the **property name** or **id**.
    - `isEmptyPObj()` - For checking whether if the specified plain/literal **object** is empty.
    - `isObj()` - For checking whether if the specified argument is an **object** type.
    - `isPObj()` - For checking whether if the specified **object** is a plain/literal **object**.
  - **Policy**
    - `isDevMode()` - For checking whether if the current environment mode is set to **development**.
    - `isProdMode()` - For checking whether if the current environment mode is set to **production**.
    - `isStrict()` - For checking whether if the environment is in **strict** mode.
    - `isVerbose()` - For checking whether if the environment **verbose** logging is **enabled** or **disabled**.
  - **Prototype**
    - `isPrototypeOf()` - For checking whether if the first **object** argument is an instance or **prototype** of the second **object** argument.
  - **String**
    - `isEmptyStr()` - For checking whether if the specified **string** argument is empty.
    - `isStr()` - For checking whether if the specified argument is a **string** type.
- ### **Other**
  - `__setGlobal()` - A centralized registry for adding a new property at **globalThis** runtime object.
  - `__emit()` - A centralized thrower or emitter for errors.
  - `getConstructorOf()` - Retrieves the **constructor** name of the specified value.
  - `getTypeOf()` - Retrieves the **type** or compare it with the specified **type** option of the specified value.

## Repository

- [DOMEase](https://github.com/Sebastian-Carl/DOMEase)
- [DOMEase - Issues](https://github.com/Sebastian-Carl/DOMEase/issues) - Freely report any issues or concerns that you've encountered.
