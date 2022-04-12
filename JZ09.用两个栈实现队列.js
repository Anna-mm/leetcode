// 用两个栈实现一个队列。队列的声明如下，请实现它的两个函数 appendTail 和 deleteHead ，
// 分别完成在队列尾部插入整数和在队列头部删除整数的功能。(若队列中没有元素，deleteHead 操作返回 -1 )

//  

// 示例 1：

// 输入：
// ["CQueue","appendTail","deleteHead","deleteHead"]
// [[],[3],[],[]]
// 输出：[null,null,3,-1]
// 示例 2：

// 输入：
// ["CQueue","deleteHead","appendTail","appendTail","deleteHead","deleteHead"]
// [[],[],[5],[2],[],[]]
// 输出：[null,-1,null,null,5,2]

/**
 这道题的重点是：无论是栈还是队列，最终都是 JS 中的数组。使用数组假装栈的后进先出、队列的先进先出。
 */
 var CQueue = function() {
    this.inStack = [];
    this.outStack = [];
};

/**
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.inStack.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    if (this.outStack.length === 0) {
        while(this.inStack.length > 0) {
            this.outStack.push(this.inStack.pop());
        }
    }
    if (this.outStack.length === 0) {
        return -1;
    }
    return this.outStack.pop();
};