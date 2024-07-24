// using this operator

const user = {
    username: "Anant",
    price: 666,
    welocomeMessage: function(){
        console.log(`${this.username} , welcome to website`);
        
    }
}

// user.welocomeMessage()
// user.username = "same"
// user.welocomeMessage()

// output
// Anant , welcome to website
// {
//   username: 'Anant',
//   price: 666,
//   welocomeMessage: [Function: welocomeMessage]
// }
// same , welcome to website
// {
//   username: 'same',
//   price: 666,
//   welocomeMessage: [Function: welocomeMessage]
// }

// console.log(this);
// output
// {}

// function coffee(){
//     let username = "anant"
//     console.log(this.username);
// }

// const coffee = function(){
//     let username = "anant"
//     console.log(this.username);
// }

// coffee()

// how to create an arrow function

const odoo = () => {
 let username ="anant"
 console.log(this.username);
}
// odoo()

// so you can not user this operator in functions.
// () => {}
// const addtwo = (num1, number1) => {
// return num1+number1
// }
// console.log(addtwo(2, 5))



// implecit return
// const addtwo = (num1, number1) => num1+number1
// console.log(addtwo(2, 5))

// const addthree = (num1, number1) => (num1+number1)
// console.log(addtwo(2, 5))

// return object using function
// const returnobject = (num1, number1) => ({ username :"anant"})
// console.log(returnobject())



