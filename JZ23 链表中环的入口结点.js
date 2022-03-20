// 描述
// 给一个长度为n链表，若其中包含环，请找出该链表的环的入口结点，否则，返回null。

// 例如，输入{1,2},{3,4,5}时，对应的环形链表如下图所示：
// 1->2->3
//     /   \
//     5   4
// 可以看到环的入口结点的结点值为3，所以返回结点值为3的结点。


/*function ListNode(x){
    this.val = x;
    this.next = null;
}*/
// 方案1：将访问过的节点进行记录
function EntryNodeOfLoop(pHead)
{
    const record = [];
    while(pHead) {
        if (record.indexOf(pHead.val) !== -1) {
            return pHead;
        }
        record.push(pHead.val);
        pHead = pHead.next;
    }
}
// 时间复杂度：O(n) 空间复杂度：O(n)

// 方案2：快慢指针
function EntryNodeOfLoop2(pHead)
{
    if (pHead === null || pHead.next === null) {
        return null;
    }
    // 设置快慢指针，都从链表头出发，快指针每次走两步，慢指针一次走一步
    // 假如有环，一定相遇于环中某点(结论1)
    // 接着让两个指针分别从相遇点和链表头出发，两者都改为每次走一步，最终相遇于环入口(结论2)。
    let fast = pHead;
    let slow = pHead;
    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        // 假如有环，一定相遇于环中某点
        if (fast === slow) {
            fast = pHead;
            // 让两个指针分别从相遇点和链表头出发，两者都改为每次走一步
            while (fast !== slow) {
                fast = fast.next;
                slow = slow.next;
            }
            // 直到走到相遇
            if (fast === slow) {
                return slow;
            }
        }
    }
}

// 时间复杂度：O(n) 空间复杂度：O(1)

module.exports = {
    EntryNodeOfLoop : EntryNodeOfLoop2
};