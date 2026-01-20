let fruits = ['Apple', 'Banana', 'Mango', 'Pineapple'];

// fruits.forEach(function(fruit, index){
//   console.log("Fruit at index " + index + " is " + fruit);
// });

fruits.forEach(function(fruit, index){
  console.log(`Fruit at index ${index} is fruit ${fruit}`);
});

// fruits.forEach((fruit, index) => console.log(fruit));

//normal function
// function add(a, b) {
//   return a + b;
// }

//arrow function
const add = (a, b) => {
  return a + b;
};

// console.log(add(2, 3)); 