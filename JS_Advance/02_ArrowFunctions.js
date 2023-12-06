/*

    Normal Function
    1 - 
    function hello(){
        console.log("Hello");
    }
    hello();

    2 -
    let hello = function(){
        console.log("Hello");
    }
    hello();

    Arrow Function
    let hello = () =>{ 
        console.log("Hello");
    }
    hello();

    () =>  Combination of this is known as Arrow Function

*/

let Welcome = (name,age) =>`Welcome ${name} - ${age}`;

console.log(Welcome("Saransh Sharma", 25));

let Hello = (name,age) =>{
    return `Hello ${name} - ${age}`;
}

console.log(Hello("Saransh Sharma", 25));

let Hi = name => `Hi ${name}`;
console.log(Hi("Saransh Sharma"));
 