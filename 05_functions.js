function sayMyName()
{
    console.log("Abhishek");
}
// sayMyName()

function Addition(number1, number2) // get parameters
{
    console.log(number1+number2);
}

// pass argument
// const result = Addition(1, 2)
// Addition(1, "a")
// console.log("result:", result);
// output
// result: undefined

function AdditionFunction(number1, number2) // get parameters
{
//    let result = number1 + number2
//    return result
        // or
    return number1 + number2
}
const result = AdditionFunction(1, 2)
// console.log("result:", result);

function userLoginMessage(username){
    if(!username)
    {
        console.log("Please enter a username");
        return
    }
    else
    {
        return `${username} just logged in`
    }
 
}

// console.log(userLoginMessage());
// Please enter a username
// undefined

// rest operator caluclateValues(...num1)
// caluclateValues(val1. val2, ...num1).  [ 300, 2000 ]

function caluclateValues(val1, val2, ...num1)
{
    return num1
}

// console.log(caluclateValues(100, 200, 300, 2000))

// output
// [ 100, 200, 300 ] retuen a array

const user = {
    name:"Anant",
    price:6033
}

function handleObjects(anyobject)
{
    console.log(`Username is ${anyobject.name} and price is ${anyobject.price}`);
}
// need to check for type safety
// handleObjects(user) 

// handleObjects({
//     name:"Anant",
//     price:564654
// })

const myNewArray = [100, 2000, 33, 500]

function returnSecondValue(getArray){
    return getArray[2]
}


// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([100, 2000, 33, 500]));

// outputs
// Username is Anant and price is 564654
// 33

// scope of variables in nested function

function one(){
    const username= "abhishek"
    function two(){
        const website= "youtube"
        console.log(username);
    }
    // console.log(website);
    two()
    
}
 one()

//  function hosting, execution contest

// console.log(fun1(5));
function fun1(num){
    return num + 1
}

const fun2  = function(num){
    return num + 2
}
// console.log(fun2(5));
 
