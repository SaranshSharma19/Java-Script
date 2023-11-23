/*

    How to Target DOM Object?
    1 - ID - document.getElementById(id)
    2 - Class Name - document.getElementsByClassName(name)
    3 - Tag Name - document.getElementsByTagName(name)

    Other Methods
    1 - document
    2 - document.all
    3 - document.documentElement
    4 - document.head
    5 - document.title
    6 - document.body
    7 - document.images
    8 - document.anchors
    9 - document.links
    10 - document.forms
    11 - document.doctype
    12 - document.URL
    13 - document.baseURI
    14 - document.domain

*/
var element;

element = document;
console.log(element)

element = document.all;
console.log(element)

element = document.all[2];
console.log(element)

element = document.head;
console.log(element)

element = document.title;
console.log(element)

element = document.body;
console.log(element)

element = document.links;
console.log(element)

element = document.images;
console.log(element)

element = document.forms;
console.log(element)

element = document.doctype;
console.log(element)

element = document.URL;
console.log(element)

element = document.domain;
console.log(element)

element = document.baseURI;
console.log(element)

element = document.getElementById("menu")
console.log(element)

element = document.getElementsByClassName("content")
console.log(element)

element = document.getElementsByTagName("ul")
console.log(element)