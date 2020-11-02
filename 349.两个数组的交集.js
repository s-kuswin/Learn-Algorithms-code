/**
 * @param {number[]} nums1
 * @param {number[]} nums2 精简版
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    return Array.from(new Set(nums1.filter(v => {return nums2.includes(v)})))
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2 初始版
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const nums1Set = Array.from(new Set(nums1))
    let number = []
    for(const v of nums1Set) {
        if(nums2.includes(v)) {
            number.push(v)
        }
    }
    return number
};

/**
 * @param {number[]} nums1
 * @param {number[]} nums2 2222
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let number = []
    for(const v of nums1) {
        if(nums2.indexOf(v) !== -1 && number.indexOf(v) == -1) {
            number.push(v)
        }
    }
    return number
};