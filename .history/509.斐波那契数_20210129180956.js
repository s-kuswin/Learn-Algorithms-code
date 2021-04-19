/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var fib = function(n) {
    let arr = []
    for(let i =0;i<=n;i++) {
        if(i ==0 || i ==1) {
            arr[i] = i
        } else {
            arr[i] = arr[i - 1]
        }
    }
};
// @lc code=end

