function *generatorIt(){
    console.log('First Message')
    yield 'Yield One'
    console.log('Second Message')
    yield 'Yield Two'
}
let g = generatorIt();
// console.log(g)
// console.log(g.next())
// console.log(g.next())

for(let value of g){
    console.log(value)
}

function *generator(){
    yield 55;
    yield* ['Node','Angular','React'];
}
let gen = generator();
// console.log(g)
// console.log(g.next())
// console.log(g.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
console.log(gen.next())
