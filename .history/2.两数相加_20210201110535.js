/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode(-1),nextVal = 0
    let temp = node
    while(l1 || l2) {
        let l1Val = l1.val ? l1.val : 0
        let l2Val = l2.val ? l2.val : 0
        let sum = l1Val + l2Val + nextVal
        temp.next = new ListNode(sum%10)
        temp = temp.next
        nextVal = sum >9 ? 1 : 0
        l1 && (l1 = l1.next)
        l1 && (l2 = l2.next)
    }
    add && (te)
    return node.next
};
// @lc code=end

