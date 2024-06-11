// SWITCH STATEMENTS

// SYNATX

/* switch (key) {
    case value:
        
        break;

    default:
        break;
} */

const week = 10

switch(week){
    case 1:
        console.log("Monday");
        break;
    case 2:  // SHORTCUT TO copy cases is  ALT+SHIFT+ DOWN-ARROW KEY
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
    console.log("not a week day number");
    break;
}



const weekName =  "MON"

switch(weekName){
    case "MON":
        console.log("Monday");
        break;
    case "TUES":
        console.log("Tuesday");
        break;
    case "WEDNES":
        console.log("Wednesday");
        break;
        default:
    console.log("not a week day number");
    break;
}