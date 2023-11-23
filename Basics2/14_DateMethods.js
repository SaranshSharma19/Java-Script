// Date Object Creation
var now = new Date();
console.log(now)

// toDateString - return Date in readable form
console.log(now.toDateString())

// getDate
console.log(now.getDate())

// getFullYear
console.log(now.getFullYear())

// getMonth
console.log(now.getMonth())

// getDay
console.log(now.getDay())

// getHours
console.log(now.getHours())

// getMinutes
console.log(now.getMinutes())

// getSeconds
console.log(now.getSeconds())

// getMilliSeconds
console.log(now.getMilliseconds())

console.log("--------------- Set ------------------")
// setDate
now.setDate(20)
console.log(now.getDate())

// setFullYear
now.setFullYear(2024)
console.log(now.getFullYear())

// setMonth
now.setMonth(1)
console.log(now.getMonth())
console.log(now.toDateString())

// setHours
now.setHours(14)

// setMinutes
now.setMinutes(40)

// setSeconds
now.setSeconds(40)

// setMilliseconds
now.setMilliseconds(40)

console.log(now)