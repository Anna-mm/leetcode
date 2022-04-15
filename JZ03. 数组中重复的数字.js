
// 找出数组中重复的数字。
// 在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

// 示例 1：

// 输入：
// [2, 3, 1, 0, 2, 5, 3]
// 输出：2 或 3

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findRepeatNumber = function(nums) {
    // 方案一：使用 set 结构找到去重后的值，然后从原始数组中把去重后的值删掉，剩下的数组随机返回一个即可。
    // const unique = new Set(nums);
    // for(const uni of unique) {
    //     nums.splice(nums.indexOf(uni), 1);
    // }
    // return nums[Math.floor(Math.random() * nums.length)];

    // 方案二：先排序然后相邻数据找到一个重复的即可
    // let duplicateNumber;
    // const sortedNums = nums.sort();
    // for (let i = 0; i < sortedNums.length; i++) {
    //     if (sortedNums[i] === sortedNums[i+1]) {
    //         duplicateNumber = sortedNums[i];
    //         break;
    //     }
    // }
    // return duplicateNumber;

    // 方案三：放置个新的数组，每放进去一个元素比较一下，如果没有就放进去，如果已经有了就是重复的，就 break
    const newNums = [];
    let duplicateNumber;
    for (const num of nums) {
        if (newNums.indexOf(num) === -1) {
            newNums.push(num);
        }
        else{
            duplicateNumber = num;
            break;
        }
    }
    return duplicateNumber;
};