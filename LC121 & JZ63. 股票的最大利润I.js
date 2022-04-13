// 买卖股票有一系列问题：区别在于：1. 是否持有 1/0 股 2. 可以买卖无数次
// 本题目就是持有 1 股，买卖 1 次。
// = LC 121

// 假设你有一个数组prices，长度为n，其中prices[i]是股票在第i天的价格，请根据这个价格数组，返回买卖股票能获得的最大收益
// 1.你可以买入一次股票和卖出一次股票，并非每天都可以买入或卖出一次，总共只能买入和卖出一次，且买入必须在卖出的前面的某一天
// 2.如果不能获取到任何利润，请返回0
// 3.假设买入卖出均无手续费

// 要求：空间复杂度 O(1)O(1)，时间复杂度 O(n)O(n)

// 示例1
// 输入：[8,9,2,5,4,7,1]

// 返回值： 5

// 说明：
// 在第3天(股票价格 = 2)的时候买入，在第6天(股票价格 = 7)的时候卖出，最大利润 = 7-2 = 5 ，不能选择在第2天买入，第3天卖出，这样就亏损7了；同时，你也不能在买入前卖出股票。

// 示例2
// 输入：[2,4,1]
// 返回值：2

// 示例3
// 输入：[3,2,1]
// 返回值：0

// 暴力求解法：两层循环，找出给定数组中两个数字之间的最大差值
// 时间复杂度：O(n^2)
// 空间复杂度：O(1)。只使用了常数个变量。
// 算法超时！！！！
var maxProfit = function(prices) {
    let maxprofit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
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