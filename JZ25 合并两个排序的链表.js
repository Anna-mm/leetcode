// 描述
// 输入两个递增的链表，单个链表的长度为n，合并这两个链表并使新链表中的节点仍然是递增排序的。
// 要求：空间复杂度 O(1)，时间复杂度 O(n)

// 如输入{1,3,5},{2,4,6}时，合并后的链表为{1,2,3,4,5,6}，所以对应的输出为{1,2,3,4,5,6}

function ListNode(x){
    this.val = x;
    this.next = null;
}
function Merge(pHead1, pHead2)
{
    // 方案一：递归方案 - 简单
    if (!pHead1  ) return pHead2;
    if (!pHead2  ) return pHead1;
    if(pHead1.val <= pHead2.val){
        pHead1.next = Merge(pHead1.next, pHead2);
        return pHead1
    }else{
        pHead2.next = Merge(pHead2.next, pHead1);
        return pHead2
    }
}
// 复杂度分析
// 时间复杂度：O(m+n)
// 空间复杂度：O(m+n),每一次递归，递归栈都会保存一个变量，最差情况会保存(m+n)个变量

function Merge2(pHead1, pHead2)
{
    // write code here
    // 方案二：迭代方案 -  还是迭代简单
    // 技巧：一般创建单链表都会设一个虚拟头结点，也叫哨兵，因为这样每一个结点都有一个前驱结点。
    // head 是头节点，不会变的。curr 是当前节点，一直会变的。
    let head = new ListNode(0)
    let curr = head
    while(pHead1 && pHead2){
        if(pHead1.val <= pHead2.val){
            curr.next = pHead1
            pHead1 = pHead1.next
        }
        else{
            curr.next = pHead2
            pHead2 = pHead2.next
        }
        curr = curr.next;
    }
    // 这个是为了解决循环到最后的情况，只剩下一个 phead
    // 将l1或者l2剩下的部分链接到cur的后面
    curr.next = pHead1 ? pHead1 : pHead2;
    return head.next
}

// 时间复杂度：O(m+n),m，n分别为两个单链表的长度
// 空间复杂度：O(1)

module.exports = {
    Merge : Merge2
};