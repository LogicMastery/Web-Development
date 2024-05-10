const person = {
    'name': 'Haruka',
    'age': '25',
    'pets': '5 dog, 3 cats',
    'food': 'Sushi',
    'color': 'blue'
}

let {
    name, 
    food,
    color = 'blue',
    ...everyone
} = person

console.log("Name is ", name)
console.log(everyone)
console.log("favorite food is ", food)
console.log("favorite color is ", color)