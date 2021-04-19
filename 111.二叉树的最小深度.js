
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
var minDepth = function(root) {
    if(!root) return 0

    let stack = [root]
    let deepNum = 1

    while(stack.length) {
        let leve = [...stack]
        for(const v of leve) {
            const node = stack.shift()
            if(node.left == null && node.right == null) {
            return deepNum
            }            
            if(node.left) stack.push(node.left)
            if(node.right) stack.push(node.right)
        }
        deepNum++
    }
    return deepNum
};