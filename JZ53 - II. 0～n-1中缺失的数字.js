// 一个长度为n-1的递增排序数组中的所有数字都是唯一的，并且每个数字都在范围0～n-1之内。在范围0～n-1内的n个数字中有且只有一个数字不在该数组中，请找出这个数字。

// 示例 1:

// 输入: [0,1,3]
// 输出: 2
// 示例 2:

// 输入: [0,1,2,3,4,5,6,7,9]
// 输出: 8

/**
 * @param {number[]} nums
 * @return {number}
 */
 var missingNumber = function(nums) {
    // 处理左边界情况
    if (nums[0] !== 0) {
        return 0;
    }
    // 向后累加，如果下一个不等于当前的+1，就是缺失当前的+1
    for(let i = 0; i < nums.length; i++) {
        if (nums[i + 1] !== nums[i] + 1) {
            return nums[i] + 1;
        }
    }
};