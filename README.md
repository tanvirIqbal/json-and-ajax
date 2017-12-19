# JSON and Ajax
## JSON
*JSON: JavaScript Object Notation.*
## Ajax
*AJAX = Asynchronous JavaScript And XML.*
```javascript
//1. Define the request by creating xml http request tool object 
var ourRequest = new XMLHttpRequest();
//2. Open the request with an http method (GET, POST, PUT, DELETE etc) and endpoint url
// It tell browser to go to the url and GET the json data
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');
//3. When data is loaded do somthing with the data.
ourRequest.onload = function() {
    var ourData = JSON.parse(ourRequest.responseText);
    console.log(ourData[0]);
};
//4. Send the requst
ourRequest.send();
```
