// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。

//  

// 示例:

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
 var reverseList = function(head) {
    // 方案1：双指针 prev、next 循环
    // let prev = null;
    // let curr = head;
    // while (curr) {
        // 这里是一个闭环
    //     const temp = curr.next;
    //     curr.next = prev;
    //     prev = curr;
    //     curr = temp;
    // }
    // return prev;

    // 复杂度分析
    // 方案一
    // 时间复杂度：O(n)，其中 n 是链表的长度。需要遍历链表一次。
    // 空间复杂度：O(1)

    // 方案2：递归 - 不好理解
    // 关于理解递归可以看下这个文章：https://leetcode-cn.com/problems/fan-zhuan-lian-biao-lcof/solution/kan-bu-dong-di-gui-de-kan-guo-lai-xi-wan-1akq/
    // 1. 找到递推公式，f(n) = f(n-1) + 怎么做。假设 f(n-1) 已经完成，考虑下这块剩下该怎么做。
    // 2. 重复动作是什么
    // 1. 递归终止条件
    if (head == null || head.next == null) {
        return head;
    }
    // 2. 递的过程：从外向内逐层进入， 递归进入时只传递了一个参数
    const newHead = reverseList(head.next);
    // 3. 归的过程：从内向外逐层出来
    head.next.next = head;
    // 避免形成环
    head.next = null;
    return newHead;
    // 一定要注意这种顺序：
    // 先从外向内递进，再从内到外执行后面的两行，最后再把递进的返回值 return 出去。
};

// 方案二
// 时间复杂度：O(n)，其中 n 是链表的长度。需要对链表的每个节点进行反转操作。
// 空间复杂度：O(n)，其中 n 是链表的长度。空间复杂度主要取决于递归调用的栈空间，最多为 n 层。