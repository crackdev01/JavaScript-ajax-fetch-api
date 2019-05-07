//Create event listener for button1:
document.getElementById('button1').addEventListener('click', loadCustomer);

//Create event listener for button2: 
document.getElementById('button2').addEventListener('click', loadCustomers);

// Load Single Customer (customer.json file):
function loadCustomer(e) {
    //Create a xhr request
    const xhr = new XMLHttpRequest();

    // call OPEN, GET request, to customer.json and true for asynchronize
    xhr.open('GET', 'customer.json', true);

    //ONLOAD
    xhr.onload = function(){
        //check to see if it is a 200 status
        if(this.status === 200) {
            //console.log(this.responseText);
            //Show the output on the HTML:
            // first we need to parse it as an object else it will be readed as a string and we won't be able to get customer.id or customer.name:
            const customer = JSON.parse(this.responseText);

            const output = `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;

            document.getElementById('customer').innerHTML = output;
        }
    }

    // send at the bottom to show the data
    xhr.send();
}

// Load Customers (customers.json file):
function loadCustomers(e) {
    //Create a xhr request
    const xhr = new XMLHttpRequest();

    // call OPEN, GET request, to customer.json and true for asynchronize
    xhr.open('GET', 'customers.json', true);

    //ONLOAD
    xhr.onload = function(){
        //check to see if it is a 200 status
        if(this.status === 200) {
            //console.log(this.responseText);
            //Show the output on the HTML:
            // first we need to parse it as an object else it will be readed as a string and we won't be able to get customer.id or customer.name:
            const customers = JSON.parse(this.responseText);

            //Because it is an array, we can't output like above, so we need to loop through it with a forEach loop, but first we initiate and variable with output:

            let output = '';
            //we using let because we are going to reassign it within the loop below

            customers.forEach(function(customer){
                // we want to append on to output so we need to use +=
                output += `
                <ul>
                    <li>ID: ${customer.id}</li>
                    <li>Name: ${customer.name}</li>
                    <li>Company: ${customer.company}</li>
                    <li>Phone: ${customer.phone}</li>
                </ul>
            `;
            });

            document.getElementById('customers').innerHTML = output;
        }
    }

    // send at the bottom to show the data
    xhr.send();
}