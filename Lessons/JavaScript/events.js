var num = 100;

function calculate(){
var input = document.querySelector(".form-control")
var value = Number(input.value);
var totalvalue = value + num;
var h1 = document.querySelectorAll("h1")[1]
var span = document.querySelector("span")
span.innerText = totalvalue;
}