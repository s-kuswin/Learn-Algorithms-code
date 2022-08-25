/*
 * @Descripttion: 
 * @Author: 时融伟
 * @Date: 2021-07-27 10:03:22
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
//  var search = function(nums, target) {
//      let res = -1
//     function binarySearch(start,end) {
//         if(start > end) return 
//         if(nums[start] == target)  {
//             res = start
//             return
//         }
//         if(nums[end] == target)  {
//             res = end
//             return
//         }
//         let middle = Math.ceil((start + end)/2)
//         if(nums[middle] == target)  {
//             res = middle
//             return
//         }

//         if(nums[start]> target || nums[end] < target) return

//         if(nums[start] < target && nums[middle] > target){
//             binarySearch(start+1,middle-1)
//         } else if(nums[middle] < target && nums[end] > target) {
//             binarySearch(middle+1,end-1)
//         }
//     }

//     binarySearch(0,nums.length -1)

//     return res
// };

function test () {
    console.log('start')
     setTimeout(() => {
         console.log('children2')
         Promise.resolve().then(() => {console.log('children2-1')})
     }, 0)
     setTimeout(() => {
         console.log('children3')
         Promise.resolve().then(() => {console.log('children3-1')})
     }, 0)
     Promise.resolve().then(() => {console.log('children1')})
     console.log('end') 
 }
 
 test()