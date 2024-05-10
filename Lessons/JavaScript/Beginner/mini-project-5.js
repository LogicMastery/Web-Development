// Changing background color using input element
var bgColor = document.querySelector(".js-bg-Color")
var body = document.querySelector("body")
bgColor.addEventListener('keyup', function(event){
    body.style.backgroundColor = event.target.value

    // only use switch statement if you have any specific color you want
    /* var bgColor = event.target.value
    switch(bgColor){
        case "red":
            case "yellow":
                case "darkred":
                    break
                    default:
                        body.style.backgroundColor = "lightblue"
                        break
    }*/
})


// Changing text Color using input element
var textColor = document.querySelector(".js-text-Color")
textColor.addEventListener('keyup', function(event){
    body.style.color = event.target.value
})

// Changing font size using input element
var fontSize = document.querySelector(".js-font-size")
fontSize.addEventListener('keyup', function(event){
    body.style.fontSize = event.target.value + "px"
})