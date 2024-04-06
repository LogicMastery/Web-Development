var url = prompt("Enter a URL: ")
var link1 = document.getElementById("link")
var linking = link1.innerHTML

if(url.substr(0, 5) == "https") {
    link.innerHTML = "Your URL is indeed correct!"
}else {
    link.innerHTML = "Your URL is incorrect, please try again"
}