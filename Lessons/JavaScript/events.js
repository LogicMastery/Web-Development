// I made a simple calculator using a function, inside this function it adds 100 plus the value we enter in our input.
var num = 100;

function calculate(){
var input = document.querySelector(".form-control")
var value = Number(input.value);
var totalvalue = value + num;
var h1 = document.querySelectorAll("h1")[1]
var span = document.querySelector("span")
span.innerText = totalvalue;
}