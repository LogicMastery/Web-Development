var title = document.querySelector(".title");
title.innerText = "Changed using a class";

var small = document.querySelector("small");
if (small) { // Check if small exists
    small.innerText = "WOW IM SO TINY";
}
var heading = document.querySelector("h3")

var smallInsideTitle = heading.querySelector("small");
if (smallInsideTitle) { // Check if small exists inside title
    smallInsideTitle.innerText = "This is my text";
}

var a = document.querySelector("a")
a.innerText = "Coding For Everybody.com"

var lis = document.querySelectorAll("li")
lis[0].innerText = "Hi, I'm number zero"
lis[4].innerText = "Did I get to change?"

var input = document.querySelector(".form-control")
if(input){
    console.log(input.value)

}