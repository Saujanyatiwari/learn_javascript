const arr = [1,2,3]



// const sum = arr.reduce( function (accu , value){
//     console.log(accu);
//     console.log(value);
//     return accu+value

// },0)


const sum = arr.reduce ((accu ,curval)=>accu+curval ,0)

// console.log(sum);



const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]


const cart = shoppingCart.reduce( (accu , item) => accu+item.price , 0)

console.log(cart)