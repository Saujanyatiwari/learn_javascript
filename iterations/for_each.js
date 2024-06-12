// for each loop


const coding = ["js" , "java" , "cpp" , "ruby"]


// for each using normal function
coding.forEach( function (i){
    // console.log(i);
})


// for each using arrow function
coding.forEach( (val) => {
    // console.log(val);
})


// for each using already declared functions
function printme(item){
    // console.log(item);
}

// coding.forEach(printme)

coding.forEach( (item , index, arr) => {
    // console.log(item , index , arr);
})


//array of objects 

const codes = [
    {
        lang : "Javascript",
        name : "js"
    },
    {
        lang : "cascading style sheet",
        name : "css"
    },
    {
        lang : "hyper text markup langauge",
        name : "html"
    }
]

codes.forEach( (item) => {
    console.log(item.name);
})