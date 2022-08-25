/*
 * @Descripttion: 
 * @Author: 时融伟
 * @Date: 2021-07-05 10:01:38
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
 var inorderTraversal = function(root) {
    if(!root) return []
    let cur = root
    let stack = []
    let res = []

    while(cur) {
        stack.push(cur)
        cur = cur.left
    }

    while(stack.length) {
        let node = stack.pop()
        res.push(node.val)
        node = node.right
        while(node) {
            stack.push(node)
            node = node.left
        }
    }
    return res
};