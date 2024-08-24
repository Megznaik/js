// singleton- koi bhi constructor se banate hai toh singleton object banta hai. It is never created by literals.
// Object.create- this is the way the constructor way of creating the object

// object literals

const mySym = Symbol("key1")

//in object, there is key and value scenario.
const JsUser = {
    name: "Megha",
    "full name": "Megha Naik",
    [mySym]: "mykey1", //this is the symbol
    age: 18,
    location: "Mumbai",
    email: "Megha@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])// this is the correct way of writing.
// console.log(JsUser[mySym])

JsUser.email = "Megha@chatgpt.com"
// Object.freeze(JsUser) //freeze will save the value and it cant be changed later
JsUser.email = "Megha@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());