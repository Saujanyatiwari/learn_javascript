const users = {
    username : "saujanya",
    loginCount : 10 ,
    loggedin : true,

getuser : function(){
    console.log(`USER : ${this.username}`)
    console.log(this);
}
}

// console.log(users.username)
// console.log(users.getuser())
// console.log(this);


function user(name , password , loggedin){
    this.name = name
    this.password = password
    this.loggedin = loggedin
    this.greetings = function(){
        console.log(`WELCOME, ${name}`);
    }
}

const userone = new user("saujanya" , 123 , true)
console.log(userone.constructor)
const usertwo = new user("shinchan" , 987 , false)
// console.log(usertwo)