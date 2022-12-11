console.log("\n")
console.log("*-----------12.let and const-------------*")
console.log("\n")
let myName = "Aniruddha";
console.log(myName);

myName = "Alex";
console.log(myName);

const my = "nana";
console.log(my);

// | gives TypeError: Assignment to constant variable.
// V  
// my = "nana";
// console.log(myName);


console.log("\n")
console.log("*-----------13.Arrow Functions-------------*")
console.log("\n")


function x() {
    console.log("I am x");
}
x();

y = () => {
    console.log("i am y");
}
y();

//as we have only one argument therefore there is no need to give a paranthesis

const multiply = number => number * 2;
console.log(multiply(4));
console.log(multiply(5));

console.log("\n")
console.log("*-----------14.Exports and Imports-------------*")
console.log("\n")

console.log("Refer notes");

console.log("\n")
console.log("*-----------15.Classes--------------------------*")
console.log("\n")

console.log("Refer notes");

class Person {
    name = "Aniruddha";
    call = () => {
        console.log("Hi how are you !!");
    }
}

const myPerson = new Person();
myPerson.call();
console.log(myPerson.name);

console.log("\n New Example using inheritance\n");

class Human {
    constructor() {
        this.gender = "Male";
    }
    printGender() {
        console.log(this.gender);
    }
}

class Man extends Human {
    constructor() {
        super();   // if this not used then --> ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
        this.name = "Aniruddha";
    }
    printName() {
        console.log(this.name);
    }
}

const M1 = new Man();
console.log(M1.printName()); console.log(M1.printGender());



console.log("\n")
console.log("*-----------16.Properties and Methods--------------------------*")
console.log("\n")


console.log("Just copy paste thee above example and do the changes as per mentioned in the notes which were taken\n");

class Human1 {
    gender = "Male";
    printGender = () => {
        console.log(this.gender);
    }
}

class Man1 extends Human1 {
    name = "Aniruddha";
    printName = () => {
        console.log(this.name);
    }
}

const M2 = new Man1();
console.log(M2.printName()); console.log(M2.printGender());


console.log("\n")
console.log("*-----------17.Spread and the Rest operators--------------------------*")
console.log("\n")

const numbers = [1, 2, 3, 4];
const newNumbers = [...numbers, 45, 47, 25];
console.log(newNumbers);

const person = {
    name: 'Aniruddha',
}

const newPerson = {
    ...person,
    age: 21,
    property: '$1500B'
}
console.log(newPerson);

console.log("\n")
console.log("*-----------18.Destructuring--------------------------*")
console.log("\n")

// { name } = { name: 'Aniruddha', age = 21 };
// console.log(name);

const numbe = [1, 2, 3];
[num1, , num3] = numbe;

console.log(num1, num3);

//'exp
const newarrr = [num1] = numbe;
console.log(newarrr, num1);

console.log("\n")
console.log("*-----------19.References and Primitive Types--------------------------*")
console.log("\n")



console.log("\n")
console.log("*-----------20.Refreshing More Array Functions--------------------------*")
console.log("\n")

const numb = [1, 2, 3];

const doubenums = numb.map(
    //arro wfn simple
    (num) => {
        return num * 2;
    }
);
console.log(doubenums);