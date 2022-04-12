// 给你一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？请你找出所有和为 0 且不重复的三元组。

// 注意：答案中不可以包含重复的三元组。

// 示例 1：
// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]

// 示例 2：
// 输入：nums = []
// 输出：[]
// 示例 3：

// 输入：nums = [0]
// 输出：[]

// 我开始想的方案就是把符合条件的三元组存储起来，最后再去重，非常费时，而且容易超时。去重的过程不好处理。
// 用双指针的解法更好些，看看下面代码很巧妙。

var threeSum = function(nums) {
    const len = nums.length;
    if(len < 3) return [];
    nums = nums.sort((a, b) => a - b);
    const res = [];

    // e.g. [-4, -3, -2, -1, -1, 0, 0, 1, 2, 3, 4]
    for(let i = 0; i < len - 2; i++) {
        // a 去重
        if(nums[i] === nums[i - 1]) continue;
        let l = i + 1, r = len - 1;
        while(l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if(sum < 0) { l++; continue };
            if(sum > 0) { r--; continue };
            res.push([nums[i], nums[l], nums[r]])
            // b c 去重
            while(l < r && nums[l] === nums[++l]);
            while(l < r && nums[r] === nums[--r]);
        }
    }
    return res;
};