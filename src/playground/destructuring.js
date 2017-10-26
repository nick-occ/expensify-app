// 
// Object Destructuring
// 

// const person = {
//     name: 'Nick',
//     age: 37,
//     location: {
//         city: 'Charlotte',
//         temp: 80
//     }
// };

// const {name:firstName = 'Anonymous',age} = person;
// const {temp:temperature,city} = person.location;

// console.log(`${firstName} is ${age}.`);

// if(city && temperature) {
//     console.log(`It's ${temperature} in ${city}`)
// }


const book = {
    title: 'Ego is the Enemy',
    author: 'Ryan Holiday',
    publisher: {
        name: 'Penguin'
    }
};

const {name: publisherName='Self-Published'} = book.publisher;
console.log(publisherName);

// 
// Array Destructuring
// 

// const address = ['1299 S Juniper Street','Philadelphia','Pennsylvania','19147'];
// const [, , state='New York', zip] = address;

// console.log(`You are in ${state}`)


const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];
const [name, , med_price] = item;

console.log(`A medium ${name} costs ${med_price}`);