// 剑指Offer 22 链表中倒数第k个节点

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function(head, k) {
    if (!head) {
        return null;
    }

    let pointer = head;
    for (let i = 0; i < k - 1; i++) {
        pointer = pointer.next;
    }

    let slow = head;
    while (pointer.next) {
        slow = slow.next;
        pointer = pointer.next;
    }

    return slow;
};