// 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串 s ，判断字符串是否有效。

// 有效字符串需满足：

// 左括号必须用相同类型的右括号闭合。
// 左括号必须以正确的顺序闭合。

// 示例 1：

// 输入：s = "()"
// 输出：true
// 示例 2：

// 输入：s = "()[]{}"
// 输出：true
// 示例 3：

// 输入：s = "(]"
// 输出：false
// 示例 4：

// 输入：s = "([)]"
// 输出：false
// 示例 5：

// 输入：s = "{[]}"
// 输出：true
/**
 * @param {string} s
 * @return {boolean}
 */
 var isValid = function(s) {
    const stack = [];
    const map = new Map([
        ['}', '{'],
        [']', '['],
        [')', '(']
    ])

    for (let str of s) {
        // 如果是开始括号，就存到栈中。
        if (!map.has(str)) {
            stack.push(str);
        }
        // 如果是结束括号，栈中为空就是无效的。或者和栈的第一个元素对比下不匹配就是无效的。
        else if (!stack.length || stack.pop() !== map.get(str)) {
            return false;
        }
    }
    // 最终栈中为空就是有效的。
    return !stack.length;
};

// const readline = require('readline');
// const rl = readline.createInterface({
//    input: process.stdin,
//    output: process.stdout
// });
// rl.on('line', function(data){
//    console.log(data);
// })

// function isValid(str) {
//     const stack = [];
//     const allBracket = ['(', ')', '[', ']','{', '}'];
//     const someMap = new Map([
//         [')', '('],
//         [']', '['],
//         ['}', '{']
//     ]);
//     for (let i = 0; i < str.length; i++) {
//         const currChar = str[i];
//         if (allBracket.indexOf(currChar) === -1) {
//             continue;
//         }
//         if (someMap.has(currChar) && stack.length && stack.pop() !== someMap.get(currChar)) {
//             return false;
//         }
//     }
//     if (stack.length === 0) {
//         return true;
//     }
// }
// console.log("Hello World!");

