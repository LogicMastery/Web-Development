// Reference
var input = prompt("What course are you taking?")

var text1 = document.getElementById("text")
var innerLower = input.toLowerCase()

if(innerLower === "javascript for beginners") {
    text.innerHTML = "<strong> Welcome!</strong> to JavaScript for beginners"
} else{
    text.innerHTML = "Sorry :( YOU ARE IN THE WRONG COURSE. Please try entering another course."
}

// I made and if and else statement about scoring. If total score is greater than 79, execute the text. If it is false, execute the else statement it will also execute another text.
var answer = prompt("What's your exam score? ")
var test1 = document.getElementById("test")
var totalscore = answer.toLowerCase()

// I made a mistake in the if statement; I typed a semicolon instead of curly braces.
if(totalscore > 79){
    test.innerHTML = "<strong>Congratz!</strong> YOU PASSED THE EXAM, you're going to graduate this year!"
}else{
    test.innerHTML = "<strong>Sorry :(</strong> YOU FAILED THE EXAM, better luck next time...."
}