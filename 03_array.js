const alphabets = ["a","b","c","d"]
const numbers = ["1","2","3","4"]
const cases = ["car","bike","bus","train"]

// how to add two arrays using push
//  alphabets.push(numbers)
//  console.log(alphabets);

//  output [ 'a', 'b', 'c', 'd', [ '1', '2', '3', '4' ] ]

// how to add two arrays using concat
// const concatedArray = alphabets.concat(numbers);
// console.log(concatedArray);

// output[
//     'a', 'b', 'c',
//     'd', '1', '2',
//     '3', '4'
//   ]

// how to add two arrays using spred operator

const spredArray = [...alphabets, ...numbers, ...cases]
console.log(spredArray);

// output

// [
//     'a',    'b',   'c',
//     'd',    '1',   '2',
//     '3',    '4',   'car',
//     'bike', 'bus', 'train'
//   ]