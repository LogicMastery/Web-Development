console.log("First console log")
setTimeout(function(){
    console.log("Second console log: Time out!")
    const body = document.querySelector("body")
    body.style.backgroundColor = "Yellow"
    body.style.color = "red"
}, 5000)
console.log("Third console log")