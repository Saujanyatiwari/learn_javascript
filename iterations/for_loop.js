// FOR LOOP


for (let a = 0; a < 10; a++) {
    console.log(a);
 if (a == 5) {
    break;
 }
}


for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
    //    console.log(i +" x" + j+ "=" + i*j)
    }
}


// break : breaks the loop out of the scope
// continue : skips that iterations and comes on next iteration withour breaking it 


let arr = ["batman" , "superman" , "flash"]

for (let a = 0; a < arr.length; a++) {
    console.log(arr[a]);
}