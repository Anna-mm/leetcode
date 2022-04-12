// 我说：涉及到计数，要想到的结构是 map。

// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 示例 1：

// 输入：[3,2,3]
// 输出：3
// 示例 2：

// 输入：[2,2,1,1,1,2,2]
// 输出：2

/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
    const len = nums.length / 2;
    const counterMap = new Map();

    for (let num of nums) {
        counterMap.set(num, counterMap.has(num) ? counterMap.get(num) + 1 : 1);
    }
    for (let [key, value] of counterMap) {
        if (value > len) {
            return key;
        }
    }
};