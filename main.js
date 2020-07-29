var data = "";
var API_KEY = "";
var CLIENT_ID = "";
var CLIENT_SECRET = "";

$(document).ready(function() {
    data = document.getElementById("contentFromNode").innerHTML;
    var dataArray = data.split(", ");
    API_KEY = dataArray[0];
    CLIENT_ID = dataArray[1];
    CLIENT_SECRET = dataArray[2];
    console.log(API_KEY);
    console.log(CLIENT_ID);
    console.log(CLIENT_SECRET);

    console.log("main.js successfully loaded!");
});
