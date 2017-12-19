# JSON and Ajax
## JSON
*JSON: JavaScript Object Notation.*
## Ajax
*AJAX = Asynchronous JavaScript And XML.*
```javascript
//1. Define the request by creating xml http request tool object <br>
var ourRequest = new XMLHttpRequest();<br>
//2. Open the request with an http method (GET, POST, PUT, DELETE etc) and endpoint url<br>
// It tell browser to go to the url and GET the json data<br>
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json');<br>
//3. When data is loaded do somthing with the data.<br>
ourRequest.onload = function() {<br>
    var ourData = JSON.parse(ourRequest.responseText);<br>
    console.log(ourData[0]);<br>
};<br>
//4. Send the requst<br>
ourRequest.send();<br>
```
