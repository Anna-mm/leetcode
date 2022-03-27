// https://leetcode-cn.com/problems/longest-palindromic-substring/
// 给你一个字符串 s，找到 s 中最长的回文子串。
// 示例 1：

// 输入：s = "babad"
// 输出："bab"
// 解释："aba" 同样是符合题意的答案。
// 示例 2：

// 输入：s = "cbbd"
// 输出："bb"


// 用动态规划求解：
// 状态定义：dp[i][j] 表示子串是否是回文串
// 状态转移方程：dp[i][j] = s[i] === s[j] and dp[i+1][j-1]
// 初始值：dp[i][i] = true

// 有些前置知识得了解
// - 所有长度为 1 的子串都是回文串, 'a' 是回文子串
// - 长度为 2 的子串可能是可能不是回文串， 'ab'不是，'aa' 是
// - 长度为 3、4 的子串：'abba','aba' 是回文串

// 只看这个思路就可以了：
// 先从子串长度 2 开始遍历，起始点从 0 开始遍历
// 确定右边界，右边界溢出退出循环
// 左右边界所在字符不相等，设置 dp[i][j] = false
// 左右边界所在字符相等
    // - 两者相差 < 3 时直接 dp[i][j] = true。'aba', 'aa'
    // - 两者相差不 < 3 时直接 dp[i][j] = dp[i + 1][j - 1];

// 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置

/**
 * @param {string} s
 * @return {string}
 */
 var longestPalindrome = function(str) {
    const length = str.length;
    if (length < 2) {
        return str
    }

    let maxlen = 1;
    let begin = 0;
    // dp[i][j] 表示 s[i..j] 是否是回文串
    const dp = Array(length).fill().map(() => Array(length).fill(false));
    // 初始化：所有长度为 1 的子串都是回文串
    // 这一丢不要也可以
    // for (let i = 0; i < length; i++) {
    //     dp[i][i] = true;
    // }
    // # 递推开始
    // # 先枚举子串长度
    for (let L = 2; L <= length; L++) {
        // # 枚举左边界，左边界的上限设置可以宽松一些
        for (let i = 0; i < length; i++) {
            // # 由 L 和 i 可以确定右边界，即 j - i + 1 = L 得
            j = L + i - 1
            // # 如果右边界越界，就可以退出当前循环
            if (j >= length) break;
            if (str[i] != str[j]) {
                dp[i][j] = false;
            }
            else {
                if (j - i < 3) {
                    dp[i][j] = true;
                }
                else {
                    dp[i][j] = dp[i + 1][j - 1];
                }
            }

            // # 只要 dp[i][j] == true 成立，就表示子串 s[i..j] 是回文，此时记录回文长度和起始位置
            if (dp[i][j] && (j - i + 1 > maxlen)) {
                maxlen = j - i + 1;
                begin = i;
            }
        }
    }
    return str.substring(begin, begin + maxlen);
};

// 判断给定字符串是否是回文串
// 'abcba' 是回文子串
// 'abccba' 是回文子串
// 'a' 是回文子串
// !!!!! 单个字符一定是回文串
// 'ab' 不是回文子串
function IsPalindromicString(str) {
    let length = str.length;
    let left = 0;
    let right = length - 1;

    while (left < right) {
        if (str[left] === str[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
}

console.log(IsPalindromicString('a'));

// @lc code=end

