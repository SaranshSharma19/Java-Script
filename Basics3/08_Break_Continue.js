for(var a=1; a<=10;a++){
    if (a == 3){
        console.log(`Hey: ${a}`)
        continue
        // Loop Continue From Here and not print further statements
    }
    console.log(`Hello ${a}`)
}

for(var a=1; a<=10;a++){
    if (a == 3){
        console.log(`Hey: ${a}`)
        break
        // Loop End Now
    }
    console.log(`Hello ${a}`)
}