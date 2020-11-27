var data = "";
var API_KEY = "";
var CLIENT_ID = "";
var CLIENT_SECRET = "";
var counter = 0;
var topSpace;

$(document).ready(function () {
    data = document.getElementById("contentFromNode").innerHTML;
    var dataArray = data.split(", ");
    API_KEY = dataArray[0];
    CLIENT_ID = dataArray[1];
    CLIENT_SECRET = dataArray[2];
    console.log(API_KEY);
    console.log(CLIENT_ID);
    console.log(CLIENT_SECRET);

    scrollFunction();

    console.log("main.js successfully loaded!");
});

window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    debugger;
    topSpace = document.documentElement.scrollTop/*-document.getElementById("header-spacer").offsetHeight*/;
    scrollFactor = topSpace * 0.05
    if (scrollFactor > 1) {
        scrollFactor = 1;
    } else if (scrollFactor < 0) {
        scrollFactor = 0;
    }
    if (counter < 2) {
        document.getElementById("header-title").style.fontSize = 1.9 * scrollFactor + "em";
        document.getElementById("header-title").style.padding = 10 * scrollFactor + "px 0px";
        document.getElementById("header-title").style.paddingLeft = 6 * scrollFactor + "px";
    }
    if (counter > 1) {
        document.getElementById("header").style.height = 60 + 50 * scrollFactor + "px";
        document.getElementById("header-title").style.fontSize = 1.9 + 2.1 * scrollFactor + "em";
        document.getElementById("header-title").style.padding = 10 + 8 * scrollFactor + "px 0px";
        document.getElementById("header-title").style.paddingLeft = 4 + 6 * scrollFactor + "px";
        /*document.getElementById("header-title").style.transition = "1.5s";*/
    }/* else if ((topSpace <= 50) && counter > 1) {
        document.getElementById("header").style.height = 110 * scrollFactor + "px";
        document.getElementById("header-title").style.fontSize = 4 * scrollFactor + "em";
        document.getElementById("header-title").style.padding = 18 * scrollFactor + "px 0px";
        document.getElementById("header-title").style.paddingLeft = 10 * scrollFactor + "px";
        /*document.getElementById("header-title").style.transition = "1.5s";
    }*/ else {
        console.log("None of the conditions were met with the header-resize.")
    }
    counter++;
    if(counter < 10)
    console.log(counter);
}

