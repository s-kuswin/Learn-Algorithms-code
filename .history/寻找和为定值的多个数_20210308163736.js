// 题目描述
// 输入两个整数n和sum，从数列1，2，3.......n 中随意取几个数，使其和等于sum，要求将其中所有的可能组合列出来。

let list = [];
let list1 = [];
function sumOfNumber(sum,n){
    if(sum <= 0 || n <= 0 ) return;

    if(sum == n) {
        let value = list1.s
    }

    list1.push(n)
    sumOfNumber(sum - n, n -1)
    list1.pop()
    sumOfNumber(sum,n -1)
};