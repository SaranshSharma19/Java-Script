var target = document.getElementById("list1").children[0];
var copyElement = target.cloneNode(false);  // copy only attributre and tag name when set to false
console.log(copyElement)

var copyElement = target.cloneNode(true);  // copy only attributre and tag name with inner Value when set to True
console.log(copyElement)


document.getElementById("list2").appendChild(copyElement)