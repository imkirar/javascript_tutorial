// objects

// singleton object
// const tinderUser = new Object()

// literals object
// assign empty object
// const jsUser= {}

// assign object data
// How to define a symbol in objects and access it.

const mySymbol = Symbol("sym1")
const jsUser = {
    name: "abhishek",
    email:"abhishek@gmail.com",
    age:18,
    [mySymbol]:"symbol details",
    location:"Bhopal",
    "full name":"abhishek kirar",
    isloggedIn:false,
    lastLoginDays:["sunday", "Tuesday"]
}

jsUser.email = "abhishek@yahoo.com"

// console.log(jsUser.name);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymbol]);

// How to freez changes in the object
// Object.freeze(jsUser)

// console.log(jsUser.email); // but change will not apply because object is freez

// functions in objects

jsUser.greeting = function(){
    // string interpolation
    console.log(`Hello js user ${this.name}`);
}

// console.log(jsUser.greeting);

// output undefined

// console.log(jsUser.greeting());

// output
// Hello js user abhishek
// undefined

// object is freez abobe at line 30, first comment that

const tinderUser = {}
tinderUser.id = "6fd66ff"
tinderUser.email = "abhi"
tinderUser.isloggedIn = false

// console.log(tinderUser);

// how to create a nested object
const regularUser = {
    email: "anant@gmail.com",
    fullname:{
        usserFullName:{
            firstName:"Anant",
            lastName:"Kirar"
        }
    }
}

// console.log(regularUser.fullname.usserFullName.firstName);
// console.log(regularUser.fullname.usserFullName.lastName);

// How to merge two objects

const object1 = {1:"a", 2:"b"};
const object2 = {3:"c", 4:"d"};
const object3 = {5:"e", 6:"f"};

// Merge two objects using spread
const object4 = {...object1, ...object2}
// console.log(object3);
// output
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// Merge objects using object.assign
// target and source objects 

const object5 = Object.assign({}, object1, object2, object3)

// console.log(object5);
// output
// { '1': 'a', '2': 'b', '3': 'c', '4': 'd', '5': 'e', '6': 'f' }

// How to access values from nested users

const users = [
    {
        name:"Anant"
    },
    {
        name:"Anant Meenakshi"
    },
    {
        name:"Anant Meenakshi Patel"
    }
]

// console.log(users[1].name)

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// output
// { id: '6fd66ff', email: 'abhi', isloggedIn: false }
// [ 'id', 'email', 'isloggedIn' ]
// [ '6fd66ff', 'abhi', false ]
// [ [ 'id', '6fd66ff' ], [ 'email', 'abhi' ], [ 'isloggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isloggedIn'));
// output
// true


// How to de structure an object
const course = {
    coursename: "js",
    price: "999",
    courseInstructor: "Hites"
}

const {courseInstructor} = course
console.log(courseInstructor);

// API concept in javascript
// json java objects notation
// {
//     "name":"Anant",
//     "age":8,
//     "city":"bhopal"
// }

// next functions and scopes






