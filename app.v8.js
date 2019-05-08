// We first create a normal function below, and then we are going to switch it to an arrow function below: 
// const sayHello = function() {
//     console.log('Hello');
// }
// sayHello();

// So let make it an arrow function now:
// So you dont want the function keyword but you put in an arrow between the parenthesis and curly brace
// const sayHello = () => {
//     console.log('Hello');
// }
// sayHello();

//we can make this even more compact as the function is only one line:
// const sayHello = () => console.log('Hello');
// sayHello();

// Same thing with one line return:
// const sayHello = () => 'Hello';
// console.log(sayHello());

//So when you can get in trouble, is when you return an object literal, you will get undefined, so to fix this, you have to put parenthesis around it:
// const sayHello = () => ({ msg: 'Hello' });
// sayHello();

//So what if we have parameters?
// const sayHello = (name) => console.log(`Hello ${name}`);

//When it is a single parameter, we dont even need parenthesis:
// const sayHello = name => console.log(`Hello ${name}`);
// sayHello('Philip');

// But if we have more then one parenthesis, you get an error if they are not wrapped in parenthesis:
// const sayHello = firstName, lastName => console.log(`Hello ${firstName} ${lastName}`);

// So the right way is:
// const sayHello = (firstName, lastName) => console.log(`Hello ${firstName} ${lastName}`);

// sayHello('Philip', 'Andes');

//We can also use arrow functions as callbacks
const users = ['Nathan', 'John', 'William'];
// Lets say we want to use the map function:
// const nameLengths = users.map(function(name) {
//     // Map is used to map different things, like in this case it returns an array with the length of each name
//     return name.length;
// });
// console.log(nameLengths);

// now lets make it shorter by using an arrow function:
// const nameLengths = users.map((name) => {
//     return name.length;
// });

// console.log(nameLengths);

// now the shortest version:
const nameLengths = users.map(name => name.length);

console.log(nameLengths);
