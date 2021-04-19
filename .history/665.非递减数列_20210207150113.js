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
        if(change>1) return false
        let cur = nums[i]
        let next = nums[i + 1]
        if(cur > next)  {
            change++;
            if(i >0;)
        } 
          i++;
        
    }

    return true
};
// @lc code=end

