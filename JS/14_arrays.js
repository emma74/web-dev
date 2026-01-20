//empty array
let emptyArray = [];

let fruits = ["apples", "oranges", "pears", "grapes", "bananas"];

//mixed array
let mixedArray = [1, "apples", true, undefined, null, { name: "John" }];

//Accessing array elements using index
// console.log("All fruits: " + fruits); //print as string
// console.log("All fruits", fruits); //print as array

//with arrow function
// fruits.forEach(fruit => console.log(fruit))

//with normal function
// for(let fruit of fruits){
//   console.log(fruit)
// }

//through index
// console.log(fruits[0]);
// console.log(fruits[1]);
// console.log(fruits[2]);
// console.log(fruits[3]);
// console.log(fruits[4]);
// console.log(fruits[5]);

//last item in array
// console.log(fruits[fruits.length -1]);

//modify array elements
fruits[0] = "pineapple";
console.log(fruits);
