/*
 * @lc app=leetcode.cn id=74 lang=javascript
 *
 * [74] 搜索二维矩阵
 */

// @lc code=start
/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i = 0,ifTrue = false,targetArr = []
    while(i < matrix.length && !ifTrue) {
        if(target >= matrix[i][0] && target <= matrix[i][matrix[i].length - 1] ) {
            ifTrue = true 
            targetArr = matrix[i]
        } 
        i++
    }

    if(targetArr.length) return binarySearch(targetArr,target,0,targetArr.length-1)
    return false
};

var binarySearch = function (arr,target,start,end) {
    if (start>end) return false
    const middle = Math.ceil((start+end)/2)
    if (arr[middle] == target || arr[start] == target || arr[end] == target) return true
    if (arr[middle] < target) return binarySearch(arr,target,middle+1,end)
    if (arr[middle] > target) return binarySearch(arr,target,start,middle-1)
    if(target > arr[end] || target < arr[start]) return false
}