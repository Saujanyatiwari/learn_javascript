

function myName(){
    console.log("A");
    console.log("P");
    console.log("P");
    console.log("L");
    console.log("E");
}
// myName()

function add(n1 , n2)  {
    console.log(n1+n2) // anything written above return statement shall execute
    return n1+n2 // it only prints bot returns back return is another concept so return is used 
    // console.log("saujanya") anything written after return is not considered 
}
// add(2,6)

// const result = add(2,6)
// console.log("RESULT : "+result)

function userlogIn(name = "sun") {
    // if(name === undefined){
    //     console.log("Please ,enter a user name")
    //     return
    // }
    if(!name){
        console.log("Please , enter a name")
        return
    }
    return `${name} just logged in`;
}

// console.log(userlogIn("Saujanya"))

/* function calculateCartPrice(...n1){
    return n1;
}

console.log(calculateCartPrice(100 ,200 ,300 ,400)) */

function calculateCartPrice(val1 , val2 , ...n1){
    return n1;
}

// console.log(calculateCartPrice(100 ,200 ,300 ,400))


const user = {
    username: "Saujanya",
    course : "cse"
}

function object(anyobject) {
    console.log(`Name is ${anyobject.username} and Course is ${anyobject.course}`)
}

// object(user)

/* object({
    username: "ALISHA",
    course:"eee"
}) */

    const array = [100, 200 , 300 , 400 , 500]

    function arr (getarray) {
        return getarray[1]
    }

    // console.log(arr(array))

    console.log(arr([100,300,500,700]))