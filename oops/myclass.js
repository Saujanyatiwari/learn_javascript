
//using class performing tasks

class users {
    constructor(username , email , password){
        this.username = username
        this.password = password
        this.email = email
    }

    encryptPassword (){
        return `${this.password}abc`
    }

    changeusername () {
        return `${this.username.toUpperCase()}`
    }
}

const identity = new users ("tanjiro" , "user@gmail.com" , 123)
console.log(identity.encryptPassword())
console.log(identity.changeusername())


//using functions


const users = function(username , email , password){
    this.username = username
        this.password = password
        this.email = email
}

users.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

users.prototype.changeusername = function(){
    return `${this.username.toUpperCase()}`
}

const identity_02 = new user("inosuke", "user@gmail.com" , 987)
console.log(identity_02)

console.log(identity_02.encryptPassword())
console.log(identity_02.changeusername())