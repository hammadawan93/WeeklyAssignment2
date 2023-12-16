"use strict";
//let number = 111;
/*function divisibleBy3(number: number) {
  if (number % 3 == 0) {
    console.log(`${number} is divisible by 3`);
  } else {
    console.log(`${number} is not divisible by 3`);
  }
}
divisibleBy3(111);
divisibleBy3(4);

function divisibleBy5(number: number) {
  if (number % 5 == 0) {
    console.log(`${number} is divisible by 5`);
  } else {
    console.log(`${number} is not divisible by 5`);
  }
}
divisibleBy5(50);
divisibleBy5(9);

function divisibleBy3And5(number: number) {
  if (number % 3 == 0) {
    if (number % 5 == 0) {
      console.log(`${number} is divisible by both 3 and 5`);
    } else {
      console.log(`${number} is divisible by only 3 and not 5`);
    }
  } else if (number % 5 == 0) {
    if (number % 3 == 0) {
      console.log(`${number} is divisible by both 3 and 5`);
    } else {
      console.log(`${number} is divisible by only 5 and not 3`);
    }
  } else {
    console.log(`${number} is not divisible by both 3 and 5`);
  }
}
divisibleBy3And5(15);
divisibleBy3And5(33);
divisibleBy3And5(20);*/
function numberCheck(number) {
    if (number % 3 == 0) {
        console.log(`${number} is divisible by 3`);
    }
    if (number % 5 == 0) {
        console.log(`${number} is divisible by 5`);
    }
    if (number % 3 == 0) {
        if (number % 5 == 0) {
            console.log(`${number} is divisible by both 3 and 5`);
        }
        else if (number % 5 == 0) {
            if (number % 3 == 0) {
                console.log(`${number} is divisible by both 3 and 5`);
            }
        }
    }
    if (number % 3 != 0 && number % 5 != 0) {
        console.log(`${number} is not divisible by 3 or 5 or both.`);
    }
}
numberCheck(3);
numberCheck(5);
numberCheck(15);
numberCheck(18);
numberCheck(20);
numberCheck(7);
