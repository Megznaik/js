// array
//array size is resizable, it can have mix datatypes.
//arrays are non-primitive
//array are not associative arrays
//IMP- arrays copy operations create shallow copies. Shallow copy of an object is a copy
//whose properties share same reference as those of source object from which the copy was made.
const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) //it will shift the all the values and add 9 in the start
// myArr.shift() // it will remove the 9 from the start

// console.log(myArr.includes(9)); //returns boolean type
// console.log(myArr.indexOf(3)); //returns the index value

// const newArr = myArr.join() //it will convert it to string

// console.log(myArr);
// console.log( newArr);


// slice, splice- IMP- for interview---------------------------

console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3) //returns the section of array between 1&2 and it does not change the orginal array
console.log(myn1); // o/p is [1,2]

console.log("B ", myArr); 
const myn2 = myArr.splice(1, 3) //returns the section of array between 1&3 and it also changes the orginal array. it removes it from the array
console.log(myn2); // o/p is [1,2,3]
console.log("C ", myArr);// o/p is [0,4,5]