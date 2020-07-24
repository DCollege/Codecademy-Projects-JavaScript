//The forecast for today will stay constant at 293 Kelvin
const kelvin = 0;
//celsius is kelvin - 273.
const celsius = kelvin - 273;
//Calculating fahrenheit requires us to use the below formula
let fahrenheit = celsius* (9/5) + 32;
//Line 10 rounds down the fahrenheit number from a decimal
fahrenheit = Math.floor(fahrenheit);
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
