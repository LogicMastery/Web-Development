// Array means we're making a list of strings or a number or any kind of datatypes
var names = ["David", "Haruka", "Julianne", "Yuki"]
console.log(names)

// .push() means adding another string to our array
names.push("Brother")
console.log(names)
// We added .slice() to remove half of our strings inside an array, which means we only have two strings left
twoItems = names.slice(0,2)
console.log(twoItems)
// .pop() means removing the end of an array
brother = names.pop()
console.log(brother)
// typeof() means checking what type of datatype is the variable brother 
console.log(typeof(brother))
console.log(names)
// .length means counting how many arrays are in the list
leng = names.length
console.log(leng)
// You can even create an array using numbers
var num = [25, 50, 90, 100]
console.log(num)