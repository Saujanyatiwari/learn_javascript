let name = "saujanya"
let age = 18

// console.log(name + age + "is age")
// now the above method not used because of its less readibility

//string interpolation used 

// console.log(`hello my name is ${name} and my age is ${age}`)

//we use this interpolation way because string manipulation becomes easier

const gamename = new String("Saujanya")

// console.log(gamename)
// console.log(typeof gamename)

// string acts as an object here

// various manipulations can be performend on string usng various methods


//  console.log(gamename[6])
//  console.log(gamename.__proto__)
// console.log(gamename.length)
// console.log(gamename.toLowerCase())
// console.log(gamename.toUpperCase())
// console.log(gamename.charAt(6))
// console.log(gamename.indexOf('a'))

/* INDEXOF will return the first position of the element where ever  
it comes even if it occurs more than one time */

let s = "teadybear"

// console.log(s.substring( 1, 5))
// console.log(s.slice(0 , 3))

/* slice works on negative values also whereas substring 
dont comsider negative values and neglects the negative sign*/

let x = "     abcd    "

// console.log(x.trim())


let url = "https//wikipedia//human%20beings"

// console.log(url.replace('%20' , '-'))
// console.log(url.includes('human'))


let sen = "I-am-saujanya-tiwari"
console.log(sen.split('-'))