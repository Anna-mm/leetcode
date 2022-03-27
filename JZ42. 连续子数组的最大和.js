// 这是一个动态规划题
// 输入一个整型数组，数组中的一个或连续多个整数组成一个子数组。求所有子数组的和的最大值。
// 要求时间复杂度为O(n)。

// 示例1:
// 输入: nums = [-2,1,-3,4,-1,2,1,-5,4]
// 输出: 6
// 解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
    // pre: 以 nums[i] 结尾的和最大的连续子数组的和
    let pre = 0, res = nums[0];
    nums.forEach((x) => {
        pre = Math.max(pre + x, x);
        res = Math.max(res, pre);
    });
    return res;
};