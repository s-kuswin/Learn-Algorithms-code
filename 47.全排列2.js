/*
 * @Descripttion: 
 * @Author: 时融伟
 * @Date: 2021-06-22 09:52:07
 */
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permuteUnique = function(nums) {
    let res = []

    function dep(arr, setArr) {
        if(!arr.length) {
            console.log(setArr);
            if(res.indexOf(setArr) == -1)  res.push(setArr)
            return
        }

        for(let i = 0; i < arr.length; i++) {
            let newSet = setArr.splice()
            let newArray = arr.filter(item => item != arr[i] )
            newSet.push(arr[i])
            dep(newArray,newSet)
        }

    }

    dep(nums,[])
    
};

permuteUnique([1,1,2])