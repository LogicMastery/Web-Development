var GuessedNum = 40

while(GuessedNum){
   var Guess = Number(prompt("Please enter your guess: "))
    var body = document.querySelector("body")
    if(Guess == 40){
        body.style.backgroundColor = "darkgreen"
        body.style.color = "#ffff"
        body.innerHTML = "<h1> YOU WIN!!! </h1>"
        alert("YOU WIN!!!")
        break
    }
    
    if(Guess < 40 || Guess > 40){
        alert("YOU LOSE!!!")
        
        
    }

    
    }