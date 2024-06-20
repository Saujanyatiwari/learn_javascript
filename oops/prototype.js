let name = "saujanya    "
let day = "thursday   "

// console.log("length : " + name.length)

const heros = ["scarlet-witch" , "ironman"]

let heropower = {
    name :"thor",
    power : "hammer",

    powername: function(){
        heroname: "spiderman"
        powername : "sling"
    }
    
}

Object.prototype.saujanya = function(){
    console.log("all heros are good")
}

// whena prototype of object is created then all arrayas strings and objects can have the access


// heropower.saujanya()
// heros.saujanya()


Array.prototype.apple = function(){
    console.log("Apple is good for health")
}

// when a prototype of array is created so array can access to that but an object cannot access to it 

// heros.apple()
// heropower.apple()


const user = {
    name : "user",
    loggedIn : true
}

const teacher = {
    subject:"js",
    salary : 10000
}
const onlineeducation = {
    zoomId : "users_22",
    time  : "12 pm"
}
const head ={
    username : "principal",
    mail:"principal@gmail.com",
    __proto__:teacher
}

onlineeducation.__proto__ = user


//modern syntax
Object.setPrototypeOf(teacher , user)


let str = "orange is orange"

String.prototype.truelength = function(){
    console.log(`${this}`)
    console.log(`length is : ${this.trim().length}`)
}

str.truelength()
"saujanya".truelength()