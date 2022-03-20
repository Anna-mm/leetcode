// 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

//  

// 示例:

// 现有矩阵 matrix 如下：

// [
//   [1,   4,  7, 11, 15],
//   [2,   5,  8, 12, 19],
//   [3,   6,  9, 16, 22],
//   [10, 13, 14, 17, 24],
//   [18, 21, 23, 26, 30]
// ]
// 给定 target = 5，返回 true。

// 给定 target = 20，返回 false。

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// var findNumberIn2DArray = function(matrix, target) {
//     // 方案1：1. 二维数组打平，2. 利用 indexOf
//     let newArray = [];
//     matrix.forEach(item => {
//         newArray = newArray.concat(item);
//     })
//     return newArray.indexOf(target) !== -1;
// };

var findNumberIn2DArray = function(matrix, target) {
    // 方案2：从二维数组的右上角开始查找。如果当前元素等于目标值，则返回 true。如果当前元素大于目标值，则移到左边一列。如果当前元素小于目标值，则移到下边一行。
    const row = matrix.length;
    if (row === 0) {
        return false;
    }
    const col = matrix[0].length;
    let i = 0;
    let j = col - 1;
    while(i < row && j >=0) {
        if (matrix[i][j] > target) {
            // 第 j 列就可以消失了，往前面的列查找
            j--;
        }
        else if (matrix[i][j] < target) {
            // 第 i 行就可以消失了，往下面行查找
            i++
        }
        else {
            // 等于目标值
            return true;
        }
    }
    // 目标没找到
    return false;
};