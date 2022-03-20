// 描述
// 输入一个长度为 n 的链表，设链表中的元素的值为 ai ，返回该链表中倒数第k个节点。
// 如果该链表长度小于k，请返回一个长度为 0 的链表。
// 要求：空间复杂度 O(n)，时间复杂度 O(n)
// 进阶：空间复杂度 O(1)，时间复杂度 O(n)

// 例如输入{1,2,3,4,5},2时，对应的链表结构如下图所示：
// 1->2->3->4->5
// 返回倒数第2个结点（也即结点值为4的结点）即可

/*
 * function ListNode(x){
 *   this.val = x;
 *   this.next = null;
 * }
 */
/**
 * 代码中的类名、方法名、参数名已经指定，请勿修改，直接返回方法规定的值即可
 *
 *
 * @param pHead ListNode类
 * @param k int整型
 * @return ListNode类
 */

// 方案一：快慢指针
// 复杂度分析
// 时间复杂度O(N)：N为链表长度，遍历整个链表
// 空间复杂度O(1)：使用额外常数大小空间
 function FindKthToTail( pHead ,  k ) {
    // write code here
    let fast = pHead;
    let slow = pHead;
    // fast 指针先走到第 k 步
    for(let i = 0; i < k; i++){
        if(fast == null)  return null;
        fast = fast.next;
    }
    // 快慢指针一起一步一步走，快指针走到头时慢指针的位置就是目标
    while(fast!=null){
        fast = fast.next;
        slow = slow.next;
    }
    return slow;
}

// 方案2：创建一个节点数组保存指向链表每个节点的指针，通过数组长度找到倒数第k个节点
// 时间复杂度O(N)：N表示链表的数量，遍历链表
// 空间复杂度O(N)：存储链表元素的栈空间
function FindKthToTail2( pHead ,  k ) {

    if (pHead === null) return null;
    if (k === 0) return null;

    var nodeArray = new Array();
    while (pHead != null) {
        nodeArray.push(pHead);
        pHead = pHead.next;
    }
    if (nodeArray.length >= k) {
        return nodeArray[nodeArray.length - k];
    } else {
        return null;
    }
}
module.exports = {
    FindKthToTail : FindKthToTail2
};