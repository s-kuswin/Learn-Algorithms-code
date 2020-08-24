function  repetitionStr(str) {
    //自我写的最笨的方法
    let length = str.length
    let num = 1
    while (num <= length/2) {
        let node = str.substring(0,num)
        let arr = str.split(node)
        arr = arr.filter(item => { return item })
        if (!arr.length) return true
        num++
    }
    return false

    //优化最笨的方法，占用内存一样
    // let length = str.length
    // let num = 1
    // while (num <= length/2) {
    //     let node = str.substring(0,num)
    //     let count = length/num
    //     if (Number.isInteger(count) && node.repeat(count) === str)  return true
    //     num++
    // }
    // return false

    //KMP算法，不是太懂，(；′⌒`)
    let s1 = (str + str).slice(1, -1);
    return s1.indexOf(str) != -1;
}

console.log(repetitionStr('adcadca'));
