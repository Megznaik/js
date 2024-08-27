const user = {
    username: "megha",
    price: 999,
    //this keyword is used for current context
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }

}

// user.welcomeMessage() // o/p: megha, welcome to website
// user.username = "sam"
// user.welcomeMessage() // o/p: sam, welcome to website

// console.log(this); 
//---IMP: when we run the console.log(this) by commenting the above 12,13,14 statements. the current context is coming as: o/p is {}.
//---Because we are in node environment.
//---When we run the same code in browser, the global object is window.

// function chai(){
//     let username = "megha"
//     console.log(this.username); // o/p : undefined
//---IMP--- this keyword only works in object and not in Function.
// }

// chai()

// const chai = function () {
//     let username = "megha"
//     console.log(this.username);
// }

// ARRROW FUNCTION
const chai =  () => {
    let username = "megha"
    console.log(this);
}


// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 //explicit return
// }

// const addTwo = (num1, num2) =>  num1 + num2 //implicit return

// const addTwo = (num1, num2) => ( num1 + num2 ) // if you are using {} then you have to write return but if you are using () then no need of return

const addTwo = (num1, num2) => ({username: "megha"}) // for returning the object, you have to write inside ()


console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()