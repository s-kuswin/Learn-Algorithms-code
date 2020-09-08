/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function(root, p, q) {
    if(root === null ||　root == p || root == q) {
        return root
    }
     let left  =  lowestCommonAncestor(root.left,p,q)
    let  right = lowestCommonAncestor(root.right,p,q)
    if (left&&right) return root
    if (left) return left
    if (right) return right
    return null

};
// @lc code=end

