/*

Assign Events Using The HTML DOM
document.getElementById(id).onclick = functionName;

DOM addEventListener() Method
document.getElementById(id).addEventListener("Click", functionName);

document.getElementById(id).addEventListener("Click", functionName(){
    statement
});

document.getElementById(id).addEventListener("Click", functionName, useCapture);

*/

var element;

// document.getElementById("header").onclick = abc;


// document.getElementById("header").onmouseenter = abc;

// document.getElementById("header").addEventListener("click",abc);

// document.getElementById("header").addEventListener("mouseenter",function(){
//     document.getElementById("header").style.border = "10px solid red";
// });

document.getElementById("header").addEventListener("mouseleave",abc);

function abc(){
    document.getElementById("header").style.background = "green";
}

// document.getElementById("header").addEventListener("mouseenter",function(){
//     this.style.border = "10px solid red";
// });
// document.getElementById("header").addEventListener("dblclick",abc);

// function abc(){
//     document.getElementById("header").style.background = "green";
// }

/*

removeEvenetListener()
element.removeEventListener("ondblclick",functionName);

*/
document.getElementById("header").addEventListener("click",xyz)

function xyz(){
    document.getElementById("header").removeEventListener('mouseleave',abc)
}
