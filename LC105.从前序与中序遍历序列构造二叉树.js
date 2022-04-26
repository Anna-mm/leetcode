// 给定两个整数数组 preorder 和 inorder ，其中 preorder 是二叉树的先序遍历， inorder 是同一棵树的中序遍历，请构造二叉树并返回其根节点。

// 输入: preorder = [3,9,20,15,7], inorder = [9,3,15,20,7]
// 输出: [3,9,20,null,null,15,7]

// 输入: preorder = [-1], inorder = [-1]
// 输出: [-1]

// 题解
// 对于任意一颗树而言，前序遍历的形式总是:[ 根节点, [左子树的前序遍历结果], [右子树的前序遍历结果] ]
// 根节点总是前序遍历中的第一个节点。而中序遍历的形式总是:[ [左子树的中序遍历结果], 根节点, [右子树的中序遍历结果] ]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
 var buildTree = function (preorder, inorder) {
    const preLen = preorder.length;
    const inLen = inorder.length;
    if (preLen !== inLen) {
        return null;
    }
    const inorderMap = new Map();
    // 为什么要存中序遍历的 map？
    // 要从中序遍历中找到根的位置，以此来分割左右子树。
    for (let i = 0; i < inLen; i++) {
        inorderMap.set(inorder[i], i);
    }
    return myBuildTree(preorder, 0, preLen - 1, inorderMap, 0, inLen - 1);
};

/**
 *
 * @param {*} preorder
 * @param {*} preLeft
 * @param {*} preRight
 * @param {*} inorderMap
 * @param {*} inLeft
 * @param {*} inRight
 * @returns
 */
var myBuildTree = function (preorder, preLeft, preRight, inorderMap, inLeft, inRight) {
    if (preLeft > preRight || inLeft > inRight) {
        return null;
    }
    const rootVal = preorder[preLeft];
    const root = new TreeNode(rootVal);
    const pIndex = inorderMap.get(rootVal);

    root.left = myBuildTree(preorder, preLeft + 1, pIndex - inLeft + preLeft, inorderMap, inLeft, pIndex - 1);
    root.right = myBuildTree(preorder, pIndex - inLeft + preLeft + 1, preRight, inorderMap, pIndex + 1, inRight);
    return root;
}