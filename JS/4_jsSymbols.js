//statement terminators are optional in JavaScript, 
// but it's a good practice to use them consistently.
let firstName = "John";
let lastName = "Doe"

// console.log(firstName);
// console.log(lastName);

//curly braces are used to define blocks of code or objects
// const person = {name: "Jane", age: 25};
// console.log(person);

// if(true) {
//     console.log("This is true");
//     console.log("Curly braces define a block of code");
// }

//The colon is used in object literals to separate keys and values
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020
};

//Parentheses are used in function calls and expressions
function greet(name) {
    return console.log("Hello, " + name + "!");
} 

greet("Alice"); //function call with parentheses

//Parenthese are also used to group expressions
let result = (5 + 3) * 2;
console.log(result); // Outputs: 16

//[] square brackets are used for array literals and accessing array elements
let fruits = ["Apple", "Banana", "Cherry"];
console.log(fruits[0]); // Outputs: Apple