// properties - props

class User{
    constructor(username){
        this.username = username    
    }
    logMe(){
        console.log(`Username is ${this.username}`);
    }
   static cereateId(){
        return `112`
    }
}

const myId = new User("Anant")
// console.log(myId.cereateId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const createUser = new Teacher("Meena", "meena@gmail.com")
const id = new User('565')
console.log(createUser.cereateId());
