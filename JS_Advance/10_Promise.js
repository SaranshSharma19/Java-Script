/*

        Promise
       /       \
      /         \
  Ressolev()   reject()
      |           |
      |           |
    Then()      catch()


    let prom = new Promise();
    let prom = new Promise(function(){
        // Statement
    });
    let prom = new Promise(function(resolve, reject){
        // Statement
        if(condition){
            resolve("Here is a Success");
        }
        else{
            reject("Here is a Failure");
        }
    });
    prom.then(onfulfilment);
    prom.catch(onRejection);

    let onfulfilment = (result) => {
        console.log(result);
    }
    let onRejection = (error) => {
        console.log(error);
    }

*/ 

// var complete = true;
function prom(complete){
    return new Promise(function(resolve, reject){
        if(complete){
            resolve("Success");
        }
        else{
            reject("Failed");
        }
    });
}
let onfulfilment = (result) => {
    console.log(result)
}
let onRejection = (error) => {
    console.log(error)
}
prom(true).then(onfulfilment);
prom(false).catch(onRejection);
