// 暴力求解法：两层循环，找出给定数组中两个数字之间的最大差值
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)。只使用了常数个变量。
var maxProfit = function(prices) {
    let maxprofit = 0;
    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            const profit = prices[j] - prices[i];
            if (profit > maxprofit) {
                maxprofit = profit;
            }
        }
    }
    return maxprofit;
};

// 方法二：一次遍历或者叫动态规划
// 状态定义： 设动态规划列表 dp ，dp[i] 代表以 prices[i] 为结尾的子数组的最大利润
// 状态转移方程：dp[i] = max(dp[i−1], prices[i]−min(prices[0:i]))
// 优化后的状体转移方程：profit=max(profit, prices[i]−min(cost,prices[i])

// 遍历价格数组一遍，记录历史最低点，然后在每一天考虑这么一个问题：
// 如果我是在历史最低点买进的，那么我今天卖出能赚多少钱？当考虑完所有天数之时，我们就得到了最好的答案。

// 我觉得可以用动态规划的思路来考虑，也可以不用。

// 复杂度分析
// 时间复杂度：O(n)，只需要遍历一次。
// 空间复杂度：O(1)，只使用了常数个变量。

var maxProfit = function(prices) {
    let cost = Number.MAX_VALUE;
    let profit = 0;
    for (const price of prices) {
        // 找到最低价格
        cost = Math.min(price, cost);
        // 找到最大收益
        profit = Math.max(profit, price - cost);
    }
    return profit;
};