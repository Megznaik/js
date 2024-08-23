// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);
//The reason is that an equality check == and comparison > < >= <= work differently.
//Comparisons converts null to number treating it as 0.
//That's why (13) null >= 0 is true and (11) null > 0 is false


// === 
// here it checks the datatype 
console.log("2" === 2);