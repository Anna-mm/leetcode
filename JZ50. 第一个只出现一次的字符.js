// 在字符串 s 中找出第一个只出现一次的字符。如果没有，返回一个单空格。 s 只包含小写字母。

// 示例 1:
// 输入：s = "abaccdeff"
// 输出：'b'

// 示例 2:

// 输入：s = ""
// 输出：' '

/**
 * @param {string} s
 * @return {character}
 */
// 方案一使用现成的 lodash 的 countBy 方法
// 返回每个字母的出现频率：{"a": 4, "b": 3, "c": 1, "d": 1}
// 遍历字符串数组，返回第一个频率为 1 的字符。
var firstUniqChar1 = function(s) {
    const frequency = _.countBy(s);
    for (const value of Array.from(s).entries()) {
        if (frequency[value] === 1) {
            return value;
        }
    }
    return ' ';
};
// 时间复杂度 O(N) ： N 为字符串 s 的长度；需遍历 s 两轮，使用 O(N) ；HashMap 查找操作的复杂度为 O(1) ；
// 空间复杂度 O(1) ： 由于题目指出 s 只包含小写字母，因此最多有 26 个不同字符，HashMap 存储需占用 O(26) = O(1) 的额外空间。

// 方案二：使用哈希表存储索引
// 间接证明 map 是保证顺序的
var firstUniqChar = function(s) {
    const position = new Map();
    const n = s.length;
    // 哈希表：键表示一个字符，值表示它的首次出现的索引（如果该字符只出现一次）或者 -1（如果该字符出现多次）。
    for (let [index, value] of Array.from(s).entries()) {
        if (position.has(value)) {
            position.set(value, -1);
        } else {
            position.set(value, index);
        }
    }
    // 再遍历一次哈希找出其中不为 -1的最小值，然后返回该索引对应的字符。如果哈希映射中的所有值均为 -1 就返回空格。
    let first = n;
    for (let pos of position.values()) {
        if (pos !== -1 && pos < first) {
            first = pos;
        }
    }
    return first == n ? ' ' : s[first];
};

// 时间复杂度：O(n)，其中 n 是字符串 s 的长度。第一次遍历字符串的时间复杂度为 O(n)，第二次遍历哈希映射的时间复杂度为 O(∣Σ∣)，由于 s 包含的字符种类数一定小于 s 的长度，因此 O(∣Σ∣) 在渐进意义下小于 O(n)，可以忽略。
// 空间复杂度：O(∣Σ∣)，其中 Σ 是字符集，在本题中 s 只包含小写字母，因此 |Σ∣≤26。我们需要 O(∣Σ∣) 的空间存储哈希映射。
