// always put your function inside a class if your going to make a class and function to call both of them
class Person {
    constructor(name, age, food){
        this.name = name
        this.age = Number(age)
        this.food = food
    }
        makeSound(){
        console.log(this.name + " says nomnomnom to " + this.food)
    }
    
}


    const Haruka = new Person("Haruka", 24, "Sushi")
    Haruka.makeSound()
    const Akira = new Person("Akira", 26, "Teriyaki")
    Akira.makeSound()
