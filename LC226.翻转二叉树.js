// 给你一棵二叉树的根节点 root ，翻转这棵二叉树，并返回其根节点。
// https://leetcode-cn.com/problems/invert-binary-tree/
// 其实就是输出对称二叉树， LC101

// 时间复杂度：O(N)O(N)
// 空间复杂度：O(N)O(N)

// @lc code=start
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
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if (root === null) {
        return null;
    }
    const left = invertTree(root.left);
    const right = invertTree(root.right);

    root.left = right;
    root.right = left;
    return root;
};
// @lc code=end

