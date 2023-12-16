"use strict";
function leapYearOrNot(year) {
    if (year % 4 == 0 && year % 100 != 0) {
        console.log(`${year} is a leap year.`);
    }
    else if (year % 400 == 0) {
        console.log(`${year} is a leap year.`);
    }
    else {
        console.log(`${year} is not a leap year.`);
    }
}
leapYearOrNot(2000);
leapYearOrNot(1900);
leapYearOrNot(2024);
