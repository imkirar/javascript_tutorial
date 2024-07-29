// classes

class Userclass{
    constructor(username, email, password){
        this.username = username
        this.email = email
        this.password = password
    }
    encrptPassword(){
            return `${this.password}abc`
    }

    captalisedUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const chai = new Userclass("Anant", "anant@gmail.com", "pasword")

console.log(chai.encrptPassword());
console.log(chai.captalisedUsername());


