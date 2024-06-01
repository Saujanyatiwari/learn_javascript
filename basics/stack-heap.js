//stack => primitive (int , boolean , string) [copies the value and passes]

// heap => non-primitive (arrays , maps) [passes the refernce where the value stored]


// primitive data type

let x = "apple";
let y = x;
y = "mango";


console.log(x);
console.log(y);

/*The value for x and y will be different because a copy is tsored in y mt the original value */

// Non-primitive data types

let userone = {
    email :"abc@google.com",
    age :19 
           }
 
let usertwo = userone;

usertwo.email = "xyz@google.com"

console.log(userone.email);
console.log(usertwo.email);

/* in the above the output for both will be same as it gets a refernve in heap thus when once a value changed
, it changes for all the objects being referred there */