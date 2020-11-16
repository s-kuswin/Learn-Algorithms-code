/*
 * @lc app=leetcode.cn id=912 lang=javascript
 *
 * [912] 排序数组
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {
    if (!nums.length || nums.length == 1) return nums
    const index = 0,len = nums.length
    let left = [],mid = [],right = []
    for(let i =1;i<len;i++) {
        if(nums[i] > nums[index]) right.push(nums[i])
        if(nums[i] < nums[index]) left.push(nums[i])
        if(nums[i] == nums[index]) mid.push(nums[i])
    }
    return [...sortArray(left),...mid,nums[index],...sortArray(right)]
};
// @lc code=end

