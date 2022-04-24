/*
 * @lc app=leetcode.cn id=236 lang=javascript
 *
 * [236] 二叉树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
// 方案一：递归法
// 优势点1：并没有比较 val，直接进行节点比较
// 优势点2：当前函数就是递归函数本身，无需再用个函数包围
var lowestCommonAncestor = function(root, p, q) {
    if (root === null || root === p || root ===q) {
        return root;
    }
    // 左子树中是否含有 p，q 节点
    const left = lowestCommonAncestor(root.left, p, q);
    // 右子树中是否含有 p，q 节点
    const right = lowestCommonAncestor(root.right, p, q);
    // 左子树中没有的话就去右子树中找
    // if (left === null) {
    //     return right;
    // }
    // 右子树中没有的话就去左子树中找
    // if (right === null) {
    //     return left;
    // }
    // 两个子树中都有的话，就是 root 为公共节点
    // return root;

    // 上面代码可以简写为：
    return left === null ? right : right === null ? left : root;
};

// 方案二：路径法，低阶不看
