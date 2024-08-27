// Immediately Invoked Function Expressions (IIFE)
//---IMP---why we use iife?There is a problem of Global scope pollution most of the time.
//So, to remove the pollution created by Global scope variable/content, we use iife.

(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => { //unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
} )('megha')

//---IMP---IF asked to write two IIFE then dont forget to put ; after the 1st IIFE function



