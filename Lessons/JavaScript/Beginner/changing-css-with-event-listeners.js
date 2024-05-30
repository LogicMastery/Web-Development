var bgColor = document.querySelector(".js-bg-color")
var textColor = document.querySelector(".js-text-color")
var body = document.querySelector("body")
body.style.backgroundColor = "lightblue";
body.style.color = "darkblue";
bgColor.style.borderRadius = "10px";
bgColor.style.border = "3px dashed black";
bgColor.addEventListener('keyup', function(event){
    console.log("bg Color", event.target.value)
    body.style.backgroundColor = event.target.value

    var color = event.target.value
    switch (color){
        case "red":
        case "black":
        case "gainsboro":
            body.style.backgroundColor = color
            break
        default:
            body.style.backgroundColor = "lightblue"
            break
    }
});

textColor.addEventListener('keyup', function(event){
    console.log("text Color", event.target.value)
    body.style.color = event.target.value
});