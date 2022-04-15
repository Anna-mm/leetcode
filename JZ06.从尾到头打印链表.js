
// 输入一个链表的头节点，从尾到头反过来返回每个节点的值（用数组返回）。

// 示例 1：
// 输入：head = [1,3,2]
// 输出：[2,3,1]

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    // 【不好】方案一：借用数组的 reverse 方法
    // 【推荐】方案二：用数组的 unshift 方法
    const a = [];
    let current = head;
    while (current) {
        a.unshift(current.val);
        current = current.next;
    }
    return a;
};