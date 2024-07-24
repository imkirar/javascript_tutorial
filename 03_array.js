const alphabets = ["a","b","c","d"]
const numbers = ["1","2","3","4"]
const cases = ["car","bike","bus","train"]

// how to add two arrays using push
//  alphabets.push(numbers)
//  console.log(alphabets);

//  output [ 'a', 'b', 'c', 'd', [ '1', '2', '3', '4' ] ]

// how to add two arrays using concat
const concatedArray = alphabets.concat(numbers);
console.log(concatedArray);

// output[
//     'a', 'b', 'c',
//     'd', '1', '2',
//     '3', '4'
//   ]

// how to add two arrays using spread operator

const spreadArray = [...alphabets, ...numbers, ...cases]
console.log(spreadArray);

// output

// [
//     'a',    'b',   'c',
//     'd',    '1',   '2',
//     '3',    '4',   'car',
//     'bike', 'bus', 'train'
//   ]

// how to add two arrays using flat
const flatArray = [1,2,3,[4,5,2],5,[1,2,3,],5]
const realflatArray = flatArray.flat(Infinity)

console.log(realflatArray);

// Array.isArray
// Array.from
// Array.of