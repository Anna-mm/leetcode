// 最终没看懂: 循环里面用递归看不太懂

// 有效 IP 地址 正好由四个整数（每个整数位于 0 到 255 之间组成，且不能含有前导 0），整数之间用 '.' 分隔。

// 例如："0.1.2.201" 和 "192.168.1.1" 是 有效 IP 地址，但是 "0.011.255.245"、"192.168.1.312" 和 "192.168@1.1" 是 无效 IP 地址。
// 给定一个只包含数字的字符串 s ，用以表示一个 IP 地址，返回所有可能的有效 IP 地址，这些地址可以通过在 s 中插入 '.' 来形成。你 不能 重新排序或删除 s 中的任何数字。你可以按 任何 顺序返回答案。

// 示例 1：
// 输入：s = "25525511135"
// 输出：["255.255.11.135","255.255.111.35"]

// 示例 2：

// 输入：s = "0000"
// 输出：["0.0.0.0"]
// 示例 3：

// 输入：s = "101023"
// 输出：["1.0.10.23","1.0.102.3","10.1.0.23","10.10.2.3","101.0.2.3"]

// 解题思路

// 一个合法的 IP 地址必须为四段，即 x.x.x.x 的格式。
// 所以可以用一个 p 表示当前 IP 的段数，p == 4 为结束条件。
// 每当 p == 4 时，判断已经匹配的字符串长度是否和 s 的长度相等，如果相等则是正确答案。
// 每个段的第一个字符如果是 0，说明这段已经结束了。
// 如果 3 个字符串拼在一起大于 255，则必须放弃这段字符串。
// 通过以上 5 个条件，我们可以用递归来做。

var restoreIpAddresses = function(s) {
    const SEG_COUNT = 4;
    const segments = new Array(SEG_COUNT);
    const ans = [];

    const dfs = (s, segId, segStart) => {
        // 如果找到了 4 段 IP 地址并且遍历完了字符串，那么就是一种答案
        if (segId === SEG_COUNT) {
            if (segStart === s.length) {
                ans.push(segments.join('.'));
            }
            return;
        }

        // 如果还没有找到 4 段 IP 地址就已经遍历完了字符串，那么提前回溯
        if (segStart === s.length) {
            return;
        }

        // 由于不能有前导零，如果当前数字为 0，那么这一段 IP 地址只能为 0
        if (s.charAt(segStart) === '0') {
            segments[segId] = 0;
            dfs(s, segId + 1, segStart + 1);
        }

        // 一般情况，枚举每一种可能性并递归
        let addr = 0;
        for (let segEnd = segStart; segEnd < s.length; ++segEnd) {
            addr = addr * 10 + (s.charAt(segEnd) - '0');
            if (addr > 0 && addr <= 0xFF) {
                segments[segId] = addr;
                dfs(s, segId + 1, segEnd + 1);
            } else {
                break;
            }
        }
    }

    dfs(s, 0, 0);
    return ans;
};