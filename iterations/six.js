 const coding = ["js" , "css" , "html" , "rb"]


const values =  coding.forEach( (item) => {
    // console.log(item);
    return item ;
})
// console.log(values);

// FOR EACH LOOP DOENST RETURN VALUES   


const arr = [1,2,3,4,5,6,7,8,9,10]

// const newArr = arr.filter( (item) => item > 5 )


/* 
const newArr = arr.filter( (item) => {
    return item > 5 
}) */

// console.log(newArr);

// whenever paranthes is used so use return keyword 

/* const newArr =[]

arr.forEach( (items) => {
    if(items>5){
        newArr.push(items)
    }
})
console.log(newArr); */


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const user = books.filter((bk) => bk.genre === 'Fiction')

  const bookie = books.filter((bk)=> bk.publish>1995 && bk.genre === "History")

//   console.log(user)
  console.log(bookie)