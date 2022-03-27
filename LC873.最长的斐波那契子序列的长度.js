// https://leetcode-cn.com/problems/length-of-longest-fibonacci-subsequence/comments/

// 果序列 X_1, X_2, ..., X_n 满足下列条件，就说它是 斐波那契式 的：

// n >= 3
// 对于所有 i + 2 <= n，都有 X_i + X_{i+1} = X_{i+2}
// 给定一个严格递增的正整数数组形成序列 arr ，找到 arr 中最长的斐波那契式的子序列的长度。如果一个不存在，返回  0 。

// （回想一下，子序列是从原序列 arr 中派生出来的，它从 arr 中删掉任意数量的元素（也可以不删），而不改变其余元素的顺序。例如， [3, 5, 8] 是 [3, 4, 5, 6, 7, 8] 的一个子序列）

// 示例 1：

// 输入: arr = [1,2,3,4,5,6,7,8]
// 输出: 5
// 解释: 最长的斐波那契式子序列为 [1,2,3,5,8] 。

// 示例 2：

// 输入: arr = [1,3,7,11,12,14,18]
// 输出: 3
// 解释: 最长的斐波那契式子序列有 [1,11,12]、[3,11,14] 以及 [7,11,18] 。

// 思路
// 将斐波那契式的子序列中的两个连续项 A[i], A[j] 视为单个结点 (i, j)，整个子序列是这些连续结点之间的路径。
// 例如，对于斐波那契式的子序列 (A[1] = 2, A[2] = 3, A[4] = 5, A[7] = 8, A[10] = 13)，结点之间的路径为 (1, 2) <-> (2, 4) <-> (4, 7) <-> (7, 10)。
// 这样做的动机是，只有当 A[i] + A[j] == A[k] 时，两结点 (i, j) 和 (j, k) 才是连通的，我们需要这些信息才能知道这一连通。现在我们得到一个类似于 最长上升子序列 的问题。

// 算法
// 设 longest[i, j] 是结束在 [i, j] 的最长路径。那么 如果 (i, j) 和 (j, k) 是连通的， longest[j, k] = longest[i, j] + 1。
// 由于 i 由 A.index(A[k] - A[j]) 唯一确定，所以这是有效的：我们在 i 潜在时检查每组 j < k，并相应地更新 longest[j, k]。

// 时间复杂度：O(N^2)，其中 N 是 A 的长度。
// 空间复杂度：O(NlogM)，其中 M 是 A 中最大的元素。

/**
 * @param {number[]} arr
 * @return {number}
 */
 var lenLongestFibSubseq = function(arr) {
    const len = arr.length;

    const index = new Map();
    for (let i = 0; i < len; ++i) {
        index.set(arr[i], i);
    }

    // 时序顺序： i、j、k
    // longest{[j, k], cand) 是结束在 [j, k] 的最长路径
    const longest = new Map();
    let output = 0;

    for (let k = 0; k < len; ++k) {
        for (let j = 0; j < k; ++j) {
            let i = index.get(arr[k] - arr[j]);
            if (typeof i === 'undefined') {
                i = -1;
            }
            if (i >= 0 && i < j) {
                let cand = longest.get(i * len + j);
                if (typeof cand === 'undefined') {
                    cand = 2;
                }
                cand += 1;
                longest.set(j * len + k, cand);
                output = Math.max(output, cand);
            }
        }
    }
    return output >= 3 ? output : 0;
};
