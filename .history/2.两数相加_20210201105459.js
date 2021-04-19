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
    while(l1New || l2New) {
        let l1Val = l1New.val ? l1New.val : 0
        let l2Val = l2New.val ? l2New.val : 0
        let curVal = l1Val + l2Val + nextVal
        if(curVal >= 10) {
            nextVal = curVal
            curVal = curVal.substring(curVal.length - 1)
        }

        

    }
};
// @lc code=end

