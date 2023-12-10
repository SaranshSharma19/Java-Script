let number = [100,200,300]
console.log(typeof number[Symbol.iterator])
let iter = number[Symbol.iterator]();
console.log(iter.next())
console.log(iter.next().value)
console.log(iter.next().done)
console.log(iter.next())


let arr = [100,200,300,400,500,600]
let str = "Saransh Sharma"
let it = arr[Symbol.iterator]()
let st = str[Symbol.iterator]()
let result = it.next()
let result2 = st.next()
while(!result.done){
    console.log(result.value)
    result = it.next()
}
while(!result2.done){
    console.log(result2.value)
    result2 = st.next()
}

function arrayIterator(arrr){
    var nextNum = 0;
    return {
        next(){
            if(nextNum < arr.length){
                return {
                    value : arrr[nextNum++],
                    done : false
                }
            }
            else{
                return {
                    value : arrr[nextNum++],
                    done : true
                }
            }
            
        }
    }
}

let array = [100,200,300,400,500,600]
let num = arrayIterator(array);
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())
console.log(num.next())