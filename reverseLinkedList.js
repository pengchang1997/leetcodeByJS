// Leetcode 206

// 反转链表

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next) {
        return head;
    }

    let previous = null, current = head, next = head;
    while (current) {
        next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }

    return previous;
};