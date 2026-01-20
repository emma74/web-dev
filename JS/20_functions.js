//function definition
function myName(){
  console.log("My name is Emmanuel")
}

//function call or invocation
// myName();

//function definition with return statement
function returnMyname(){
  return "Emmanuel";
}

//function call. This will not show anything because function returns something, and 
//that something needs to be stored in a variable or call the function in a console
// returnMyname();

// console.log(returnMyname());

//function call with variable
const myNameIs = returnMyname();
// console.log(myNameIs);

//function Expression approach
const myNameIs2 = function(){
  return "Hello Sam!";
}

// console.log(myNameIs2());

//Arrow functions
// const myNameArrow = () => {
//   return "Hello Arrow!";
// }

//same as below
const myNameArrow = () => "Hello Arrow!";

// console.log(myNameArrow());

const returnSimplified = () => "Simplified returned here!";
console.log(returnSimplified());

// Traditional anonymous function
(function (a) {
  return a + 100;
});

//1. Remove the word "function" and place arrow between the argument and opening body brace
(a) => {
  return a + 100;
};

//2. Remove the body braces and word "return" — the return is implied.
(a) => a + 100;

//3. Remove the parameter parentheses
a => a + 100;


