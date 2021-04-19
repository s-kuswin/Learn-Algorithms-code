/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function(headA, headB) {
    while(headA) {
        headA.tag = true
        headA = headA.next
    }
    while(headB) {
        if(headB.tag) return headB
        headB = headB.next
    }
    return null
};