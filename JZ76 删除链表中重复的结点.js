// 描述
// 在一个排序的链表中，存在重复的结点，请删除该链表中重复的结点，重复的结点不保留，返回链表头指针。 例如，链表 1->2->3->3->4->4->5  处理后为 1->2->5

// 进阶：空间复杂度 O(n)  ，时间复杂度 O(n)

// 例如输入{1,2,3,3,4,4,5}时，对应的输出为{1,2,5}

function ListNode(x){
    this.val = x;
    this.next = null;
}

// 直接删除法：
// 以下两个方案都是一样的道理，看哪个思路更顺些。前者是个人的，后者是官方的
// 在遍历单链表的时候，检查当前节点与下一点是否为相同值，如果相同，继续查找祥同值的最大长度，然后指针改变指向。
function deleteDuplication(pHead)
{
    let vHead = new ListNode(0);
    vHead.next = pHead;
    let prev = vHead;
    let curr = pHead;
    while (curr) {
        if (curr.next && curr.val === curr.next.val) {
            while (curr.next && curr.val === curr.next.val) {
                curr = curr.next;
            }
            prev.next = curr.next;
            curr = curr.next;
        }
        else {
            prev = prev.next;
            curr = curr.next;
        }
    }
    return vHead.next;
}

function deleteDuplication2(pHead)
{
    let vHead = new ListNode(0);
    vHead.next = pHead;
    let prev = vHead;
    let curr = pHead;

    while (curr) {
        if (curr.next && curr.val === curr.next.val) {
            curr = curr.next;
            while (curr.next && curr.val === curr.next.val) {
                curr = curr.next;
            }
            curr = curr.next;
            prev.next = curr;

        }
        else {
            prev = curr;
            curr = curr.next;
        }
    }
    return vHead.next;
}
module.exports = {
    deleteDuplication : deleteDuplication2
};