/* Checking if age is a number we even created an if statement to check if we enter an number it will say that "You have a proper number!" if not it will say "That's not a number!" 
and if you enter greater than equal to 18 it will say "You can vote!" */
var age = 30;
age = Number(age);
console.log(typeof(age))

var age = prompt("Your age is?");
MyAge = Number(age)

if(age) {
alert("You have a proper number!")
if(age >= 18){
    console.log("You can vote!")    
}
}else{
    alert("That's not a number!")
}
console.log(typeof(MyAge))

// We're checking if it's a String
var age = 30;
age = String(age)

console.log(age, typeof(age))

// We're checking if it's a Boolean
var isDog = "true"
isDog = Boolean(isDog);
console.log(isDog, typeof(isDog))

// We're checking if it's an Array
var JobType = "Developer"
JobType = Array(JobType)
console.log(JobType.length)
console.log(JobType[0].length)