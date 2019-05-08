const http = new EasyHTTP;

// Get Users
// http.get('http://jsonplaceholder.typicode.com/users')
// .then(data => console.log(data))
// .catch(err => console.log(err));

// User Data
const data = {
    name: 'John Doe',
    username: 'johndoe',
    email: 'jdoe@gmail.com'
}

// Create User
// This is simular to the get users above, it just takes the second paramater data
// http.post('http://jsonplaceholder.typicode.com/users', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Update User
// This is simular to the get users above, it just takes the / number on the end of the url to get the id you want to update
// http.put('http://jsonplaceholder.typicode.com/users/2', data)
// .then(data => console.log(data))
// .catch(err => console.log(err));

// Delete User
// This is simular to the get users above, it just takes the / number on the end of the url to get the id you want to delete
http.delete('http://jsonplaceholder.typicode.com/users/2')
.then(data => console.log(data))
.catch(err => console.log(err));