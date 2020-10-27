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
var preorderTraversal = function(root) {
    if(!root) return []
    let result = []
    let stack = [root]
    while (stack.length) {
        const node = stack.shift()
        if(node && node.val) result.push(node.val)
        if(node && node.right) stack.unshift(node.right)
        if(node && node.left) stack.unshift(node.left)
    }
    return result
};