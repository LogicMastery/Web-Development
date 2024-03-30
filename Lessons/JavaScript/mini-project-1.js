// 1. Create a script to concatenate a string and a variable together
var sentence = "Hello my name is , and What's your name? ";
var sentence2 = "Nice to meet you! and my name is ";
var sentence3 = "Nice to meet you too! and how old are you?";
var sentence4 = "I'm  years old, and I'm turning  this coming june";

var name = "Logic Mastery";
var name2 = "David";
var age = 25;
var age2 = 26;

sentence = "Hello my name is " + name + ", " + "and What's your name?";
sentence2 = "Nice to meet you! and my name is " + name2;
sentence3 = "Nice to meet you too! and how old are you? ";
sentence4 = "I'm " + age + " years old, and I'm turning " + age2 + " this coming june";

console.log(sentence)
console.log(sentence2)
console.log(sentence3)
console.log(sentence4)

// 2. Using .innerHTML and getElementById change the innerHTML of an element to be what the variable is
var heading1 = document.getElementById("heading1")
var oldText = heading1.innerText
heading1.innerHTML = "Yes! I finally change your text, YAY"

// I first add a variable called naming same name as the id, then I created a variable called David and I added David to a string
var naming = document.getElementById("naming");
var David = naming.innerText;
var MyNameIs = David + " Nice to meet you! and my name is Logic Mastery";
naming.innerHTML = MyNameIs; 



