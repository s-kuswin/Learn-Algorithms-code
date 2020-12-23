/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function(l1, l2) {
    let newList = new NodeList(0),cur = null
    while(l1 || l2) {
        let next = null
        console.log(l1,l2)
        if(!l1 || l1.val > l2.val) {
            next = l2.next
            if(newList) {
                cur.next = l2
            } else {
                newList = L2
                cur = newList
            }
            l2 = next
        } else {
            next = l1.next
            if(newList) {
                cur.next = l1
            } else {
                newList = L1
                cur = newList
            }
            l1 = next
        }
    }
    return newList
};

var mergeTwoLists = function(l1, l2) {
    if(!l1) return l2
    if(!l2) return l1

    if(l1.val >l2.val) {
        l2.next = mergeTwoLists(l1,l2.next)
        return l2
    } else {
        l1.next = mergeTwoLists(l1.next,l2)
        return l1
    }
    return l1 || l2
};
// @lc code=end

