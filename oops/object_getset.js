let user = {
    _email:"abc@gmail.com",
    password : 12345,

    get email(){
        return this._email.toUpperCase()
    },

    set email(value){
        this._email =  value
    }
}

const create = Object.create(user)
console.log(create.email)