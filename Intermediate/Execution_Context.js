// Java Script Execution Context
/* 
    Global Execution Context/Enviorment - It is first alocated to "this"
    Function Execution Context
    Eval Execution Context
    ------------
    -          -   Memory Creation Phase
    -    {}    -
    -          -   Execution Phase
    ------------
*/

let val1 = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}

let result1 = addNum(val1,val2)
let result2 = addNum(15,5)


/*
1 - Global Execution - "this"
2 - Memory Phase
        val1 - undefined
        val2 - undefined
        addNum - defination
        result1 - undefined
        result2 - undefined
3 - Execution Phase
        val1 - 10
        val2 - 5
        addNum - New variable Environment + Execution Thread 
                1 - Memory Phase
                        val1 - undefined
                        val2 - undefined
                        total - undefined
                2 - Execution Context
                        num1 - 10
                        num2 - 5
                        total - 15 - It return to "Global Execution Context"
                After Successfull Execution it got deleted
                
Call Stack - Important Concept
*/