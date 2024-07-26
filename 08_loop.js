const fruits = ['mango', 'apple', 'banana'];
const names = [1,2,3,4,5,6];


// for loop
// for (let i = 0; i < array.length; i++) {
//     const element = array[i]
//     console.log(element)
// }

// -------------

// Nested for loop
// for (let i = 0; i < 10; i++) {
//     console.log("outer loop", i)
//     for (let j = 0; j < 2; j++) {
//         console.log("inner loop", j)
        
//     }
// }

// -------------

// while loop
// let index = 0;
// while (index < array.length) {
//     console.log(`value of index ${array[index]}`);
//     index = index+1;
// }

// -------------

// do-while loop
// let count = 11
// do {
//     console.log(`score value is ${count}`);
//     count++
// } while (count <= 10);

// -------------

// for of loop
// for (const items of fruits) {
//     console.log(items);
// }

// const message = "My name is Anant"
// for (const chars of message) {
//     console.log(`characters in message ${chars}`)
// }

// MAP

const fruitsName = new Map()
fruitsName.set('M', "MANGO")
fruitsName.set('A', "APPLE")
fruitsName.set('B', "BANANA")
// console.log(fruitsName);
// output
// Map(3) { 'M' => 'MANGO', 'A' => 'APPLE', 'B' => 'BANANA' }

// for (const key of fruitsName) {
//     console.log(key);
// }
// output
// [ 'M', 'MANGO' ]
// [ 'A', 'APPLE' ]
// [ 'B', 'BANANA' ]

// for (const [key, value] of fruitsName) {
//     console.log(key, value);
// }
// // output
// M MANGO
// A APPLE
// B BANANA


// const lang = {
//     'rb':'ruby',
//     'js':'javascript',
//     'cpp':"C++",
//     'php':"PHP"
// }
// for (const key in lang) {
//     console.log(`${key} shortcut is for ${lang[key]}`)
// }
// output
// rb shortcut is for ruby
// js shortcut is for javascript
// cpp shortcut is for C++
// php shortcut is for PHP

// for (const key in fruitsName) {
//     console.log(`${key} shortcut is for ${fruitsName[key]}`)
// }
// output
// nothing


// forEach
// with arrow fn
// fruits.forEach(element => {
//     console.log(element);
// });
// output
// mango
// apple
// banana

// fruits.forEach( function(val){
//     console.log(val);
// })

// output
// mango
// apple
// banana

// fruits.forEach((element)=>{
//     console.log(element);
// })
// output
// mango
// apple
// banana

// function output(item){
//     console.log(item);
// }
// fruits.forEach(output)

fruits.forEach((item, index, array)=>{
    console.log(item, index, array);
})
// output
// mango 0 [ 'mango', 'apple', 'banana' ]
// apple 1 [ 'mango', 'apple', 'banana' ]
// banana 2 [ 'mango', 'apple', 'banana' ]

// nested foreach objects iterations
// const myObj = [
//     {
//         name:"Abhishek",
//         age:32
//     },
//     {
//         name:"Anant",
//         age:1
//     },
//     {
//         name:"Ram",
//         age:33
//     }
// ]
// myObj.forEach((item)=>{
//     console.log(item.name);
// })

// output
// Abhishek
// Anant
// Ram