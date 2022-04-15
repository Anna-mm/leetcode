//  青蛙跳台阶也是斐波那契数列

// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

// 示例 1：

// 输入：n = 2
// 输出：2
// 示例 2：

// 输入：n = 7
// 输出：21
// 示例 3：

// 输入：n = 0
// 输出：1

/**
 * @param {number} n
 * @return {number}
 */
 var numWays = function(n) {
    // 状态定义:dp[i] = 青蛙跳上第 i 级台阶共有多少种跳法
    // 状态转移方程：dp[i] = dp[i - 1] + dp[i - 2]
    // 转化为斐波那契数列

    // ！！！青蛙可以原地跳，真是没想到
    if (n === 0) {
        return 1;
    }
    if (n < 2) {
        return n;
    }
    const MOD = 1000000007;
    let left = 1;
    let right = 1;
    let res = 1;
    for (let i = 2; i <= n; i++) {
        res = (left + right) % MOD;
        left = right;
        right = res;
    }
    return res;
};