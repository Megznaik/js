const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length); -- toString converts it to string
// console.log(balance.toFixed(1)); -- toFixed is used to give the decimal numbers.

const otherNumber = 123.8966 

// console.log(otherNumber.toPrecision(4)); ---it will give 4 digits only. 

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); -- it gives commas to understand the zeros

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random()); // it will give random no between 0 & 1
console.log((Math.random()*10) + 1);// it will shift to right by 1 position. and just to be safe we are adding 1 if the answer is 0.
console.log(Math.floor(Math.random()*10) + 1); //it should be min 1 value.

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min) //it should be minimum 10 value.

