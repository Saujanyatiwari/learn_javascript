let d = new Date()

/* console.log(d)
console.log(d.toString())
console.log(d.toDateString())
console.log(d.toISOString())
console.log(d.toJSON())
console.log(d.toLocaleDateString())
console.log(d.toLocaleString()) */

// console.log(typeof d)

// date => object

// let createDate = new Date( 2020 , 0 , 8)

let createDate = new Date( 2020 , 0 , 8 , 10 , 30)
// 10 and 30 are the time which mean 10:30 
// console.log(createDate.toLocaleString())

// Note : months start from 0 in the above case and from 1 in lower casenof initilisation


let date = new Date("2020-01-12")
// console.log(date.toLocaleString())

let current = Date.now()
// console.log(current)
// console.log(date.getTime())




// TO GET TIME IN SECONDS 

// console.log(Math.floor((Date.now())/1000))

let newDate = new Date()
/* console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDate()) */


console.log(newDate.toLocaleString('default' , 
    {
        weekday: "long",
    }
))