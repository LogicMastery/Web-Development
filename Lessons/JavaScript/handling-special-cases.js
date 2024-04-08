// Using an else if statement when there are a lot of names that are not true, you need to throw an else if statement
var name = "David"

if(name == "David"){
    console.log("Hi! David, welcome back!")
}else if(name == "Mark") {
    console.log("Hi! Mark, welcome back!")
}else if(name == "Julianne") {
    console.log("Hi! Julianne, welcome back!")
}else if(name == "Haruka") {
    console.log("Hi! Haruka, welcome back!")
}else{
    console.warn("You entered a wrong name")
}

/* Switch statement is like an else if statement but a much simpler solution 
if the #1 name is not visible, then use the #2 or #3 name. If they are both not visible, it will throw a warning */
var FriendsName = "Haruka"
switch(FriendsName) {
    case "Haruka":
        console.log("Hi! Haruka")
        break;
    case "Yuki":
        console.log("Hi! Yuki")
        break;
    case "Takahashi":
        console.log("Hi! Takahashi")
        break;
    default:
        console.warn("No friends name matched")
        break;
}