/*

    DOM Create Method
    1 - createElement - Tag
    2 - createTextNode - Text
    3 - createComment - Comment

*/

var newElement = document.createElement("h2");
console.log(newElement);

var newText = document.createTextNode("This is just text");
console.log(newText);

var newComment = document.createComment("This is Comment");
console.log(newComment);

/*

    DOM Append Method
    1 - appendChild - used to attach 
    2 - insertBefore

*/
newElement.appendChild(newText);
document.getElementById("test").appendChild(newElement)  // append at last

var target = document.getElementById("test")
target.insertBefore(newElement,target.childNodes[0])


/* 

    insertAdjacentElement - Tag
    insertAdjacentHTML - Tag with Text
    insertAdjacentText - Text

    """ Positions """
    1 - beforebegin - Outside and Before DIV Container
    2 - afterbegin - Inside and Just After DIV Container Starts
    3 - beforeend - Inside and Just Before DIV Container End
    4 - afterend - Outside and After DIV Container Ends

*/

var newElement1 = document.createElement("h2");
var newText1 = document.createTextNode("This is Text 1");

newElement1.appendChild(newText1)
var target = document.getElementById("test")
target.insertAdjacentElement("beforebegin",newElement)

target.insertAdjacentElement("afterbegin",newElement)

target.insertAdjacentElement("afterend",newElement)

var newElement2 = "<h2>This is Heading</h2>";
target.insertAdjacentHTML("afterbegin",newElement2)
// target.insertAdjacentHTML("afterend",newElement2)
// target.insertAdjacentHTML("afterbegin",newElement2)
// target.insertAdjacentHTML("afterbegin",newElement2)

var newText = "This is Heading";
target.insertAdjacentText("afterend",newText)
