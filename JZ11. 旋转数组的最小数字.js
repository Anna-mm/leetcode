// 把一个数组最开始的若干个元素搬到数组的末尾，我们称之为数组的旋转。

// 给你一个可能存在 重复 元素值的数组 numbers ，它原来是一个升序排列的数组，并按上述情形进行了一次旋转。请返回旋转数组的最小元素。例如，数组 [3,4,5,1,2] 为 [1,2,3,4,5] 的一次旋转，该数组的最小值为1。  

// 示例 1：

// 输入：[3,4,5,1,2]
// 输出：1
// 示例 2：

// 输入：[2,2,2,0,1]
// 输出：0

/**
 * @param {number[]} numbers
 * @return {number}
 */
// 方案1：我猜测平均时间复杂度为 O(n)
var minArray = function(numbers) {
    // 方案1：找到第一个非单调递增的元素
    for(let i = 0; i < numbers.length; i++) {
        if (numbers[i + 1] < numbers[i]) {
            return numbers[i + 1];
        }
    }
    // 没找到的话就返回第一个元素
    return numbers[0];
};

// 方案2：二分查找
// var minArray = function(numbers) {
//     let low = 0;
//     let high = numbers.length - 1;
//     while (low < high) {
//         const pivot = low + Math.floor((high - low) / 2);
//         if (numbers[pivot] < numbers[high]) {
//             high = pivot;
//         } else if (numbers[pivot] > numbers[high]) {
//             low = pivot + 1;
//         } else {
//             high -= 1;
//         }
//     }
//     return numbers[low];
// };

// 时间复杂度：平均时间复杂度为 O(logn)，其中 n 是数组 numbers 的长度。如果数组是随机生成的，那么数组中包含相同元素的概率很低，在二分查找的过程中，大部分情况都会忽略一半的区间。而在最坏情况下，如果数组中的元素完全相同，那么 while 循环就需要执行 n 次，每次忽略区间的右端点，时间复杂度为 O(n)。

// 空间复杂度：O(1)