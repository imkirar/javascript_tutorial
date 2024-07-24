const myName = "Abhishek"
console.log(myName);

const mychars = new String(myName)
console.log(mychars);

const mychars2 = new String("Hemant-patel")
console.log(mychars2);
console.log(mychars2.length);
console.log(mychars2.__proto__);
console.log(mychars2.toUpperCase());
console.log(mychars2.charAt(2));
console.log(mychars2.indexOf('t'));

const newName = mychars2.substring(8, 1);
const newName2 = mychars2.slice(0, 6);
// trim() trimstart trimend
// replace
console.log(newName);
console.log(newName2);

