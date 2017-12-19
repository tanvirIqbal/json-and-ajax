var pageCount = 1;
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");
btn.addEventListener("click", function(){
//1. Define the request by creating xml http request tool object
var ourRequest = new XMLHttpRequest();
//2. Open the request with an http method (GET, POST, PUT, DELETE etc) and endpoint url
// It tell browser to go to the url and GET the json data
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-'+ pageCount +'.json');
//3. When data is loaded do somthing with the data.
ourRequest.onload = function() {
    if(ourRequest.status >= 200 && ourRequest.status < 400){
        console.log("We connected the server and it returns error."); 
    }
    var ourData = JSON.parse(ourRequest.responseText);
    renderHTML(ourData);
};
ourRequest.onerror = function(){
    console.log("Connection Error");
}
//4. Send the requst
ourRequest.send();
pageCount++;
if(pageCount > 3){
    btn.classList.add("hide-me");
}
});

function renderHTML(data){
    var htmlString = "";
    for(i = 0; i < data.length; i++){
        htmlString += '<p>' + data[i].name + " is a " + data[i].species + " that likes to eat ";

        for(ii = 0; ii < data[i].foods.likes.length ; ii++){
            if(ii == 0){
                htmlString += data[i].foods.likes[ii];
            } else {
                htmlString += " and " + data[i].foods.likes[ii];
            }
        }

        htmlString += " and dislikes ";

        for(ii = 0; ii < data[i].foods.dislikes.length ; ii++){
            if(ii == 0){
                htmlString += data[i].foods.dislikes[ii];
            } else {
                htmlString += " and " + data[i].foods.dislikes[ii];
            }
        }

        htmlString += ".</p>";
    }
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}


