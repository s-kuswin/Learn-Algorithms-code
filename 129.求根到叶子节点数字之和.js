/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumNumbers = function(root,prev=0) {
    if(!root) return 0
    const sum = prev*10 + root.val
    if(!root.left && !root.right) {
        return sum
    }
    return sumNumbers(root.left,sum) + sumNumbers(root.right,sum)
};