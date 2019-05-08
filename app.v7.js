//Create event listeners for buttons
document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get Local Text file data
function getText() {
    //Call the fetch function, and pass in what you want to get, in this case test.txt. Fetch returns promises, when you get a response from a promise you have to use .then
    fetch('test.txt')
        //here we put in a function with the response
        .then(function(res) {
            // We want to return the text from the response (that is in prototype)
            return res.text();
        })
        // Then we have to make another .then because the res.text returns a promise so we have to say .then again and in here we can actually get the data
        .then(function(data) {
            console.log(data);
            // Lets output the data
            document.getElementById('output').innerHTML = data;
        })
        // As in the lesson, if there is some kind of error we can do .catch
        .catch(function(err) {
            console.log(err);
        });
}

// Get Local Json data
function getJson() {
    //Call the fetch function, and pass in what you want to get, in this case posts.json. Fetch returns promises, when you get a response from a promise you have to use .then
    fetch('posts.json')
        //here we put in a function with the response
        .then(function(res) {
            // We want to return res.json this time
            return res.json();
        })
        // Then we have to make another .then because the res.json returns a promise so we have to say .then again and in here we can actually get the data
        .then(function(data) {
            console.log(data);
            // so if we want to output the data, it is an array so we have to loop true it with forEach
            let output = '';
            data.forEach(function(post) {
                // output += because we want to append
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        // As in the lesson, if there is some kind of error we can do .catch
        .catch(function(err) {
            console.log(err);
        });
}

// Get from external API
function getExternal() {
    //Call the fetch function, and pass in what you want to get, in this case we are going to use the api from github, so we paste in the url
    fetch('https://api.github.com/users')
        //here we put in a function with the response
        .then(function(res) {
            // We want to return res.json this time
            return res.json();
        })
        // Then we have to make another .then because the res.json returns a promise so we have to say .then again and in here we can actually get the data
        .then(function(data) {
            console.log(data);
            // so if we want to output the data, it is an array so we have to loop true it with forEach
            let output = '';
            data.forEach(function(user) {
                // output += because we want to append
                output += `<li>${user.login}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        // As in the lesson, if there is some kind of error we can do .catch
        .catch(function(err) {
            console.log(err);
        });
}

