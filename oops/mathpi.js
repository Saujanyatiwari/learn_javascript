// console.log(Math.PI)


const obj = Object.getOwnPropertyDescriptor(Math , "PI")

// console.log(obj)

const demon_slayer ={
    name: "kamado tanjiro",
    style: "water breathing"
}

// console.log( Object.getOwnPropertyDescriptor(demon_slayer , "name"));

Object.defineProperty(demon_slayer , 'name',{
    writable : false,
    enumerable : false
})

demon_slayer.name = "nezuko"

// console.log( Object.getOwnPropertyDescriptor(demon_slayer , "name"));



for (let [key, value] of Object.entries(demon_slayer)) {
    if (typeof value !== 'function') {
        
        console.log(`${key} : ${value}`);
    }
}


//enumerable when off doesnt let you iterate through the thing passed 
