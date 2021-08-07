// Leetcode 21

// 合并两个有序链表

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
    if (!l1 && !l2) {
        return null;
    }

    if (l1 && !l2) {
        return l1;
    }

    if (!l1 && l2) {
        return l2;
    }

    let dummy = new ListNode(-1);
    let pointer = dummy, pointer1 = l1, pointer2 = l2;
    while (pointer1 && pointer2) {
        if (pointer1.val < pointer2.val) {
            pointer.next = pointer1;
            pointer = pointer.next;
            pointer1 = pointer1.next;
        } else {
            pointer.next = pointer2;
            pointer = pointer.next;
            pointer2 = pointer2.next;
        }
    }

    if (pointer1) {
        pointer.next = pointer1;
    }

    if (pointer2) {
        pointer.next = pointer2;
    }

    return dummy.next;
};