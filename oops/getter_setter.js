class user {
    constructor(name , password){
        this.name = name
        this.password = password
    }

    get name(){
        return this._name.toUpperCase()
    }

    set name(value){
        this._name = value.toUpperCase()
    }

    get password(){
        return `${this._password}6728827`

    }

    set password(value){
        this._password = value

    }
}

const hashira = new user("tengen", 987)
console.log(hashira.password)
console.log(hashira.name)