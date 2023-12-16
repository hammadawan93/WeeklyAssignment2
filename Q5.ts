function ageCategory(age: number) {
  if (age >= 0 && age <= 12) {
    console.log(`Child!`);
  } else if (age >= 13 && age <= 19) {
    console.log(`Teenager!`);
  } else {
    console.log(`Adult!`);
  }
}
ageCategory(15);
