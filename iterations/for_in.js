// OBJECTS ITERATIONS++++++++++++++++==

const obj = {
    js : "javascript",
    cpp : "c++",
    css : "cascading style sheet",
    html : "hyper text markup language"
}

 for (const key in obj) {
    // console.log(key + ": "+ obj[key]);
 }

 // to get values : obj[key] is the syntax



 const arr = ["js" , "css" , "html" , "cpp"]

 for (const key in arr) {
    // console.log(arr[key]);
 }

// FOR IN LOOPS WORKS ON ARRAYS

 const map = new Map()
map.set("IN" , "India")
map.set("USA" , "United States of America")
map.set("Fr" , "France")


for (const key in map) {
   console.log(key);
}

// FOR IN LOOP DOESNT WOKR ON MAPS 