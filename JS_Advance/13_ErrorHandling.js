/*

    try{
        // Statements
    }
    catch{
        // Statements
    }

*/

// try{
//     console.log("Start of Try");
//     console.log("End of Try");
// }
// catch{
//     console.log("Error has Occurred");
// }

// try{
//     console.log("Start of Try");
//     blablabla;
//     console.log("End of Try");
// }
// catch{
//     console.log("Error has Occurred");
// }

// try{
//     console.log("Start of Try");
//     blablabla();
//     console.log("End of Try");
// }
// catch{
//     console.log("Error has Occurred");
// }

// try{
//     console.log("Start of Try");
//     blablabla();
//     console.log("End of Try");
// }
// catch(error){
//     console.log("Error has Occurred");
//     console.log(error);
// }

// try{
//     setTimeout(function(){
//         blablabla();
//     },10000);
// }
// catch(error){
//     console.log("Error has Occurred");
//     console.log(error);
// }
// setTimeout(function(){
//     try{
//         hahaha();
//     }catch(error){
//         console.log("Error has Occurred");
//         console.log(error);
//         console.log(error.name);
//         console.log(error.message);
//         console.log(error.stack);
//     }},10000);

/*

    Types of Error -
    1 - EvalError
    2 - RangeError
    3 - ReferenceError
    4 - SyntaxError
    5 - TypeError
    6 - URIError
    7 - AggregateError

*/

// try{
//     blabla();
// }
// catch(error){
//     if(error instanceof ReferenceError){
//         console.log('RE');
//     }
//     else if(error instanceof TypeError){
//         console.log('TE');
//     }
//     else{
//         console.log('Unknown Error')
//     }
// }
try{
    let json = '{"name":"Saransh Sharma","age":30}'
    let user = JSON.parse(json)
    console.log(user.name)
    console.log(user.age)
    if(!user.roll){
        throw new Error("roll not defined")
    }
}
catch(error){
    console.log(error.message)
}
finally{
    console.log("Finally Hello")
}
// Parse Method convert JSON Data in JS Object Type
