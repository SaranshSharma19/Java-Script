var newElement = document.createElement("li");
var newText = document.createTextNode("Wow new Text");
newElement.appendChild(newText);

var target = document.getElementById("list")
var oldElement = target.children[1]
console.log(oldElement)


// Replace Child
target.replaceChild(newElement,oldElement);

// Remove Child
var oldElement = target.children[0]
target.removeChild(oldElement)

