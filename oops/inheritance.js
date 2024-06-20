class user {
    constructor(username){
    this.username = username
    }

    logme() {
        console.log(`username : ${this.username}`);
    }
}

class teacher extends user {
    constructor(username , email , subject){
        super(username)
        this.email  = email
        this.subject = subject
    }
    addcourse (){
        console.log(`new course was added by ${this.username}`)
    }
}

const identity = new teacher("giyu" , "giyu@gmail.com" , "water hashira")
// identity.addcourse()

console.log(identity instanceof teacher);
console.log(identity instanceof user);
console.log(user instanceof teacher);
console.log(teacher instanceof user);