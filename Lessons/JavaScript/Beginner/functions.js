/* We first created a function then inside the Intro parenthesis we created a variable name="Haruka" 
and an age=24. inside on a function we console log it instead adding two console log we just create one console log 
and add --> "Hello " + name && "Age is " + age in one console log, we then return the name, then we created 3 new variable 
outside to our function defaultname, Yuki, and Sakura. The defaultname execute the default name and age of the function 
and it console log it whatever inside the console log of that function, Yuki and Sakura it execute it's own custom variable -->  var Yuki = Intro("Yuki", 40), var Sakura = Intro("Sakura", 30) */
function Intro(name="Haruka", age=24) {
console.log("Hello " + name && "Age is " + age)

return name;
}

var defaultname = Intro()
var Yuki = Intro("Yuki", 40)
var Sakura = Intro("Sakura", 30)