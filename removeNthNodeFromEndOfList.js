// Leetcode 19

// 删除链表的倒数第 N 个结点

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head) {
        return null;
    }

    // 建立哑节点
    let dummy = new ListNode(-1);
    dummy.next = head;

    let pointer = dummy;
    for (let i = 0; i < n; i++) {
        pointer = pointer.next;
    }

    let slow = dummy;
    while (pointer.next) {
        slow = slow.next;
        pointer = pointer.next;
    }

    let nextNode = slow.next;
    slow.next = slow.next.next;
    nextNode.next = null;

    return dummy.next;
};