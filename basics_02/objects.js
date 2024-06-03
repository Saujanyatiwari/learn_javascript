// SINGLETON : ALLWAYS INITIASED WHEN CONSTRUCTOR DECLARED
// object.create => way for defining a singleton object


// object literals

const sym = Symbol("abcd")


let jsuser = {
    name : "Saujanya",
    "sur name": "Tiwari",
    [sym] : 9981,
    age : 18,
    email: "saujanya@google.com",
    loggedIn : false,
    lastLogIn : ["Monday" , "Tuesday"]
}

/* console.log(jsuser.name)
console.log(jsuser["name"])    second way
console.log(jsuser["sur name"])
console.log(jsuser[sym]) */

// when key is given in string forms then second method is used always

jsuser.loggedIn = true
// Object.freeze(jsuser)

// freeze commands freezes the whole object hence no changes can be made 

// console.log(jsuser)

jsuser.greetings = function(){
    console.log("hello user")
}

console.log(jsuser.greetings())

jsuser.greetingstwo = function(){
    console.log(`hello user ${this.name}`)
}

console.log(jsuser.greetingstwo())