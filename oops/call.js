const Signin = function(username){
    this.username = username
    console.log("called")
}

const name = function(username , email , password){
    Signin.call(this,username)
    this.email = email
    this.password = password
}


const anything = new name("saujanya" , "user@gmail.com" , 123)

console.log(anything)