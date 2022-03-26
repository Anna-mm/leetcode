// 统计一个数字在排序数组中出现的次数。

// 示例 1:

// 输入: nums = [5,7,7,8,8,10], target = 8
// 输出: 2
// 示例 2:

// 输入: nums = [5,7,7,8,8,10], target = 6
// 输出: 0

/**
 *****************************
 * 思路及算法
 * 直观的思路肯定是从前往后遍历一遍。用两个变量记录第一次和最后一次遇见 target 的下标，
 * 但这个方法的时间复杂度为 O(n)O(n)，没有利用到数组升序排列的条件。
 * 整个数组是单调递增的，我们可以利用二分法来加速查找的过程。
 *
 * 考虑 target 在数组中出现的次数，其实我们要找的就是数组中「第一个等于 target 的位置」（记为 leftIdx）
 * 和「第一个大于 target 的位置减一」（记为 rightIdx）。当 target 在数组中存在时，target 在数组中出现的次数为 rightIdx − leftIdx + 1。
 *
 * 为了代码的复用，我们定义 binarySearch(nums, target, lower) 表示在 nums 数组中二分查找 target 的位置，
 * 如果 lower 为 true，则查找第一个大于等于 target 的下标，否则查找第一个大于 target 的下标。
 *
 * 最后，因为 target 可能不存在数组中，因此我们需要重新校验我们得到的两个下标 leftIdx 和 rightIdx，看是否符合条件，
 * 如果符合条件就返回 rightIdx − leftIdx + 1，不符合就返回 00。
 *****************************
 */

 const binarySearch = (nums, target, lower) => {
    let left = 0, right = nums.length - 1, ans = nums.length;
    while (left <= right) {
        // 寻找中间点
        const mid = Math.floor((left + right) / 2);
        // 有两种情况一定要往前找
        // - 中间点比目标值大，一定往前找
        // - 中间点比目标值大于等于 && 是在找第一个位置。
        // 否则就向右找
        if (nums[mid] > target || (lower && nums[mid] >= target)) {
            right = mid - 1;
            ans = mid;
        } else {
            left = mid + 1;
        }
    }
    return ans;
}

var search = function(nums, target) {
    let ans = 0;
    // 第一个等于 target 的位置
    const leftIdx = binarySearch(nums, target, true);
    // 第一个大于 target 的位置减一
    const rightIdx = binarySearch(nums, target, false) - 1;
    // 注意判断是否存在 target
    if (leftIdx <= rightIdx && rightIdx < nums.length && nums[leftIdx] === target && nums[rightIdx] === target) {
        ans = rightIdx - leftIdx + 1;
    }
    return ans;
};
