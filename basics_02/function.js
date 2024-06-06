

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

console.log(userlogIn("Saujanya"))