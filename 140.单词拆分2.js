/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 */
var wordBreak = function(s, wordDict) {
    // console.log(s)
    let result = []

    for(let i = 0;i<s.length;i++) {
        let str = s.substring(0,i)
        // console.log(str)
        let arr = []
        if(wordDict.includes(str)) {
            arr.push(str)
            if(str !== s) {
                // console.log(s.substring(i+1,s.length))
                let last =  wordBreak(s.substring(i+1,s.length),wordDict)
                console.log(s.substring(i+1,s.length),last,s,str);
                // last.length ? arr.push(...last) : arr = []
            }
            // console.log(arr);
        }
        arr.length ? result.push(arr) : ''
    }
    return result
};

let res = wordBreak("catsanddog", ["cat", "cats", "and", "sand", "dog"])
// console.log(res);