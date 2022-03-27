// ; 土豪招聘贴身保镖，为提高吸引力，设置了特殊的工资计划。第一天，保镖只能够得到100元的报酬；随后的两天中，每天会得到200元报酬；随后的三天中，每天会得到300元报酬……后续以此类推。
// ; 请你帮忙编写一个程序，在给定天数内能够得到多少报酬。
// ; 输入：天数；输出：累计报酬

// 构造出天数-报酬 map
// [ 1 ] => 100,
// [ 2, 3 ] => 200,
// [ 4, 5, 6 ] => 300,
// [ 7, 8, 9, 10 ] => 400
function buildPayMap(day) {
    const payMap = new Map();
    let prevValue = 1;

    for (let i = 1; i <= day; i++) {
        let dayKey = [];
        let counter = i;
        while (counter--) {
            dayKey.push(prevValue++);
        }
        console.log(dayKey);
        payMap.set(dayKey, i * 100);
    }
    return payMap;
}

// 获取某一天的报酬
function getPayForSomeDay(day) {
    for (const [key, value] of payMap) {
        if (key.includes(day)) {
            return value;
        }
    }
};

// 获取总报酬
function summarize(day) {
    let sum = 0;
    for(let i = 1; i <= day; i++) {
        sum += getPayForSomeDay(i);
    }
    return sum;
}

const input = 6;
const payMap = buildPayMap(input);
const output = summarize(input);
console.log('报酬总和', output);
