// function myFunc() {
//     return 'Hello';
// }

// console.log(myFunc());

// Above is a regular function, so with async await we add async to the function, and just doing this makes this function returning a promise:

// async function myFunc() {
//     // So if we do anything asynchronously in here, we can use await to actualy wait till it is resolved:
//     const promise = new Promise((resolve, reject) => {
//         setTimeout(() => resolve('Hello'), 1000);
//     });    

//     // Lets also throw an error (set to true to see error):
//     const error = false;

//     if(!error) {
//         // Wait until promise is resolved which takes 1 second
//         const res = await promise; 
//         return res;
//     } else {
//         await Promise.reject(new Error('Something went wrong'));
//     }
// }

// myFunc()
// .then(res => console.log(res))
// .catch(err => console.log(err));

// The example above might not be the best example, so lets do it with fetch:

async function getUsers() {
    // Await response of the fetch call
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    // normally we should have used .then but because we using this await fetch, what we can do, is create an variable data (whatever you want to call it) and then say await response.json()
    // Only proceed once its resolved
    const data = await response.json();

    // Only proceed once second promise is resolved
    return data;
}

getUsers().then(users => console.log(users));