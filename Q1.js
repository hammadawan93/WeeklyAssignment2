"use strict";
//f=(9/5*c)+32
//c=5/9(f-32)
let temperatureInCelcius = 30;
let celciusToFahrenheit = (9 / 5) * temperatureInCelcius + 32;
console.log(`${temperatureInCelcius}℃  in Fahrenheit is=${celciusToFahrenheit}℉`);
let temperatureInFahrenheit = 86;
let fahrenheitToCelcius = (5 / 9) * (temperatureInFahrenheit - 32);
console.log(`${temperatureInFahrenheit}℉  in Celcius is=${fahrenheitToCelcius}℃`);
