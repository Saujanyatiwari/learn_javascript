// FOR OF LOOP ++++++++++++++++

//["" , "" , ""] aray of strings
//[{} , {} , {}] array of objects

const numbers =[1,2,3,4,5]
for (const num of numbers) {
    // console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    // console.log(`character is ${greet}`);
}

// MAPS +++++++++++++++++

const map = new Map()
map.set("IN" , "India")
map.set("USA" , "United States of America")
map.set("Fr" , "France")

// console.log(map);

for (const [key , values] of map){
    // console.log(key +":-"+values);
}


const obj = {
    "game1" : "GTA",
    "game2" : "COD",
    "game3" : "VALO"
}

// for (const [key,value] of obj) {
//     console.log(key +":-"+value);
    
// }

// for of loop doesnt work on objects
// for object there is another way to iterate through it ..