
/*{
   Scope
}*/
if (true){
    let a = 10
    const b = 20
    var c = 30
}

console.log(a); // It will show error becouse a is not declared globally and it is outside the scope 
console.log(b); // It will show error becouse a is not declared globally and it is outside the scope 
console.log(c); // It will print 30 

var d = 300
if (true){
    var d = 30
}
console.log(d);