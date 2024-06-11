
const useremailId = []

if(useremailId){
    console.log("email is given");
}
else{
    console.log("email is not given");
}


// FALSY VALUES => null , undefined , false , 0 , -0 , bigInt 0n , "" , Nan
// only the baove values will give false and any other value except that will return true

// TRUTHY VALUES => "0" , "false" , " " , [] , {} , function(){}
// anything written inside strings are truthy values even spaces  
//empty functions, arrays and objects also are truthy values

/* 

Checking if array is empty

if(useremailId.length === 0){
    console.log("array is empty");
} */



/*
 checking if object is empty

const emptyoobj = {}

if(Object.keys(emptyoobj).length === 0){
    console.log("object is empty");
} */


/* 
    WHEN ON CONSOLE OF BROWSER
    false == 0  
    false == ''
    0 == ''
    all the above give TRUE as an answer
*/


// nullish colaescing operator[??] : null  undefined

let val1

// val1 = 10 ?? 20
// val1 = null ?? 30
// val1 = undefined ?? 10
// val1 = null ?? undefined => UNDEFINED OUTPUT
// val1 = undefined ?? null  => NULL OUTPUT

// val1 = null ?? 10 ?? 30 always takes the first number given

// console.log(val1);


//+++++++++++++++++++++TERNARY OPERATOR+++++++++++++++++++++

// Condition ? true : false

const price = 100

price>80 ? console.log("above 80") : console.log("below 80");