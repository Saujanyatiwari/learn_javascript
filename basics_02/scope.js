
// var c= 400
let a = 500
if(true) {
    let a = 10 
    const b = 20
    // c = 30
    // console.log("Inner " + a)
}

// console.log(a);
// console.log(b);
// console.log(c);


// WE DONT USE VAR BECAUSE IT CHANGES AND STORES THE VALUE EVEN WHEN OUT OF SCOPE => {}

function one() {
    const userName = "saujanya"

    function two() {
        const website = "leetcode"
        // console.log(userName);
    }
    // console.log(website) DOESNT WORK BECAUSE OUT OF SCOPE
    // two()
}

// one()

if(true) {
     const name = "Saujanya"

     if(name === "Saujanya"){
        const website = "wikipedia"
        // console.log(name + website)
     }
    //  console.log(website) DOESNT WORK BECAUSE OUT OF SCOPE
}
// console.log(name) DOESNT WORK BECAUSE OUT OF SCOPE

//++++++++++++++++++++INTERESTING+++++++++++++++++++++++++++

console.log (addOne(5)) // it can go above even 


function addOne (num) {
return num+1 
}


const addTwo = function(num) {  // exrpression of a function into a variable
    return num+2
}

console.log(addTwo(6))   // it would remain below intialisation only 
