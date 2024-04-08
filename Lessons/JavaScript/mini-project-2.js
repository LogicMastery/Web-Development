/* This code explains if it checks if it has an HTTPS, then the if statement will execute, which will tell you that the URL is correct. 
If not, it will execute the else statement, which is it will tell you that you entered the wrong URL */
var url1 = prompt("Enter a link: ")
var Headinglink = document.getElementById("link1")
var linking = Headinglink.innerHTML

if(url1 == null){
    console.error("Missing input at the url1")
}else{
    if(url1.substr(0, 4) == "http" || url1.substr(0, 5) == "https") {
        link1.innerHTML = "Your URL is indeed correct!"
    }else {
        link1.innerHTML = "Your URL is incorrect, please try again"
    }
}

// When we did not add an https:// the computer fixes for us
var url = prompt("Enter a URL: ")

if(url == null){
    console.error("Missing input at the url")
}else{
    if(url.substr(0, 5) != "https") {
        url = "https://" + url
    }
    
    var spanNodelink = document.getElementById("link2")
    var spanNodelinking = spanNodelink.innerHTML
    var HTMLLink = "<a href='" + url + "'>" + url + "</a>";
    spanNodelink.innerHTML = HTMLLink
    var spanNodelinking = spanNodelink.innerHTML
}
