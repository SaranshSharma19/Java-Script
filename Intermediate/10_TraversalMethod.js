console.log(document.getElementById("inner"))
console.log(document.getElementById("inner").innerHTML)
console.log(document.getElementById("inner").innerText)


// ParentNode & ParentElement   

var a = document.getElementById("inner").parentElement
console.log(a)

var a = document.getElementById("outer").parentElement
console.log(a)

var a = document.body.parentElement
console.log(a)

document.getElementById("inner").parentElement.style.background = "yellow"

document.getElementById("child-c").parentElement.style.background = "red"


var a = document.getElementById("inner").parentNode
console.log(a)

var a = document.getElementById("main").parentNode
console.log(a)

var a = document.getElementById("main").parentElement
console.log(a)

// Children & ChildNodes

var a = document.getElementById("outer").children
console.log(a)

var a = document.getElementById("inner").children
console.log(a)

var a = document.getElementById("inner").children[0]
console.log(a)

document.getElementById("inner").children[0].style.background = "pink"

var a = document.getElementById("inner").children[0].innerHTML
console.log(a)

var a = document.getElementById("inner").childNodes
console.log(a)

var a = document.getElementById("inner").childNodes[1].innerHTML;
console.log(a)

// FirstChild, FirstElementChild, LastChild, LastElementChild

var a = document.getElementById("inner").firstElementChild
console.log(a)

var a = document.getElementById("inner").firstElementChild.innerText
console.log(a)

document.getElementById("inner").firstElementChild.style.background = "purple"

var a = document.getElementById("inner").lastElementChild
console.log(a)

var a = document.getElementById("inner").lastElementChild.innerText
console.log(a)

document.getElementById("inner").lastElementChild.style.background = "purple"

var a = document.getElementById("inner").firstChild
console.log(a)

var a = document.getElementById("inner").firstChild.innerText
console.log(a)

var a = document.getElementById("inner").lastChild
console.log(a)

var a = document.getElementById("inner").lastChild.innerText
console.log(a)

var a = document.getElementById("child-c").firstChild
console.log(a)

// nextElementSibling, nextSibling, previousElementSibling, previousSibling

var a = document.getElementById("child-c").nextElementSibling
console.log(a)

var a = document.getElementById("child-c").previousElementSibling
console.log(a)

document.getElementById("child-c").previousElementSibling.style.background = "yellow"

var a = document.getElementById("child-c").nextElementSibling.innerText
console.log(a)

var a = document.getElementById("child-c").nextElementSibling.innerHTML
console.log(a)

var a = document.getElementById("inner").childNodes
console.log(a)

var a = document.getElementById("child-c").childNodes
console.log(a)

var a = document.getElementById("child-c").nextSibling
console.log(a)

var a = document.getElementById("child-c").previousSibling
console.log(a)