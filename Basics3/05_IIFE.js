// Immediately Invoked Function Expression (IIFE)
// function chai(){
//     console.log(`DB CONNECTED`)
// }
// chai()
(function code(){
    // Named IIFE
    console.log(`DB CONNECTED`);
})();

// global scope ke pollution se problem hoti hai kaayi baar toh global scope ke pollution ko hatane ke liya humne IIFE ka use kiya

(()=>{
    console.log(`DB Connected 2`)
})();
((name)=>{
    console.log(`DB Connected 2 ${name}`)
})("MongoDB")