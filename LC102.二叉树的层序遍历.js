// 给你二叉树的根节点 root ，返回其节点值的 层序遍历 。 （即逐层地，从左到右访问所有节点）。
// https://leetcode-cn.com/problems/binary-tree-level-order-traversal/

// 输入：root = [3,9,20,null,null,15,7]
// 输出：[[3],[9,20],[15,7]]

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

// 方案：广度优先
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
 var levelOrder = function(root) {
    const res = [];
    if (root === null) {
        return res;
    }

    // 访问的节点存储
    const visited = [];
    visited.push(root);

    while(visited.length) {
        const levelRes = [];
        const levelLength = visited.length;

        // 每次遍历当前层级
        for(let i = 0; i < levelLength; i++) {
            const currNode = visited.shift();

            levelRes.push(currNode.val);
            if (currNode.left !== null) {
                visited.push(currNode.left);
            }
            if (currNode.right !== null) {
                visited.push(currNode.right);
            }
        }

        res.push(levelRes);
    }
    return res;
};