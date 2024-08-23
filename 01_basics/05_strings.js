const name = "megha"
const repoCount = 50

// console.log(name + repoCount + " Value"); ----not a good pratice

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('megha-mn-com') //--- can also declare the variable like creating an object in other languages

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2)); // gives the character at position 2
console.log(gameName.indexOf('t')); // gives the position of character t 

const newString = gameName.substring(0, 4) //in substring, we cant use negative number
console.log(newString);

const anotherString = gameName.slice(-8, 4) //In slice, we can use negative number
console.log(anotherString);

const newStringOne = "   megha    "
console.log(newStringOne);
console.log(newStringOne.trim()); //there more types of trim. trimEnd/trimright and trimStart/trimLeft

const url = "https://megha.com/megha%20naik"

console.log(url.replace('%20', '-')) // it will replace %20 by -

console.log(url.includes('sundar'))//gives a boolean value- true or false

console.log(gameName.split('-')); //it will split on the basis of '-'

// NOTE= Above, we have used many functions to find it works but it has not changed the value of gameName which was given initially.
// Because gameName is a String and it is primitive datatype. 