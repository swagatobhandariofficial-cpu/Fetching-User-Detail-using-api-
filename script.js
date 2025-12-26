let student = {
    name: "swagato",
    email: "s@gmail.com",
    login: function(){
        console.log("User loggged in")
    },
};
student.login();

// cleaner using class
class users {
    constructor(name,email){
        this.name = name;
        this.email= email;
    }
    login(){
        console.log("User loggged in")
    };
}
let user1 = new users("swagato","s@gmail.com");
let user2 = new users("tomy","tom@gmail.com");
let user3 = new users("prajakta","pros@gmail.com");


// product object that contains name and price and has a method which returns the final price after discount

let object = {
    name:"cap",
    price: 7730,
    discountedPrice: function(dis){
        return this.price - dis;
    },
};

console.log(object.discountedPrice(1000));

//----------Section 2------------------

class car{
    constructor(brand,speed){
        this.brand=brand;
        this.speed=speed;
    }

    drive(){
        console.log(this.brand + "--" + this.speed);
    }
}

let car1=new car("Hyundai",180);
let car2=new car("Maruti",160);

//---------Section 3-------------------

class students{
    constructor(name,roll){
        this.name=name;
        this.roll=roll;
    }
    introduce(){
        console.log(this.name+ " " + this.roll);
    }
}

let st1= new students("swagato", 1088);


//sec-3(ii)

let obj={
    sayMyName: function(){
        console.log(this);
    },
    sayArrowName: ()=>{
        console.log(this);
    },
}
obj.sayMyName();
obj.sayArrowName();

//---------Section 4-------------------
//call
function abcd(){
    console.log(this.name);
}
let obj2 ={
    name: "swagato",
};
abcd.call(obj2);

//apply
function abcd(a,b,c,d){
    console.log(this.name);
}
let obj3 ={
    name: "tomy",
};
abcd.apply(obj3,[1,2,3,4]);

//bind
function abcd(a,b,c,d){
    console.log(this.name);
};
let obj4 ={
    name: "prajakta",
};
let fnc=abcd.bind(obj4);
fnc();