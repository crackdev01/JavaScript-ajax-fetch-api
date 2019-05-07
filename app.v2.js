//Create event listener for button1: 
document.getElementById('button1').addEventListener('click', loadCustomer);

function loadCustomer(e) {
    //Create a xmr request
    const xhr = new XMLHttpRequest();

    // call OPEN, GET request, to customer.json and true for asynchronize
    xhr.open('GET', 'customer.json', true);

    //ONLOAD
    xhr.onload = function(){
        //check to see if it is a 200 status
        if(this.status === 200) {
            console.log(this.responseText);
        }
    }

    // send at the bottom to show the data
    xhr.send();
}