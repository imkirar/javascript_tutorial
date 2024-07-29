function SetUsername(username){
    // complex DB calls
    this.username = username
    // console.log("called");
}

function createUser(username, email, password)
{
    SetUsername.call(this, username) // define this keyworc and .call for serusername function
    // define execution contest
   this.email = email
   this.password = password
}

const user = new createUser("Anant", "anant@gmail.com", "123456")
console.log(user);