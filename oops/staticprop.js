class user {
    constrcutor (username){
        this.username = username
    }

    printme (){
        console.log(`username is ${this.username}`)
    }

    static createid (){
        return 123
    }
}

const identity = new user("nezuko")
// identity.createid()


class teacher extends user {
    constructor(username , subject){
        super(username)
        this.subject = subject
    }

    print(){
        console.log(`Subject is ${this.subject}`)
    }
}

const identity_02 = new teacher("kokushibu", "moon breathing")
identity_02.print()

// identity_02.createid()


// when a statcic keyword is used no function whether inhertied even cant use the thing