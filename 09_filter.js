// const fruits = ['mango', 'apple', 'banana'];
const numbers = [1,2,3,4,5,6,7,8,9];


// how to return response in filter
// filter

// numbers.filter((num) => num > 4)
// const implicit_nums = numbers.filter((num) => num > 4)
// console.log(implicit_nums);
// output
// [ 5, 6, 7, 8, 9 ]

// const new_numbs = numbers.filter((numbs) => {
//    return numbs > 4
// })
// console.log(new_numbs);
// output
// [ 5, 6, 7, 8, 9 ]

// for each loop do not return response but we can use another trick to response
// const newNums = []
// numbers.forEach(
//     (num)=>{
//         if(num > 4)
//         {
//             newNums.push(num)
//         }
//     }
// )
// console.log(newNums);
// output
// [ 5, 6, 7, 8, 9 ]


// nested objects filter
const bio = [
    {
        name:"Abhishek",
        age:32,
        address:'Bhopal'
    },
    {
        name:"Anant",
        age:1,
        address:'Bhopal'
    },
    {
        name:"Ram",
        age:33,
        address:'Indore'
    }
]
// const user = bio.filter((bo)=>(bo.age === 32))
// console.log(user);
// { name: 'Abhishek', age: 32, address: 'Bhopal' } ]

// const user = bio.filter((bo)=>(bo.address == "Bhopal"))
// console.log(user);
// [
//   { name: 'Abhishek', age: 32, address: 'Bhopal' },
//   { name: 'Anant', age: 1, address: 'Bhopal' }
// ]

// const nums = numbers.map((num)=>{return num+10})
// console.log(nums);
// [
//     11, 12, 13, 14, 15,
//     16, 17, 18, 19
//   ]

// chaning with map

// const nums = numbers
// .map((num)=> num * 10)
// .map((num)=> num + 1)
// .filter((num)=> num >= 40)

// console.log(nums);

// reduce

// const mytotal = numbers.reduce(function(accVal, currentVal){
//     console.log(`acc: ${accVal} and current value ${currentVal}`);
//     return accVal + currentVal
// }, 0)
// console.log(mytotal);
// acc: 0 and current value 1
// acc: 1 and current value 2
// acc: 3 and current value 3
// acc: 6 and current value 4
// acc: 10 and current value 5
// acc: 15 and current value 6
// acc: 21 and current value 7
// acc: 28 and current value 8
// acc: 36 and current value 9
// 45

// const mytotal = numbers.reduce((accVal, currentVal)=> accVal+currentVal, 0)
// console.log(mytotal);
// 45

const items = [
    {
        name:"Bat",
        price:500
    },
    {
        name:"Ball",
        price:100
    },
    {
        name:"Helmat",
        price:2200
    },
]

// get me total of all items

const totalPrice = items.reduce((accVal, currentVal) => accVal + currentVal.price, 0)
console.log(totalPrice);
