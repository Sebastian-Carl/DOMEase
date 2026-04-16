import __setGlobal from '../../internal/global-registry.js'
import { isNull } from './guard.null.js';
import { isNum } from './guard.number.js';
import { isObj } from './guard.object.js';
import { isStr } from './guard.string.js';
import { isProtoOf } from './guard.proto.js';

/**
 *  Checks if the specified argument is **`Node`**.
 *
 *  @param { unknown } arg
 *  @returns { arg is Node }
 */
export function isNode(arg) {
    if (isNull(arg) || !isObj(arg)) {
        return false;
    }

    return isStr(arg?.nodeName) && isObj(arg?.ownerDocument) && isNum(arg?.nodeType);
}

/**
 *  Checks if the specified **`node`** matches the specified **`nodeType`** option.
 *
 *  @template { keyof import('../../types/types.js').NodeTypeMap } K
 *  @param { Node } node
 *  @param { K } type
 *  @returns { node is import('../../types/types.js').NodeTypeMap[K] }
 */
export function isNodeType(node, type) {
    return isNode(node) && node.nodeType === type;
}

/**
 *  Checks if the specified **`node`** is **`document`**.
 *
 *  @param { Node } node
 *  @returns { node is Document }
 */
export function isDocument(node) {
    return isNodeType(node, 'DOCUMENT_NODE');
}

/**
 *  Checks if the specified **`node`** is **`DocumentFragment`**.
 *
 *  @param { Node } node
 *  @returns { node is DocumentFragment }
 */
export function isDocFragment(node) {
    return isNodeType(node, 'DOCUMENT_FRAGMENT_NODE');
}

/**
 *  Checks if the specified **`node`** is **`DocumentTypeNode`**.
 *
 *  @param { Node } node
 *  @returns { node is DocumentType }
 */
export function isDocType(node) {
    return isNodeType(node, 'DOCUMENT_TYPE_NODE');
}

/**
 *  Checks if the specified **`node`** has a **`ParentNode`**.
 *
 *  @param { node } node
 *  @returns { node is ChildNode }
 */
export function hasParentNode(node) {
    return isNode(node) && !isNull(node.parentNode);
}

/**
 *  Checks if the specified **`node`** is the same as the other specified **`node`**.
 *
 *  @template { Node } N
 *  @template { Node } TN
 *  @param { N } node
 *  @param { TN } thisNode
 *  @returns { boolean }
 */
export function isSameNode(node, thisNode) {
    if (!isNode(node) || !isNode(thisNode)) {
        return false;
    }

    return node.isSameNode(thisNode);
}

/**
 *  Checks if the specified **`node`** is **`parent`** of the specified **`ChildNode`**.
 *
 *  @template { ChildNode } CN
 *  @template { Node } N
 *  @param { CN } child
 *  @param { N } thisNode
 *  @returns { boolean }
 */
export function isParentOf(child, thisNode) {
    if (!isNode(child) || !isNode(thisNode) || !hasParentNode(child)) {
        return false;
    }

    return isSameNode(child.parentNode, thisNode);
}

/**
 *  Checks if the specified **`node`** is **`child`** of the specified **`ParentNode`**.
 *
 *  @template { ParentNode } P
 *  @template { Node } N
 *  @param { P } parent
 *  @param { N } node
 *  @returns { boolean }
 */
export function isChildOf(parent, node) {
    if (!isNode(node) || !isNode(parent)) {
        return false;
    }

    return isParentOf(node, parent);
}

/**
 *  Checks if the specified **`node`** is connected to **`document`**.
 *
 *  @template { Node } N
 *  @param { N } node
 *  @returns { boolean }
 */
export function isNodeConnected(node) {
    return isNode(node) && node.isConnected;
}

/**
 *  Checks if the specified **`node`** is **`ElementNode`**.
 *
 *  @template { Node } N
 *  @param { N } node
 *  @returns { node is Element }
 */
export function isElementNode(node) {
    return isNodeType(node, 'ELEMENT_NODE');
}

/**
 *  Checks if the specified **`ElementNode`** is **`HTMLElement`**.
 *
 *  @template { Element } N
 *  @param { N } element
 *  @returns { node is HTMLElement }
 */
export function isHTMLElement(element) {
    return isElementNode(element) && isProtoOf(element, HTMLElement);
}

/**
 *  Checks if the specified **`ElementNode`** is **`SVGElement`**.
 *
 *  @template { Element } N
 *  @param { N } element
 *  @returns { node is SVGElement }
 */
export function isSVGElement(element) {
    return isElementNode(element) && isProtoOf(element, SVGElement);
}

/**
 *  Checks if the specified **`ElementNode`** is **`MathMLElement`**.
 *
 *  @template { Element } N
 *  @param { N } element
 *  @returns { node is MathMLElement }
 */
export function isMathElement(element) {
    return isElementNode(element) && isProtoOf(element, MathMLElement);
}

/**
 *  Checks if the specified **`node`** is **`TextNode`**.
 *
 *  @template { Node } N
 *  @param { N } node
 *  @returns { node is Text }
 */
export function isTextNode(node) {
    return isNodeType(node, 'TEXT_NODE');
}

/**
 *  Checks if the specified **`node`** is **`CommentNode`**.
 *
 *  @template { Node } N
 *  @param { N } node
 *  @returns { node is Comment }
 */
export function isCommentNode(node) {
    return isNodeType(node, 'COMMENT_NODE');
}

/**
 *  Checks if the specified **`node`** is **`AttributeNode`**.
 *
 *  @template { Node } N
 *  @param { N } node
 *  @returns { node is Attr }
 */
export function isAttrNode(node) {
    return isNodeType(node, 'ATTRIBUTE_NODE');
}

// #: Global Entry
const ENTRIES = [
    hasParentNode, isAttrNode, isChildOf, isCommentNode, isDocFragment, isDocument,
    isElementNode, isHTMLElement, isMathElement, isNode, isNodeConnected, isNodeType,
    isParentOf, isSVGElement, isTextNode
]
for (const ENTRY of ENTRIES) {
    __setGlobal(ENTRY.name, ENTRY, { writable: false });
}
