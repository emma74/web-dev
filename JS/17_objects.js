let person = {
    name: 'John',
    age: 30,
    city: 'New York',
    isStudent: false,
    hobbies: ['reading', 'swimming', 'coding'],
    address: {
        street: '123 Main St',
        zipCode: '10001'
    }
}

const personName = person.name;
// console.log(personName);

const personAge = person.age;
// console.log(personAge);

const personHobbies = person.hobbies;
// console.log(personHobbies);
// console.log(personHobbies[0]);

const personAddress = person.address;
// console.log(personAddress);
// console.log(personAddress.street);

//iterate over object
// for (let key in person) {
//     console.log(key);
// }

//with Object function
// let personKeys = Object.keys(person);
// console.log(personKeys);

// let personValues = Object.values(person);
// console.log(personValues);

// let personEntries = Object.entries(person);  //returns key-value pair
// console.log(personEntries);

//access street key value
let street = person.address.street;
// console.log(street);

//add new property
person.job = 'developer';
// let personEntries = Object.entries(person)
// console.log(personEntries);

//modify property
person.age = 31;
// let personEntries = Object.entries(person)
// console.log(personEntries);

//delete property
delete person.job;
let personEntries = Object.entries(person)
console.log(personEntries);


