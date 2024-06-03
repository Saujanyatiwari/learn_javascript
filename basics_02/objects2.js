// DECLARATION OF SIGLETON OBJECTS 

const snapchat = new Object()

snapchat.id = "xajjks";
snapchat.name = "Alisha"
snapchat.isloggedIn = true

// console.log(snapchat)

const user = {
    fullname :{
        userfullname :{
            firstname: "alisha",
            middlename :"daisy",
            lastname :"kapoor",
        }
    }
}
// console.log(user.fullname.userfullname)



const obj1 = {1 : "a" , 2 : "b"}
const obj2 = {3 : "a" , 4 : "b"}
const obj3 = {5 : "a" , 6 : "b"}

// const obj4 = {obj1 , obj2 , obj3}
// const obj4 = Object.assign({}, obj1, obj2 , obj3)

const obj4 = {...obj1 , ...obj2 , ...obj3} // MOST USED METHOD
// console.log(obj4)



const users = [
    {
        id : 1,
        emailid:"h@google.com"
    },
    {
        id : 2,
        emailid:"a@google.com"
    },
    {
        id : 3,
        emailid:"s@google.com"
    }
]

// console.log(users[1].emailid

// YOU CAN TAKE OUT KEYS AND VALUES AND IT WILL COME OF IN THE FORM OF ARRAY

// console.log(Object.keys(snapchat))
// console.log(Object.values(snapchat))
// console.log(Object.entries(snapchat))


// TO CHECK WHETHER THE KEY OR VLUE IS PRESENT IN AN OBJECT OR NOT USE HASOWNPROPERTY

// console.log(snapchat.hasOwnProperty('name'))   RETURNS BOOLEAN

