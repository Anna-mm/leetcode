// 写一个函数，输入 n ，求斐波那契（Fibonacci）数列的第 n 项（即 F(N)）。斐波那契数列的定义如下：

// F(0) = 0,   F(1) = 1
// F(N) = F(N - 1) + F(N - 2), 其中 N > 1.
// 斐波那契数列由 0 和 1 开始，之后的斐波那契数就是由之前的两数相加而得出。
// {0,1,1,2,3,5,8,13,21,34,55,89,144,233,377,610,987,1597,2584,4181,6765,10946,17711,28657,46368,75025,121393,196418,317811,514229,832040,1346269,2178309,3524578,5702887,9227465,14930352,24157817,39088169,63245986,102334155,165580141,267914296,433494437,701408733,134903163,836311896,971215059,807526948,778742000,586268941,365010934,951279875,316290802,267570670,583861472,851432142,435293607,286725742,722019349,8745084,730764433,739509517,470273943,209783453,680057396,889840849,569898238,459739080,29637311,489376391,519013702,8390086,527403788,535793874,63197655,598991529,662189184,261180706,923369890,184550589,107920472,292471061,400391533,692862594,93254120,786116714,879370834,665487541,544858368,210345902,755204270,965550172,720754435,686304600,407059028,93363621,500422649,593786270,94208912,687995182}

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
// *****这个题考点要在计算时就取余****
// *****为什么要取模：返回值是int类型 不取模就溢出了*****

// 方案0：递归：时间复杂度是 2^n ，代码超时，存在大量重复计算（我觉得需要记忆）。
// 是不是觉得斐波那契数列很简单。"超时时间限制"，时间复杂度根本就不符合要求!!!!!!!!!
/**
 * @param {number} n
 * @return {number}
 */
var fib0 = function(n) {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2);
};

// 方案一：把递归变成循环求解，利用数组来存储，可以叫记忆化递归。这会导致空间复杂度为 O(n)
// 可以继续升级为方案二：用两个临时变量来保存，就把空间复杂度降低为 O(1)。
// 时间复杂度：O(n)
// 空间复杂度：O(n)
var fib1 = function(n) {
    const MOD = 1000000007;
    if (n < 2) {
        return n;
    }
    const fibArray = [];
    fibArray[0] = 0;
    fibArray[1] = 1;
    for (let i = 2; i <= n; i++) {
        fibArray[i] = (fibArray[i-1] + fibArray[i-2]) % MOD;
    }
    return fibArray[n];
};

// 方案二：官方说这是一个动态规划，动态规划的两个重点是状态定义、状态转移方程。但是我觉得可以不用理解为动态规划，没那么玄乎。
// 边界条件为 F(0) 和 F(1)。
// 状态转移方程即为上述递推关系: F(n)=F(n−1)+F(n−2)
// 时间复杂度：O(n)
// 空间复杂度：O(1)

var fib2 = function(n) {
    const MOD = 1000000007;
    if (n < 2) {
        return n;
    }
    let left = 0, right = 1, res = 1;
    for (let i = 2; i <= n; i++) {
        // 先求和
        res = (left + right) % MOD;
        // 再移动指针
        left = right;
        right = res;
    }
    return res;
};