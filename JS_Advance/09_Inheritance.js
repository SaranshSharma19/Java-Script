class employee{
    constructor(name,salary){
        this.emname = name;
        this.emsalary = salary;
        console.log("Constructor: Employee ");
    }
    info(){
        console.log(`Employee Name: ${this.emname}`)
    }
}
class manager extends employee{
    info(){
        let ta = 1000;
        let pa = 300;
        let Totalsalary = this.emsalary + ta +pa;
        console.log(`Manager Total Salary => ${Totalsalary}`)
    }
}
// var a = new employee("Saransh Sharma");
var b = new manager("Saransh Sharma",48700);
b.info()