"use strict";
//let number = 2;
//using function
console.log(`Using function:`);
function dayOfTheWeek(number) {
    if (number == 1) {
        console.log(`First day of the week is Monday.`);
    }
    else if (number == 2) {
        console.log(`Second day of the week is Tuesday.`);
    }
    else if (number == 3) {
        console.log(`Third day of the week is Wednesday.`);
    }
    else if (number == 4) {
        console.log(`Fourth day of the week is Thursday.`);
    }
    else if (number == 5) {
        console.log(`Fifth day of the week is Friday.`);
    }
    else if (number == 6) {
        console.log(`Sixth day of the week is Saturday.`);
    }
    else if (number == 7) {
        console.log(`Seventh day of the week is Sunday.`);
    }
    else {
        console.log(`Invalid input! Days can be only from 1 to 7.`);
    }
}
dayOfTheWeek(3);
dayOfTheWeek(6);
dayOfTheWeek(7);
dayOfTheWeek(1);
console.log(`Using switch:`);
let day = 8;
switch (day) {
    case 1:
        console.log(`First day of the week is Monday.`);
        break;
    case 2:
        console.log(`Second day of the week is Tuesday.`);
        break;
    case 3:
        console.log(`Third day of the week is Wednesday.`);
        break;
    case 4:
        console.log(`Fourth day of the week is Thursday.`);
        break;
    case 5:
        console.log(`Fifth day of the week is Friday.`);
        break;
    case 6:
        console.log(`Sixth day of the week is Saturday.`);
        break;
    case 7:
        console.log(`Seventh day of the week is Sunday.`);
        break;
    default:
        console.log(`Invalid input! Days can be only from 1 to 7.`);
        break;
}
