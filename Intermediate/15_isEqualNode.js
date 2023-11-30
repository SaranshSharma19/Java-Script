/*

isEqualNode Criteria
Same Node Type
Same Node Name
Same Node Value
Same Child Nodes
Same Attributes
Same Attributes Values

*/

var target1 = document.getElementById('list-1').firstElementChild;
var target2 = document.getElementById('list-2').firstElementChild;

var equal = target1.isEqualNode(target2)
console.log(equal)

var target1 = document.getElementById('list-1').firstElementChild;
var target2 = document.getElementById('list-2').children[1];

var equal = target1.isEqualNode(target2)
console.log(equal)

var target1 = document.getElementById('list-1').lastElementChild;
var target2 = document.getElementById('list-2').lastElementChild;

var equal = target1.isEqualNode(target2)
console.log(equal)

var target1 = document.getElementById('list-1').children[1];
var target2 = document.getElementById('list-2').firstElementChild;

var equal = target1.isEqualNode(target2)
console.log(equal)

var target1 = document.getElementById('list-1').children[2];
var target2 = document.getElementById('list-2').children[2];

var equal = target1.isEqualNode(target2)
console.log(equal)