//string as primitive
let myName = "Emmanuel";

//string as object
let greeting = new String("Hello, World!");
// console.log(myName);
// console.log(greeting);


//concatenation of strings
let greet = "Hello";
let name = "John";
let fullGreetings = greet + ", " + name + "!";
// console.log(fullGreetings);

//template literals
let age = 25;
let ageName = "Alice";
let templateLiteralGreeting = `My name is ${ageName} and I am ${age} years old.`;
// console.log(templateLiteralGreeting);

//string methods
let text = "JavaScript is awesome!";
// console.log(text.length); //length of string
// console.log(text.charAt(0));
// console.log(text[0]); //accessing character at index 0
// console.log(text.toUpperCase()); //convert to uppercase
// console.log(text.toLowerCase()); //convert to lowercase

//substring
// console.log(text.substring(0, 4)); //Java
// console.log(text.slice(0, 4)); //JavaScript
// console.log(text.includes("awesome")); //true
// console.log(text.includes("great")); //false
// console.log(text.indexOf("is")); //11
// console.log(text.startsWith("Java")); //true
// console.log(text.endsWith("awesome")); //false
// console.log(text.endsWith("awesome!")); //true

//replace
let newText = text.replace("awesome", "fantastic");
// console.log(newText); //JavaScript is fantastic!

//splitting & joining strings
let splitWords = text.split(" ");
// console.log(splitWords); //["JavaScript", "is", "awesome!"]

let joinWords = splitWords.join("-");
// console.log(joinWords); //JavaScript - is - awesome!

//trimming whitespace
// let spacedText = "   Hello World!   ";
// console.log(spacedText.trim()); //Hello World!
// console.log(spacedText.trimStart()); //Hello World!   
// console.log(spacedText.trimEnd()); //   Hello World!

// //special characters
// console.log("This is the first line. This is the scond line and this is the third line.");
// console.log("This is the first line.\nThis is the second line.\nThis is the third line.");
// console.log("Hello, my name is 'Emmanuel'.");
// console.log("Hello my name is \"Emmanuel\".");

//== vs === (comparison and equality operators)
let isEqual1 = "hello" == "hello"; //true
let isEqual2 = "hello" === "hello"; //true
let isEqual3 = "HELLO" == "hello"; //false
let isEqual4 = "HELLO" === "hello"; //false

// console.log(isEqual1);
// console.log(isEqual2);
// console.log(isEqual3);
// console.log(isEqual4);

let isEqual5 = 5 == "5"; //true (type coercion)
let isEqual6 = 5 === "5"; //false (no type coercion). Compares both value and type
console.log(isEqual5);
console.log(isEqual6);

// let msg ="This is the end of string.js file.";
// alert(msg);
// prompt(msg, defaultValue="OK");
// confirm("Do you want to proceed?");