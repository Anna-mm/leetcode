// 假设你正在爬楼梯。需要 n 阶你才能到达楼顶。

// 每次你可以爬 1 或 2 个台阶。你有多少种不同的方法可以爬到楼顶呢？

// 示例 1：

// 输入：n = 2
// 输出：2
// 解释：有两种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶
// 2. 2 阶
// 示例 2：

// 输入：n = 3
// 输出：3
// 解释：有三种方法可以爬到楼顶。
// 1. 1 阶 + 1 阶 + 1 阶
// 2. 1 阶 + 2 阶
// 3. 2 阶 + 1 阶

// 边界条件：
// 从第 0 级爬到第 0 级我们可以看作只有一种方案:f(0)=1. 这里比较搞笑的是可以原地跳，哈哈哈
// 从第 0 级到第 1 级也只有一种方案，即爬一级: f(1)=1

var climbStairs = function(n) {
    const fibArray = [];
    fibArray[0] = 1;
    fibArray[1] = 1;
    for (let i = 2; i <= n; i++) {
        fibArray[i] = fibArray[i-1] + fibArray[i-2];
    }
    return fibArray[n];
};

// 由于这里的 f(x) 只和 f(x−1) 与 f(x−2) 有关，就不需要记录那么多了。
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    // 后面的循环是从 i = 2 开始的，所以这里先返回一些边界情况。
    if (n === 0 || n ===1 ) {return 1;}

    // 类似斐波那契数列的 fibArray[0]
    let p = 1;
    // 类似斐波那契数列的 fibArray[1]
    let q = 1;
    // 求和
    let r;
    for (let i = 2; i <= n; i++) {
        r = p + q;
        p = q;
        q = r;
    }
    return r;
};

