// Lets create a variable posts and this is going to mimic our server / database
const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
];

// function createPost(post) {
//     //We are going to mimic the server response time with setTimeuut
//     setTimeout(function() {
//         //We can push on an array with push(), and it will pass in post
//         posts.push(post);
//     }, 2000);
// }

// // Here we want to show the posts in the output
// function getPosts() {
//     // We use settimeout again
//     setTimeout(function() {
//         // we have to set a variable
//         let output = '';
//         // Loop true the array
//         posts.forEach(function(post){
//             // append li to the output
//             output += `<li>${post.title}</li>`;
//         });
//         //Then we want to output it in the browser
//         document.body.innerHTML = output;
//     }, 1000);
// }


// createPost({title: 'Post Three', body: 'This is post three '});

// getPosts();

// The code above, outputs Post one and Post Two, but no post Three because it took the server 2 seconds to create the post and 1 second to get the post before it was actually created. So the way we did this is in a synchronous way, now lets comment the code above out and make it in a asynchronous way using callback:

function createPost(post, callback) {
    //We are going to mimic the server response time with setTimeuut
    setTimeout(function() {
        //We can push on an array with push(), and it will pass in post
        posts.push(post);
        // here we want to call the callback function:
        callback();
    }, 2000);
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

// Here we add getPosts, so what happends, at create post it will first callback the function getPosts before it ends
createPost({title: 'Post Three', body: 'This is post three '}, getPosts);

getPosts();