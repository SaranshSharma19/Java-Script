var str = "Saransh"

// Length - Return length of string
console.log("Length: ",str.length)

// tolowercase - Convert full string to lower case
console.log("TOLowerCase: ",str.toLowerCase())

// touppercase - Convert full string to upper case
console.log("ToUpperCase",str.toUpperCase())

// include - Check Whether element in the string or not
console.log("Include: ",str.includes("ansh"))

// startswith - Check whether string starts with a particular word or character
console.log("StartsWith: ",str.startsWith("Sar"))

// endswith - Check whether string ends with a particular word or character
console.log("EndsWith: ",str.endsWith("nsh"))

// search - search an element in the string and return index of the word or character and if word or character is not present in the string then it will return -1
console.log("Search: ",str.search("ansh"))

// match
var st = "Javascript is a Great is a Language"
console.log("Match: ",st.match(/is/g))

// indexof - return index of an element in a string
console.log("Indexof: ",st.indexOf("is"))

// indexof - return last index of an element in a string
console.log("Indexof: ",st.lastIndexOf("is"))

// replace - used to replace a word or character in a string
console.log("Replace: ",st.replace("Javascript","PHP"))
console.log("Replace Multiple TIme Using Regular Expression: ",st.replace(/is/g,"are"))

// trim - Remove Extra Spaces from left or right
var s = "Javascript                  "
console.log("Trim: ",s.trim())

// charat - return character at a particular index
console.log("Charat: ",s.charAt(1))

// charCodeAt - return ascii of an element at a particular index
console.log("CharCodeat: ",s.charCodeAt(1))

// fromCharCode - return element accprding to their ascii value
console.log("fromCharCode: ",String.fromCharCode(65))

// concat - Merge Two or more than two strings
console.log("Concat: ", st.concat(" ", str))

// split - split the string and convert it into an array
console.log("Split: ",st.split(" "))

// repeat - repeat the string number of times
console.log("Repeat: ",str.repeat(5))

// slice - It is use to get the sub string from start index to end index
console.log("Saransh")
console.log("Slice: ", str.slice(2,6))  // End index not included

// substr (index, how many characters you want)
console.log("Substr: ", str.substr(2,2))

// substring
console.log("Saransh")
console.log("Substring: ",str.substring(2,6)) // End index not included

// toString - convert other datatypes to string
var num = 65
console.log("Tostring: ",num.toString())
console.log("Tostring Type: ",typeof num.toString())

// valueof - return the value of string 
console.log("Valueof: ",str.valueOf())