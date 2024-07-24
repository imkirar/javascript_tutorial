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

console.log(userLoginMessage());
// Please enter a username
// undefined
