let score = "33abc"
console.log(typeof score);

let scores = Number(score);
console.log(typeof scores);
console.log(scores);

//output given when converted to number
//"33" => 33
// "abc" => NaN
//null => 0
//undefined => NaN
//true/false => 1/0

let loggedIn = 1
let stringname = 33

let booleanLog = Boolean(loggedIn)
let names = String(stringname)

console.log(typeof booleanLog);
console.log(typeof names)
console.log(booleanLog)