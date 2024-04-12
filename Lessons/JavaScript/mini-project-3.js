/* We first created a variable called PhoneNumber is equal to prompt("What is your phone number?") then I made PhoneNumber equal to Number(PhoneNumber)
The PhoneNumber data type is a number, and then I create an if statement (PhoneNumber && PhoneNumber > 18). If it is true, execute this --> var number = document.getElementById("text")
number.innerHTML = "You entered the correct phone number!" if it is false, then the else statement will be executed */
var PhoneNumber = prompt("What is your phone number?")
PhoneNumber = Number(PhoneNumber)

if(PhoneNumber && PhoneNumber > 18){
    var number = document.getElementById("CellPhone")
    number.innerHTML = "You entered the correct phone number!"
}else{
    var number = document.getElementById("CellPhone")
    number.innerHTML = "That's an incorrect phone number!!!"
}

var question = prompt("What's your age?")
var age = document.getElementById("text")
var changetext = age.toString().toUpperCase()

if(question > 18) {
    age.innerHTML = "Your an adult! You're a mature person!"
}else{
    age.innerHTML = "Your not that matured enough to be responsible!"
} 