//Arguments are the values passed into the function and 
// parameters are the placeholders for these values


const nameFunc = (name) => {  //name is parameter here
  return `${name}`;
}
const name = nameFunc('John');  //John is argument here
// console.log(name);

const describePerson = (name, age, sex, occupation) => {
  return `Your name is ${name}, you're ${age} years old, you're a ${sex} and you do ${occupation} for a living`
}

const describeJohn = describePerson("John", 35, "male", "developer")
// console.log(describeJohn);

const describePersonWithDefaultParam = (name, age, sex, occupation="Banking") => {
  return `Your name is ${name}, you're ${age} years old, you're a ${sex} and you do ${occupation} for a living`
}

const describeJane = describePersonWithDefaultParam("Jane", 33, "female")
console.log(describeJane);
