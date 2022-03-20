// 请实现一个函数，把字符串 s 中的每个空格替换成"%20"。

// 示例 1：

// 输入：s = "We are happy."
// 输出："We%20are%20happy."

/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
    // 方案一 replaceAll
    // return s.replaceAll(' ', "%20");
    // 方案二 正则
    // return s.replace(/\s/g, "%20");
    // 方案三 split
    // return s.split(' ').join('%20');
    // 方案三 遍历
    for (let i = 0; i < s.length; i++) {
        const letter = s[i];
        if (letter === ' ') {
            s = s.substring(0, i) + '%20' + s.substring(i + 1, s.length);
        }
    }
    return s;
};