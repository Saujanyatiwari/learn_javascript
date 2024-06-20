function five (num){
    return num*5;
}
  five.power = 2

// console.log(five(5));
// console.log(five.power);
// console.log(five.prototype);

function createUser (username , score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment = function(){
    this.score++
}

createUser.prototype.printMe = function(){
   console.log(`price is ${this.score}`)
}
const chai = new createUser("chai", 25)
const tea = new createUser("tea" , 200)

// chai.increment()
// chai.printMe()

// tea.increment()
// tea.printMe()