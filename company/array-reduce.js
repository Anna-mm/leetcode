// 实现数组的 reduce
// 接收 2 个参数：一个 reducer、一个初始值

// reducer 接受 4 个参数：
// Accumulator 累计器
// Current Value 当前值
// Index 当前索引
// array 源数组

Array.prototype.myReduce = function(reducer, initialValue) {
    const hasInitial = arguments.length > 1;
    let currentValue = hasInitial ? initialValue : this[0];
    for (let i = hasInitial ? 0 : 1; i < this.length; i++) {
        // 注意四个参数
        currentValue = reducer.call(undefined, currentValue, this[i], i, this);
    }
    return currentValue;
}

// 数组里所有值的和
const arr = [1, 2, 3, 4];
const initVal = 0;
const total = arr.myReduce((acc, cur, index, array) => {
  console.log(acc, cur);
  // 0 1
  // 1 2
  // 3 3
  // 6 4
  return acc + cur;
});

console.log(total); // 输出：10
