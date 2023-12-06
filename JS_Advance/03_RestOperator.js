/*

    1 -
    function sum(num1,num2){
        console.log(num1+num2)
    }
    sum(10,20) - Possible
    sum(10,20,30) - Not Possible
    sum(10,20,30,40) - Not Possible
    sum(10,20,30,40,50) - Not Possible

    2 -
    function sum(){
        let sum = 0
        for(let i in arguments){
            sum += arguments[i]
        }
        console.log(sum)
        sum(10,20) - Possible
        sum(10,20,30) - Possible
        sum(10,20,30,40) - Possible
        sum("Saransh",40,50) - Not Possible
    }

    So to overcome this problem we use "Rest Operator"
    function sum(name,...args){
        ... - Represent "Rest Operator"
        ...args - It will create array of rest values
        let sum = 0;
        for(let i in args){
            sum += args[i]
        }
        console.log(sum);
        console.log(name);
    }
    sum("Saransh",40,50) - Possible
    Output - 90 Saransh

*/
function sum(){
    let sum_ = 0;
    for(let i in arguments){
        sum_ += arguments[i];
    }
    console.log(sum_)
}
sum(10,20)
sum(10,20,30)
sum(10,20,30,40)
sum(10,20,30,40,50)

function add(name,...ar){
    let sum_ = 0;
    for(let i in ar){
        sum_ += ar[i];
    }
    console.log(sum_);
    console.log(name);
}
add("Saransh",10,20,30,40)
