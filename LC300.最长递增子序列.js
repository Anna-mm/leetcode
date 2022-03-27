// https://leetcode-cn.com/problems/longest-increasing-subsequence/comments/
// 给你一个整数数组 nums ，找到其中最长严格递增子序列的长度。

// 子序列 是由数组派生而来的序列，删除（或不删除）数组中的元素而不改变其余元素的顺序。例如，[3,6,2,7] 是数组 [0,3,1,6,2,2,7] 的子序列。

//  
// 示例 1：

// 输入：nums = [10,9,2,5,3,7,101,18]
// 输出：4
// 解释：最长递增子序列是 [2,3,7,101]，因此长度为 4 。
// 示例 2：

// 输入：nums = [0,1,0,3,2,3]
// 输出：4
// 示例 3：

// 输入：nums = [7,7,7,7,7,7,7]
// 输出：1

// 动态规划
// 状态定义：定义 dp[i] 为考虑前 i 个元素，以第 i 个数字结尾的最长上升子序列的长度，注意 nums[i] 必须被选取。
// 状态转移方程：考虑每轮计算新 dp[i] 时，遍历 [0,i) 列表区间，做以下判断
//     当 nums[i] > nums[j] 时： nums[i] 可以接在 nums[j] 之后, 此情况下最长上升子序列长度为 dp[j] + 1dp[j]+1 ；
//     当 nums[i] <= nums[j] 时： nums[i] 无法接在 nums[j] 之后，此情况上升子序列不成立，跳过。
// 状态转移方程： dp[i] = max(dp[i], dp[j] + 1)
/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    if (nums.length == 0) {
        return 0;
    }
    const dp = new Array(nums.length).fill(1);
    let output = 1;
    for (let i = 1; i < nums.length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
        output = Math.max(output, dp[i]);
    }
    return output;
};

