var button = document.querySelector(".js-button")
var totalclicks = 0

button.addEventListener('click', function(event){
    // Do something in here here
    totalclicks = totalclicks + 1;
    // totalClicks++;
    document.getElementById("totalClicks").innerText = totalclicks;
}) 
