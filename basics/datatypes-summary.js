//PRIMIIVE

// 7 types : String , Number , Boolean , Null , Undefined , Symbol , BigInt

//NON - PRIMITIVE 

// Arrays , Objects , Functions

let name = "abc"

/* Javascript is DYNAMICALLY TYPED LANGUAGE as we dont assign datatypes and at 
 runtime the compiler detectes itself*/

 const id = Symbol('123')
 const nameId = Symbol('123')

 console.log(id == nameId)

 // false will be printed even though the number given is same but the output from the symbol is different

 const heros = ["ironman" , "scarlet_witch" ,"hawkeye"];

 let myobj = {
    name : "abc"
    age : 18
 }// its is an object which are always written in key valye pair
console.log(myobj)
const myfunctin = function(){
    console.log("hello world")
}


//corresponding data values from typeof 

//undefined => undefined
//null => object
//boolean => boolean
//string => string