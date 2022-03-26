/**
 * @param {number[][]} grid
 * @return {number}
 */
// 方案一：动态规划
// 状态定义： 设动态规划矩阵 dp ，dp(i,j) 代表从棋盘的左上角开始，到达单元格 (i,j) 时能拿到礼物的最大累计价值。
// 转移方程：
// - 当 i = 0 且 j = 0，为起始元素；
// - 当 i = 0 且 j 不等于 0，为矩阵第一行元素，只可从左边到达；
// - 当 i 不等于 0 且 j = 0 时，为矩阵第一列元素，只可从上边到达；
// - 当 i 不等于 0 且 j 不等于 0 时，可从左边或上边到达；

// 时间复杂度：O(mn)
// 空间复杂度：O(1)
var maxValue = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    for(let i = 0; i < row; i++) {
        for(let j = 0; j < col; j++) {
            if(i === 0 && j === 0) {
                continue;
            }
            // 第一行元素，只可从左边到达；
            else if(i === 0) {
                grid[i][j] += grid[i][j-1];
            }
            // 第一列元素，只可从上边到达；
            else if(j === 0) {
                grid[i][j] += grid[i-1][j];
            }
            else {
                grid[i][j] += Math.max(grid[i-1][j], grid[i][j-1]);
            }
        }
    }
    return grid[row-1][col-1];
};

// 方案二：动态规划
// 当 grid 矩阵很大时， i = 0 或 j = 0 的情况仅占极少数，相当循环每轮都冗余了一次判断。
// 因此，多开一行一列的空间能够让代码更简洁。
// 在方案一的基础上做优化，存储空间虽然增大了，但是代码简洁且边界问题好处理。

var maxValue2 = function(grid) {
    let row = grid.length;
    let col = grid[0].length;
    // 生成都是 0 的二维数组
    const dp = Array(row + 1).fill(Array(col + 1).fill(0));
    for(let i = 1; i <= row; i++) {
        for(let j = 1; j <= col; j++) {
            dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]) + grid[i - 1][j - 1];
        }
    }
    return dp[row][col];
};