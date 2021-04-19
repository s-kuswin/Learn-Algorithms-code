/*
 * @lc app=leetcode.cn id=665 lang=javascript
 *
 * [665] 非递减数列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var checkPossibility = function(nums) {
    let i = 0,change = 0
    while(i <nums.length) {
        let cur = nums[i]
        let next = nums[i + 1]
        if(cur > next) change++
        if(change>1) return false
    }
};
// @lc code=end

