/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums) {
    let res = []
    let length = nums.length
    let set = new Set()

    let dfs = function (start, path) {
        if (path.length >= 2){
            const str = path.join(',')//去重
            if (!set.has(str)) {
                res.push(path.slice())
                set.add(str)
            }
        }
        for (let i = start; i < length; i++) {
            let pre = path[path.length - 1]
            let cur = nums[i]
            if (cur >= pre || !path.length){
                path.push(cur)
                dfs(i+1,path)
                path.pop()
            }
        }

    }

    dfs(0, [])

    return res
};

console.log(findSubsequences([4, 6, 7, 7]));
// 输入: [4, 6, 7, 7]
// 输出: [[4, 6], [4, 7], [4, 6, 7], [4, 6, 7, 7], [6, 7], [6, 7, 7], [7,7], [4,7,7]]
