const arr = [1,2,3,4,5]

const heros =  ["batman" , "ironman" , "scarlet-witch"]

const array = new Array(1,2,3,4)

// console.log(arr[2])

//METHODS


// arr.push(7) ADDS ELEMENTS IN LAST OF ARRAY
// arr.pop() REMOVES ELEMENTS FROM LAST OF ARRAY


// arr.unshift(0)  ADDS ELEMNTS IN THE START OF ARRAY
// arr.shift()   REMOVES ELEMENT FROM THE START OF ARRAY


// console.log(arr.includes(5)) CHECKS WHETHER ELEMENT PRESENT ORNOT RETURNS TRUE AND FALSE
// console.log(arr.indexOf(10)) CHECKS WHETHER ELEMENT PRESENT ANDRETURNS INDEX IF NOT RETURNS -1

// const ar = arr.join()   COVERTS THE ARRAY TO STRING 




/***** SLICE AND SPLICE ******/


console.log("A "+arr)

const n1 = arr.slice(1,3)

console.log(n1);
console.log("B "+arr)


const n2 = arr.splice(1,3);

console.log(n2)
console.log("C "+arr)



/* SLICE : DOESNT INCLUDE THE LAST INDEX & DOESNT AFFECT THE ORIGINAL ARRAY 
   SPLICE: DOES INCLUDE THE LAST INDEX & DOES AFFECT THE ORIGINAL ARRAY EXCLUDES EVERY SPLICED ELEMENT
           AND RETURNS ONLY THE ELEMENTS NOT SPLICED
*/


