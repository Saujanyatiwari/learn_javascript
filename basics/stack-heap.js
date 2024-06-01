//stack => primitive (int , boolean , string) [copies the value and passes]

// heap => non-primitive (arrays , maps) [passes the refernce where the value stored]

let x = apple
let y = x
y = mango

console.log(x);
console.log(y);