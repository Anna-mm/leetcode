// 给定一个二叉树，找出其最小深度。
// https://leetcode-cn.com/problems/minimum-depth-of-binary-tree/

// 最小深度是从根节点到最近叶子节点的最短路径上的节点数量。

// 说明：叶子节点是指没有子节点的节点。

// 输入：root = [3,9,20,null,null,15,7]
// 输出：2

// 输入：root = [2,null,3,null,4,null,5,null,6]
// 输出：5

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
 * @return {number}
 */
var minDepth = function(root) {
    if (root === null) {
        return 0;
    }
    let minLeft = minDepth(root.left);
    let minRight = minDepth(root.right);
    if (minLeft === 0 || minRight === 0) {
        return minLeft + minRight + 1;
    }
    return Math.min(minLeft, minRight) + 1;
};
// @lc code=end

