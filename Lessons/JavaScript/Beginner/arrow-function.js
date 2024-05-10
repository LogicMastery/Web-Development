const greet = () => {
    console.log("Hello, I'm an arrow function")
}

greet()

const greetings = (name, place) => `Hello, my name is ${name} and I live in ${place}`

console.log(greetings("Haruka", "Japan, Tokyo"))

const arr = ["JavaScript", "Python", "C++"]

arr.forEach(language => {
    console.log(language)
})

setTimeout(() => {
   console.log("I'm so exhausted! I need to rest for a second")
   console.log("I'm so exhausted! I need to rest for a second")
   console.log("I'm so exhausted! I need to rest for a second")
   console.log("I'm so exhausted! I need to rest for a second")
   console.log("I'm so exhausted! I need to rest for a second")
   console.log("I'm so exhausted! I need to rest for a second")
   console.log("I'm so exhausted! I need to rest for a second")
   console.log("I'm so exhausted! I need to rest for a second")
   console.log("I'm so exhausted! I need to rest for a second")
   console.log("I'm so exhausted! I need to rest for a second")
   console.log("I'm so exhausted! I need to rest for a second") 
}, 5100);