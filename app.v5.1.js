function easyHTTP() {
    this.http = new XMLHttpRequest();
}

// Make an HTTP GET Request
easyHTTP.prototype.get = function(url, callback) {
    this.http.open('get', url, true);

    // We have to set a new var for this to use this in the scope below. 
    let self = this;

    this.http.onload = function() {
        if(self.http.status === 200) {
            // We also want to send back an error when there is something wrong, so we gonna say null for the error:
            callback(null, self.http.responseText);
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}

// Make an HTTP POST Request
// it is also gonna take in the data, as when you adding data you need to send the data
easyHTTP.prototype.post = function(url, data, callback) {
    this.http.open('POST', url, true);
    // We gonna do the onload, but in addition to that we gonna need to set the content type, and that is done in the HTTP header
    this.http.setRequestHeader('Content-type', 'application/json');

    // We have to set a new var for this to use this in the scope below. 
    let self = this;

    this.http.onload = function() {
        // The responseText should be the new text we added, so to know if it is a new post it should have the ID of 101, because when you make the initial get request the last one is the ID of 100
        callback(null, self.http.responseText);
    }
    // We gonna need to send the data, right now it is going to be a regular javascript object, so we need to run it true a function called JSON.stringify to send it as an JSON string:
    this.http.send(JSON.stringify(data));
}

// Make an HTTP PUT Request
easyHTTP.prototype.put = function(url, data, callback) {
    this.http.open('PUT', url, true);
    // We gonna do the onload, but in addition to that we gonna need to set the content type, and that is done in the HTTP header
    this.http.setRequestHeader('Content-type', 'application/json');

    // We have to set a new var for this to use this in the scope below. 
    let self = this;

    this.http.onload = function() {
        // The responseText should be the new text we added, so to know if it is a new post it should have the ID of 101, because when you make the initial get request the last one is the ID of 100
        callback(null, self.http.responseText);
    }
    // We gonna need to send the data, right now it is going to be a regular javascript object, so we need to run it true a function called JSON.stringify to send it as an JSON string:
    this.http.send(JSON.stringify(data));
}

// Make an HTTP DELETE Request
easyHTTP.prototype.delete = function(url, callback) {
    this.http.open('DELETE', url, true);

    // We have to set a new var for this to use this in the scope below. 
    let self = this;

    this.http.onload = function() {
        if(self.http.status === 200) {
            // We also want to send back an error when there is something wrong, so we gonna say null for the error:
            //When we delete something it is going to be an empty object so we only need a message like Post Deleted
            callback(null, 'Post Deleted');
        } else {
            callback('Error: ' + self.http.status);
        }
    }

    this.http.send();
}