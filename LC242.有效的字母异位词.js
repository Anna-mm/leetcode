// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

// 示例 1:

// 输入: s = "anagram", t = "nagaram"
// 输出: true
// 示例 2:

// 输入: s = "rat", t = "car"
// 输出: false

// 思路1：利用 map 结构
// 思路2：更简单，利用排序
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map1 = new Map();
    const map2 = new Map();
    for(const str of s) {
        map1.set(str, map1.has(str) ? map1.get(str) + 1 : 1);
    }
    for(const str of t) {
        map2.set(str, map2.has(str) ? map2.get(str) + 1 : 1);
    }
    return isSameMap(map1, map2);
};

// 判断两个 map 是否相等的最佳方式
function isSameMap(map1, map2) {
    if (map1.size !== map2.size) {
        return false;
    }
    for(const [key, value] of map1) {
        if (map2.get(key) !== value) {
            return false;
        }
    }
    return true;
}

// 这个不行，会导致：angrm31111 和 nagrm13111 不相等，实际上应该相等。
function isSameMap1(map1, map2) {
    return [...map1.keys(), ...map1.values()].join('') === [...map2.keys(), ...map2.values()].join('')
}

var isAnagram2 = function(s, t) {
    return s.length == t.length
        && [...s].sort().join('') === [...t].sort().join('')
};
