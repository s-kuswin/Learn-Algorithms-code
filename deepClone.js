function deepClone(target,map = new WeakMap()) {
    if(typeof target === 'object' && typeof target !== null) {
        let res = Array.isArray(target) ? [] : {}
        if(map.get(target)) return map.get(target)
        for(let k in target) {
            res[k] = deepClone(target[k])
        }
        map.set(target,res)
        return res
    } else {
        return target
    }
}

let data = {
    name:'kkkkk',
    children:{
        name:'ggggg'
    }
}

let newData = deepClone(data)
newData.children.name = 'oooo'
newData.children.name = data
console.log(newData.children.name, data.children.name);