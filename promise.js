function Promise(execute) {
    this.value = null
    this.reason = null
    this.status = 'pending'
    this.fufilledArr = []
    this.rejectededArr = []

    const resolve = (value) => {
        if(this.status !== 'pending') return
        this.value = value
        this.status = 'fufilled'
        this.fufilledArr.forEach(Fun => {
            Fun(value)
        })
    }

    const reject = (reason) => {
        if(this.status !== 'pending') return
        this.reason = reason
        this.status = 'rejected'
        this.rejectededArr.forEach(Fun => {
            Fun(reason)
        })
    }

    try{
        execute(resolve,reject)
    } catch(e) {
        reject(e)
    }
}

Promise.prototype.then = function(onfufilled,onrejected) {
    onfufilled = typeof onfufilled === 'function' ? onfufilled : data => data
    onrejected = typeof onrejected === 'function' ? onrejected : error => {throw error}
    let self = this

    let _promise = new Promise((resolve,reject) => {
        if(this.status === 'fufilled') {
            setTimeout(() => {
                try{
                    const value = onfufilled(self.value)
                    resolvePromise(_promise,value,resolve,reject)
                    // resolve(value)
                }catch(e) {
                    reject(e)
                }
            })
        }
        if(this.status === 'rejected') {
            setTimeout(() => {
                try{
                    const value = onrejected(self.reason)
                    resolvePromise(_promise,value,resolve,reject)
                    // resolve(value)
                }catch(e) {
                    reject(e)
                }
            })
        }

        if(this.status === 'pending') {
            this.fufilledArr.push((val) =>{
                setTimeout(() => {
                    try{
                        const value = onfufilled(val)
                        resolvePromise(_promise,value,resolve,reject)
                        // resolve(value)
                    }catch(e) {
                        reject(e)
                    }
                })
            })

            this.rejectededArr.push((val) =>{
                setTimeout(() => {
                    try{
                        const value = onrejected(val)
                        resolvePromise(_promise,value,resolve,reject)
                        // resolve(value)
                    }catch(e) {
                        reject(e)
                    }
                })
            })
        }
    })
    return _promise
}

Promise.all = function(arr) {
    let res = []
    return new Promise((resolve,reject) => {
        let next = 0
        for(let i = 0;i < arr.length; i++) {
            const item = arr[i]
            if(isPromise(item)) {
                item.then(val => {
                    res[i] = val
                    next += 1
                    if(next === arr.length) resolve(res)
                },reject)
            } else {
                res[i] = item
                next += 1
                if(next === arr.length) resolve(res)
            }
        }
    })
}
Promise.race = function(arr) {
    return new Promise((resolve,reject) => {
        arr.forEach((item) => {
            if(isPromise(item)) {
                item.then(val => {
                    resolve(val)
                },reject)
            } else {
                resolve(item)
            }
        })
    })
}

function isPromise(e) {
    return !!e && (typeof e === 'function' || typeof e === 'object') && typeof e.then === 'function'
}

function resolvePromise(_promise,x,resolve,reject) {
    if(x === _promise) return reject(new Error('死循环'))

    if(x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            let then = x.then
            if(typeof then === 'function') {
                then.call(x,function(y) {
                    resolvePromise(x,y,resolve,reject)
                },function(reason) {
                    reject(reason)
                })
            } else {
                resolve(x)
            }
        }catch(e) {
            reject(e)
        }

    } else {
        resolve(x)
    }
}

let myPromise = new Promise((resolve) => {
    setTimeout(() => {
        // console.log(1);
        resolve(2)
    },2000)
})
let myPromise2 = new Promise((resolve) => {
    setTimeout(() => {
        // console.log(1);
        resolve(5)
    },1000)
})

myPromise.then((value) => {
    // console.log(value);
    return value + 1
})
.then(res => {
    return res + 1
})


Promise.all([2,3,5]).then((res) => {
    console.log(res,'all');
})
Promise.race([myPromise,myPromise2]).then((res) => {
    console.log(res,'race');
})

class Person {
  
}

Person.prototype.setName = function (name) {
  console.log(this);
}

const person = new Person()
const setName = person.setName
setName("Jane Doe")
console.log(person)