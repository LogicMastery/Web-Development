var num1 = Number(prompt("Give me number")) 
var startingNum1 = 1

while(startingNum1 <= num1){
    console.log(startingNum1)
    startingNum1++
}


var ul = document.querySelector(".js-list")
var html = ''

var num = Number(prompt("Give me another number"))
var startingNum = 1

while(startingNum <= num){
    html = html + "<li>Iteration: " + startingNum + "</li>"
    startingNum++
}

ul.innerHTML = html