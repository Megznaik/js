const coding = ["js", "ruby", "java", "python", "cpp"]

// coding.forEach( function (val){
//     console.log(val);
// } ) // forEach ask for callback function. So, how to write callback function?
// function (val){} == no need of function name. give an argument and then {}.
// In above case, val is the each item from coding array.

// another way of writing forEach as shown below:
// coding.forEach( (item) => {
//     console.log(item);
// } )

//one more way:
// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

//it can take more than 1 argument
// coding.forEach( (item, index, arr)=> {
//     console.log(item, index, arr);
// } )

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )