const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // it will return array in array
//push makes changes in the existing array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

//concat makes changes in new array
// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros); // it will give both the arrays in one array

//instead of concat, we can use spread ...
const all_new_heros = [...marvel_heros, ...dc_heros]

// console.log(all_new_heros); // it will give both the arrays in one array

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
// flat is used to simplify the multiple inner arrays to a single array 
const real_another_array = another_array.flat(Infinity) 
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))//check whether its an array
console.log(Array.from("Hitesh")) //converts it to array
console.log(Array.from({name: "hitesh"})) // interesting ---it will give empty array [].
//It should make array of keys only or values only

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); //it will create array of all the scores