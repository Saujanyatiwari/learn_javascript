const marvel = ["ironman" , "scarlet-witch" , "spiderman"]
const dc = ["batman" , "joker" , "harley-quinn"]

// marvel.push(dc)
// console.log(marvel)
// console.log(marvel[3][2]) THE 2 WILL ACCES THE SENCOND ELEMNTS OF THE DC ARRAY 

//  PUSH TREATS THE DC ARRAY AS A SINGLE ELEMENT OF TEH ARRAY 

const heros = marvel.concat(dc)
// console.log(heros)

// CONCAT HELPS IN JOINING THE ARRAY AND THE DC ELEMENTS ARE TREATED SEPARATELY


//++ SPREAD OPERTAOR USED NOW A DAS TO CONCAT TWO OR MORE ARRAYS


const indian = ["shaktiman" , "naagraj" , "gogo"]

const heros_all = [...marvel   , ...dc , ...indian]
// console.log(heros_all)


const another_array = [1,2,3,[4,5],6,[7,8,[3,4],10],11,12,13]
const a = another_array.flat(Infinity)
// console.log(a)

/* FLATMETHOD IS USSED TO CONVERT AT DEPTH TO A SINGLE ARRAY WITHOUT
 ANY SUBARRAYS INSIDE IT YOU CANA SLO DEFINE A DEPTH TO IT */

//  console.log(Array.isArray("arr"))
//  console.log(Array.from("Saujanya")) CONVERST THE GIVEN THING INTO THE ARRAY 


// console.log(Array.from({name : "saujanya"})) 

// EMPTY ARRAY COMES THE OUTPUT AS YOU NEED TO DEFINE WHETHER TO PRINT KEYS OR VALUES

let x = 100
let y = 200
let z = 300

// console.log(Array.of(x , y , z))

//Of METHOD IS USED TO CREATE THE ARRAYUSINF SEPARATE VARIABLES 
