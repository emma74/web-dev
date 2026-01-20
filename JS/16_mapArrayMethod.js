let numbers = [10, 20, 30, 40]
console.log(numbers)

let doubleNumbers = numbers.map(number => number * 2)
// console.log(doubleNumbers)  

let trippleNumbers = numbers.map(number => number * 3)
// console.log(trippleNumbers)

//use normal function
for(let num in numbers){
  console.log(numbers[num])
}