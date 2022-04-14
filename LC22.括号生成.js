// 回溯 + 剪枝

// 数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

// 示例 1：

// 输入：n = 3
// 输出：["((()))","(()())","(())()","()(())","()()()"]
// 示例 2：

// 输入：n = 1
// 输出：["()"]

/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
    const list = [];
    _gen(list, '', 0, 0, n);
    return list;
};

/**
 * 递归
 * @param {*} list 最终返回值
 * @param {*} result 每条符合条件的记录
 * @param {*} left 已经使用的左括号数
 * @param {*} right 已经使用的右括号数
 * @param {*} n 括号对数
 */
function _gen(list, result, left, right, n) {
    console.log(`result=${result}, left=${left}, right=${right}`)
    // 递归结束条件
    if (left === n && right === n) {
        list.push(result);
    }
    if (left < n) {
        _gen(list, result + '(', left + 1, right, n);
    }
    if (right < left && right < n) {
        _gen(list, result + ')', left, right + 1, n);
    }
}

// 代码逻辑很简单，但是这里执行逻辑是个什么遍历，是我万万没有想到的。这里涉及到是剪枝。
// result=, left=0, right=0
// result=(, left=1, right=0
// result=((, left=2, right=0
// result=(((, left=3, right=0
// result=(((), left=3, right=1
// result=((()), left=3, right=2
// result=((())), left=3, right=3
// result=((), left=2, right=1
// result=(()(, left=3, right=1
// result=(()(), left=3, right=2
// result=(()()), left=3, right=3
// result=(()), left=2, right=2
// result=(())(, left=3, right=2
// result=(())(), left=3, right=3
// result=(), left=1, right=1
// result=()(, left=2, right=1
// result=()((, left=3, right=1
// result=()((), left=3, right=2
// result=()(()), left=3, right=3
// result=()(), left=2, right=2
// result=()()(, left=3, right=2
// result=()()(), left=3, right=3


