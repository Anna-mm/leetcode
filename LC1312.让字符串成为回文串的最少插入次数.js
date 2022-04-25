/*
 * @lc app=leetcode.cn id=1312 lang=javascript
 *
 * [1312] 让字符串成为回文串的最少插入次数
 */
// 题解：和 LC 516 几乎是一样的，只是 dp[i][i] 的初值不一样。每次计算的 delta 不一样

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
 var minInsertions = function(s) {
    // 左下到右上，保证计算dp[i][j]时，dp[i + 1][j]、dp[i][j - 1]均已计算过
    let n = s.length;
    let dp = new Array(n).fill(0).map(() => new Array(n).fill(0));
    for(let i = n - 1; i >= 0; i--) {
        for(let j = i + 1; j < n; j++){
            if(s[i] === s[j]) {
                dp[i][j] = dp[i + 1][j - 1];
            } else {
                dp[i][j] = Math.min(dp[i][j - 1], dp[i + 1][j]) + 1;
            }
        }
    }
    return dp[0][n - 1];
};
// @lc code=end

