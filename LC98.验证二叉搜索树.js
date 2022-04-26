// 方案一：中序遍历
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isValidBST = function(root) {
    const inorderArray = walk(root);
    const a = inorderArray.join('');
    // 既要去重又要排序还要变成字符串比较
    const b = Array.from(new Set(inorderArray)).sort((a,b)=>a-b).join('');
    return a === b;

};

var walk = function(node) {
    if (!node) {
        return [];
    }
    return walk(node.left).concat(node.val).concat(walk(node.right));
}