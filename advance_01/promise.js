// const promiseone = new Promise (function(resolve , reject){
//     setTimeout((e) => {
//         resolve()
//         console.log("async task is completed")
//     },1000);
// })

// promiseone.then(function(){
//     console.log("issue resolved")
// })


//another way without using varaiables is 

// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("async task 2");
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("async task 2 resolved")
// })


// const promisetwo = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         resolve({
//             username: "saujanya",
//             email : "abc@gmail.com"
//         })
//     },1000)
// })

// promisetwo.then(function(user){
//     console.log(user)
// })



const promisethree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let err = false
        if(!err){
            resolve({
                username: "saujanya",
                email : "abc@gmail.com"
            })
        }
        else{
            reject("something went wrong");
        }
    })
})

promisethree
.then(function(user){
    console.log(user)
    return user.username
})
.then(function(username){
    console.log(username)
})
.catch(function(err){
    console.log(err);
})
.finally (() => {
    console.log("the promise is either resolved or rejected")
})

// const promisefour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = true
//         if(!error){
//             resolve({
//                 username : "saujanya",
//                 password: "123"
//             })
//         }
//         else{
//             reject("ERROR : something went wrong")
//         }
//     })
// })

// async function composePromise(){
//     try {
//         const response = await promisefour
//         console.log(response);
//     }
//      catch (error) {
//         console.log(error)
//     }
// }

// composePromise();


// async function getallUsers (){
//    try {
//     const response = await fetch('https://api.github.com/users/saujanyatiwari');
//     const data = await response.json()
//     console.log(data)
//     } 
//     catch (error) {
//     console.log("error")
//     }
// }
// getallUsers()


fetch('https://api.github.com/users/saujanyatiwari')
.then((response) => {
    return response.json()
})
.then((data) => {
    console.log(data);
})
.catch((error) => {
    console.log("something went wrong");
})