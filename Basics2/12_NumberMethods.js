var a = "99"

// Number
a = Number(a)
console.log("Number: ",a)
console.log("Number Typeof: ",typeof a)

// ParseInt
var a = "99.88"
a = parseInt(a)
console.log("ParseInt: ",a)
a = "99 88"
console.log("ParseInt 1: ",parseInt(a))
a = "50 Years"
console.log("ParseInt 2: ",parseInt(a))

// parsefloat
var b = "90.2"
console.log("ParseFloat: ",parseFloat(b))
b = "10.70 years"
console.log("Parsefloat 1: ",parseFloat(b))

// isfinite
var c = 100
console.log("IsFinite 1: ",Number.isFinite(c))
c = 100000000000000000000000000000000000000000000000
console.log("IsFinite 2: ",Number.isFinite(c))
c = "hello"
console.log("IsFinite 3: ",Number.isFinite(c))
c = Infinity
console.log("IsFinite 4: ",Number.isFinite(c))

// isInteger
var d = 100
console.log("Isinteger: ",Number.isInteger(d))

// tofixed(x)
var e = 5.56789
console.log("tofixed: ",e.toFixed(3))

// toprecission(x) - return round value
console.log("toprecission: ",e.toPrecision(3))