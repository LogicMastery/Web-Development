var name = "David"
var age = 25
var books = 40

var intro = document.getElementById("introduction")
var write = intro.innerText

prompt("What's your name?")

if (name == "David") {
    write = "Welcome to my website David"
    intro.innerText = write
}

var library = document.getElementById("value1")
var books1 = library.innerText

prompt("How many books did you borrow?")

if(books > 30) {
    books1 = "You have borrowed " + books + " books"
    library.innerText = books1
}

var age1 = document.getElementById("value2")
var older = age1.innerText

prompt("How old are you now?")

if(age != 10) {
    older = "I'm " + age + " years old now!"
    age1.innerText = older
}