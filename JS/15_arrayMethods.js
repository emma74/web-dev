let colors = ['red', 'gold', 'green'];
// console.log(colors)

//add element to the end of the array
// colors.push('blue');
// console.log(colors);

// //remove element from the end of the array
// colors.pop();
// console.log(colors);

// //add to start of the array
// colors.unshift('purple');
// console.log(colors);

// //remove from start of the array
// colors.shift(); 
// console.log(colors);

//join arrays
let newColors = ["black", "white"];
let allColors = colors.concat(newColors);
console.log(allColors);

//slice array
let slicedColors = allColors.slice(1, 3);
// console.log(slicedColors); //print gold, green, ignore index 3

//reverse array
let reversedColors = allColors.reverse();
// console.log(reversedColors);

//find index of an element
let index = allColors.indexOf("green");
console.log(index);  //index of green is 2

//check if an element exists in the array
let exists = allColors.includes("green");
console.log(exists);

//not exists
let notExists = allColors.indexOf("yellow");
console.log(notExists);