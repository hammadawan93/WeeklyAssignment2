"use strict";
//billamount=unitsconsumed*rate(cost per unit)5
//let amountOfBill = 5000;
//let unitsConsumed = 110;
function taxAmount(billAmount, unitsConsumed) {
    console.log(`Bill amount is:Rs.${billAmount}`);
    if (unitsConsumed > 100 && unitsConsumed <= 200) {
        console.log(`Units consumed are greater than 100.`);
        console.log(`Tax is 10%`);
        let tax = 0.1 * billAmount;
        console.log(`Tax to pay:Rs.${tax}`);
        let billWithTax = billAmount + tax;
        console.log(`Bill to pay with tax:Rs.${billWithTax}\n`);
    }
    else if (unitsConsumed > 200 && unitsConsumed <= 500) {
        console.log(`Units consumed are greater than 200.`);
        console.log(`Tax is 15%`);
        let tax = 0.15 * billAmount;
        console.log(`Tax to pay:Rs.${tax}`);
        let billWithTax = billAmount + tax;
        console.log(`Bill to pay with tax:Rs.${billWithTax}\n`);
    }
    else if (unitsConsumed > 500) {
        console.log(`Units consumed are greater than 500.`);
        console.log(`Tax is 25%`);
        let tax = 0.25 * billAmount;
        console.log(`Tax to pay:Rs.${tax}`);
        let billWithTax = billAmount + tax;
        console.log(`Bill to pay with tax:Rs.${billWithTax}\n`);
    }
    else {
        console.log(`Consumed units must be greater than 100 or 200 or 500 to calculate tax amount.\n`);
    }
}
taxAmount(5000, 110);
taxAmount(5000, 210);
taxAmount(5000, 510);
taxAmount(5000, 98);
