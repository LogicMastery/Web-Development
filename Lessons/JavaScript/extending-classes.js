class Animal {
    constructor(species, weight, height){
        this.species = String(species)
        this.weight = Number(weight)
        this.height = Number(height)
    }
        getInfo(){
        console.log(this.species + " weighs " + this.weight + " and is " + this.height + " tall ") 
    }

    speak(){
        console.log("I SAY A THING")
    }
    
}

class Cat extends Animal {
    constructor(species, weight, height){
        super(species, weight, height)

        this.color = "Grey"
    }

    sleep(){
        console.log(this.species + " is having a nap")
        return this
    }
    speak(){
        console.log("Meowwww")
        return this
    }
}

const CatName = new Cat("cat", 13, 19)
CatName.sleep().speak().sleep()


  
