/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
    if (n === 0) {return 1}
    return n > 0 ? quickMul2(x, n) : 1.0 / quickMul2(x, -n);
};

// 方案一：暴力求解法，超时时间限制
function quickMul1(x, n) {
    let result = x;
    let step = x;

    while(--n) {
        result = result * step;
        console.log(result);
    }
    return result;
}

// 方案二：折半循环（我说的）
function quickMul2(x, n) {
    let result = 1.0;
    // 贡献的初始值为 x
    let step = x;
    while (n > 0) {
        // n 为奇数，需要额外乘以一个 step
        if (n % 2 == 1) {
            result *= step;
        }
        // n 为偶数，step = step * step
        step *= step;
        // n 折半
        n = Math.floor(n / 2);
    }
    return result;
}