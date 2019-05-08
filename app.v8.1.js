// So to clean this code up from the last lesson we are going to use Arrow functions now:  
document.getElementById('button1').addEventListener('click', getText);

document.getElementById('button2').addEventListener('click', getJson);

document.getElementById('button3').addEventListener('click', getExternal);

// Get Local Text file data
function getText() {
    fetch('test.txt')
        .then (res => res.text())
        .then (data => {
            console.log(data);
            document.getElementById('output').innerHTML = data;
        })
        .catch (err => console.log(err)); 
}

// Get Local Json data
function getJson() {
    fetch('posts.json')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(function(post) {
                output += `<li>${post.title}</li>`;
            });
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

// Get from external API
function getExternal() {
    fetch('https://api.github.com/users')
        .then(res => res.json())
        .then(data => {
            console.log(data);
            let output = '';
            data.forEach(user => output += `<li>${user.login}</li>`)
            document.getElementById('output').innerHTML = output;
        })
        .catch(err => console.log(err));
}

