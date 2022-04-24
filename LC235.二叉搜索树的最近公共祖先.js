/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 方案一：递归法, 相当于 LC 236 根据二叉搜索树进行简化
var lowestCommonAncestor = function(root, p, q) {
    if (root.val > p.val && root.val > q.val) {
        return lowestCommonAncestor(root.left, p, q);
    }
    if (root.val < p.val && root.val < q.val) {
        return lowestCommonAncestor(root.right, p, q);
    }
    return root;
};

// 方案一：递归变循环，这代码也太简洁了
var lowestCommonAncestor = function(root, p, q) {
    while(root) {
        if (root.val > p.val && root.val > q.val) {
            root = root.left;
        }
        else if (root.val < p.val && root.val < q.val) {
            root = root.right;
        }
        else {
            return root;
        }
    }
};
// @lc code=end

