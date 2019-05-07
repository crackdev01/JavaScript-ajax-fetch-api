//XHR Objects Methods & Working With Text

//Add event listener for the button, clickevent which will trigger the function loadData
document.getElementById('button').addEventListener('click', loadData);

function loadData() {
    // Create an XHR Object
    const xhr = new XMLHttpRequest();

    // OPEN method, is where we are going to specify the type of request we want to make and the URL we want to make it to

    //It is going to be a GET request, we want to make it to the file data.txt and we want it to be asynchronise so we say true
    xhr.open('GET', 'data.txt', true);

    // Optional - Used for spinners/loaders, so if you want to display something while it is loading or fetching the data, you can use this method:

    xhr.onprogress = function() {
        //As you can console log the readystate you can see it is at state 3
        console.log('READYSTATE', xhr.readyState);
    }

    //Call Xhr and set it to a function
    xhr.onload = function() {
        //We first want to check the status and this has to be 200, in HTTP the 200 status means everything is ok
        //HTTP Statuses:
        // 200: "OK"
        // 403: "Forbidden"
        // 404: "Not Found"
        if(this.status === 200) {
            // console log to see the text from the data.txt:
            //console.log(this.responseText);
            // We can do whatever we want with the output, so for example we can say:
            document.getElementById('output').innerHTML = `<h1>${this.responseText}</h1>`;
        }
    }

    // readyState values:
    // 0: request not initialized
    // 1: Server connection established
    // 2: request received
    // 3: processing request
    // 4: request finished and response is ready

    //You can console.log('READYSTATE', xhr.readyState); to see where the readyState is at anywhere in the code

    //When we execute this function above, and look at the readyState values, it is already at number 4, but before you had to check if it was at number 4, like this: (Commented out function below): 

    // xhr.onreadystatechange = function() {
    //     if(this.status === 200 && this.readyState === 4){
    //         console.log(this.responseText);
    //     }
    // }

    // You also want to use the onerror method in case something goes wrong:

    xhr.onerror = function() {
        console.log('Request error...');
    }

    //To finalize everything we have to call the send method
    xhr.send();
}
