// 给你一个字符串 s ，找出其中最长的回文子序列，并返回该序列的长度。

// 子序列定义为：不改变剩余字符顺序的情况下，删除某些字符或者不删除任何字符形成的一个序列。

// 输入：s = "bbbab"
// 输出：4
// 解释：一个可能的最长回文子序列为 "bbbb" 。

// 输入：s = "cbbd"
// 输出：2
// 解释：一个可能的最长回文子序列为 "bb" 。

// 题解
// 对于一个子序列而言，如果它是回文子序列，并且长度大于 22，那么将它首尾的两个字符去除之后，它仍然是个回文子序列。
// 因此可以用动态规划的方法计算给定字符串的最长回文子序列。
// 状态定义：用 dp[i][j] 表示字符串 s 的下标范围 [i, j] 内的最长回文子序列的长度
// 任何长度为 1 的子序列都是回文子序列: dp[i][i]=1
// 状态转移方程：
// - 如果 s[i] = s[j]: dp[i][j] = dp[i+1][j-1] + 2
// - 如果 s[i] != s[j]: dp[i][j] = max(dp[i+1][j], dp[i][j-1])

// 由于状态转移方程都是从长度较短的子序列向长度较长的子序列转移，因此需要注意动态规划的循环顺序。



/**
 * @param {string} s
 * @return {number}
 */
 var longestPalindromeSubseq = function(s) {
    const n = s.length;
    const dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    // i 从字符串尾部向头部走
    // j 从字符串 i 的位置开始向尾部走
    // 主要是为了要用到 i+1， j-1
    for (let i = n - 1; i >= 0; i--) {
        dp[i][i] = 1;
        for (let j = i + 1; j < n; j++) {
            if (s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1] + 2;
            } else {
                dp[i][j] = Math.max(dp[i][j - 1], dp[i + 1][j]);
            }
        }
    }
    return dp[0][n - 1];
};
