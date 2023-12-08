/*

    class hello{   ---- Class ----
        message(){  --- Methods ----
            // Statements
        }
    }
    let a = new hello(); ---- Object ----
    a.message();

*/ 

class hello{   
    message(){        
        console.log("Hello Everyone");
    }
    sorry(){
        console.log("Sorry Everyone");
    }
}
var a = new hello();
a.message();
a.sorry();

/*

    Type of Methods - 
    1 - Constructor - constructor(){ // Statements } - Run Automatically
    2 - Prototype - Function_Name(){ // Statement }  - We need to Call these Methods and Have to create object 
    3 - Static - static Function_Name(){ // Statement } - we don't need to create object we can directly call them

*/ 

class student{
    constructor(){
        var name;
        console.log("Constructor Function");
    }
    hello(){
        console.log(`Hello ${this.name}`)
    }
}

var a  = new student();
a.name = "Saransh Sharma"
a.hello();

class child{
    constructor(name,age){
        this.name = name;
        this.age = age;
        console.log("Constructor Function");
    }
    hello(){
        console.log(`Hello ${this.name} You are ${this.age} years old`)
        console.log("Prototype Function");
    }
    static staticMethod(){
        console.log("Static Function");
    }
}

var a  = new child("Saransh Sharma",21);
a.hello();
child.staticMethod();