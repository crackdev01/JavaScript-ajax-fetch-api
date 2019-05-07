const http = new easyHTTP;

// GET Posts
// http.get('http://jsonplaceholder.typicode.com/posts', function(err, posts) {
//     // Test for the error:
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(posts);
//     }
// });


// GET Single Posts (just add a / 1 on the end of the url):
// http.get('http://jsonplaceholder.typicode.com/posts/1', function(err, post) {
//     // Test for the error:
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });


//Commented everything out above to avoid any confusion
// Create Data, so we say const data equals an object:
const data = {
    title: 'Custom Post',
    body: 'This is a custom post'
};

// // Create Post
// http.post('http://jsonplaceholder.typicode.com/posts', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//Commented everything out above to avoid any confusion except for the data, because that is the data we are going to update now, the only thing that we do is edit the url, a /1 for edit posts with id=1
// Update Post
// http.put('http://jsonplaceholder.typicode.com/posts/1', data, function(err, post) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(post);
//     }
// });

//Commented everything out above to avoid any confusion except for the data, because that is the data we are going to delete now
// Delete Post
http.delete('http://jsonplaceholder.typicode.com/posts/1', function(err, response) {
    // Test for the error:
    if(err) {
        console.log(err);
    } else {
        console.log(response);
    }
});
