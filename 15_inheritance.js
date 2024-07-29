// 15_inheritance

class userclass{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`username is ${this.username}`);
    }
}

class teacher extends userclass{ // using extends keyword
    constructor(username, email, password){
        super(username) // using super keyword
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course added by ${this.username}`);
    }
}

// create an object
const CreateACourse = new teacher("anant", "anant@gmail.com", "password");
const CreatenewCourse = new userclass("ananta")
 console.log(CreateACourse.logMe());
console.log(CreatenewCourse.logMe());
console.log(CreateACourse === CreatenewCourse);
console.log(CreateACourse instanceof userclass);