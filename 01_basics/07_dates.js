// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate); //IMP-its an object

// let myCreatedDate = new Date(2023, 0, 23) // months starts from 0. so, the date is 23rd jan 2023
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

//------IMP- for interview-------
let myTimeStamp = Date.now() 

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);//since it starts from 0. so, 1 is added.
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
    
})