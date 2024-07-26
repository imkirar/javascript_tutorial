// immediately invoked function expressions(IIFE)
// to remove polution of global scope we use iffe function

(function chaiorcode(){
console.log("DB coonected");
})();

// Semicolen is requred to end iffe function


// how to write a arrow function in iffe

((name)=>{
    console.log(`this is connected ${name}`)
})("Anant bhai");
