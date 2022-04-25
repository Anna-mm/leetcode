// 给你一个二叉树的根节点 root ， 检查它是否轴对称。
// https://leetcode-cn.com/problems/symmetric-tree/

// 输入：root = [1,2,2,3,4,4,3]
// 输出：true

// 输入：root = [1,2,2,null,3,null,3]
// 输出：false

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
// 方案一：广度优先遍历
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isSymmetric = function(root) {
    // 广度优先遍历（层级遍历）
    // 验证每个层级数值是否首尾相同
    const visited = [root];

    while (visited.length) {
        const currLevel = [];
        const currLength = visited.length;
        for(let i = 0; i < currLength; i++) {
            const currNode = visited.shift();
            currLevel.push(currNode ? currNode.val : null);

            if (currNode) {
                visited.push(currNode.left);
                visited.push(currNode.right);
            }
        }

        // 验证数组是否首尾相同
        for (let head = 0, tail = currLevel.length - 1; head < currLevel.length, tail >= 0; head++, tail--) {
            if (currLevel[head] !== currLevel[tail]) {
                return false;
            }
        }
    }
    return true;
};

// 方案二：递归
// 如果同时满足下面的条件，两个树互为镜像：
// - 它们的两个根结点具有相同的值
// - 每个树的右子树都与另一个树的左子树镜像对称

const check = (p, q) => {
    if (!p && !q) return true;
    if (!p || !q) return false;
    return p.val === q.val && check(p.left, q.right) && check(p.right, q.left);
}
var isSymmetric = function(root) {
    return check(root, root);
};

