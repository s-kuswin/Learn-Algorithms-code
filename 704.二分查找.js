/*
 * @lc app=leetcode.cn id=704 lang=javascript
 *
 * [704] 二分查找
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    function dft(arr, start, end, target) {
        if (start <= end) {
            var len = end + start + 1
            var mid = Math.ceil(len / 2)
            if (target > arr[mid]) {
                return dft(arr, mid + 1, end, target)
            } else if (target < arr[mid]) {
                return dft(arr, start, mid - 1, target)
            } else {
                return mid
            }
        }
        return -1
    }

    return dft(nums, 0, nums.length, target)

};
// @lc code=end
