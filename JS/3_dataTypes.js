// PRIMITIVE EXAMPLES
let age = 30;                      // Number data type
let firstName = "Alice";           // String data type
let isStudent = true;              // Boolean data type
let middleName = null;             // Null data type
let lastName;                      // Undefined data type
let bigNumber = 9007199254740991n; // BigInt data type
let uniqueId = Symbol('id');       // Symbol data type

// NON PROMITIVE EXAMPLE
let person = {                     // Object data type
    name: "Bob",
    age: 25
};

let colors = ["red", "green", "blue"]; // Array data type

function greet() {               // Function data type
    console.log("Hello!😊");
}

//Print variable values to the console
// console.log(age);
// console.log(firstName);
// console.log(isStudent);
// console.log(middleName);
// console.log(lastName);
// console.log(bigNumber);
// console.log(uniqueId);

// //Printing data types to the console
// console.log(typeof age);
// console.log(typeof firstName);  
// console.log(typeof age);
// console.log(typeof firstName);
// console.log(typeof isStudent);
// console.log(typeof middleName);
// console.log(typeof lastName);
// console.log(typeof bigNumber);
// console.log(typeof uniqueId);

//printing non-primitive data types
// console.log(person);
// console.log(colors);
// greet();

//printing data types of non-primitive data types
console.log(typeof person);
console.log(typeof colors);
console.log(typeof greet);