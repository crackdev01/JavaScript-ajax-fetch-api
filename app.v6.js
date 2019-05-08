// Lets create a variable posts and this is going to mimic our server / database
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

function createPost(post) {
    // When you want to create a promise, you say return new Promise which takes in a function which takes in two things, resolve and reject, resolve is what we call when we are done with what we are doing, reject we want to call when there is a error
    return new Promise(function(resolve, reject) {
    //We are going to mimic the server response time with setTimeout
    setTimeout(function() {
        //We can push on an array with push(), and it will pass in post
        posts.push(post);
        // We use reject if there is a error, so here we going to mimic an error, lets create an variable error and set it to true (to show error and false for no error)
        const error = false;
        // Then we want to check for that error
        if(!error) {
            // So after the push and if there is no error we going to call resolve() instead of callback in the previous lesson
            resolve();
        } else {
            reject('Error: Something went wrong');
        }
    }, 2000);
    });
}

// Here we want to show the posts in the output
function getPosts() {
    // We use settimeout again
    setTimeout(function() {
        // we have to set a variable
        let output = '';
        // Loop true the array
        posts.forEach(function(post){
            // append li to the output
            output += `<li>${post.title}</li>`;
        });
        //Then we want to output it in the browser
        document.body.innerHTML = output;
    }, 1000);
}

// Here we add .then on the end which can take a function, in this case we want to use the getPosts function, then to catch the error message if anything went wrong we want to add on the end .catch which takes a function and the actual message you want to give back
createPost({title: 'Post Three', body: 'This is post three '}).then(getPosts).catch(function(err) {
    console.log(err);
});

