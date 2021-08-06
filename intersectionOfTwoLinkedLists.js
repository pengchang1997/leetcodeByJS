// Leetcode 160

// 相交链表

// Definition for singly-linked list.
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    let pointerA = headA, pointerB = headB;
    while (pointerA !== pointerB) {
        if (pointerA) {
            pointerA = pointerA.next;
        } else {
            pointerA = headB;
        }

        if (pointerB) {
            pointerB = pointerB.next;
        } else {
            pointerB = headA;
        }
    }

    return pointerA;
};