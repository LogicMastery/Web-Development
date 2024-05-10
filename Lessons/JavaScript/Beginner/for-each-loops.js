var names = ["Haruka", "Yuki", "Asuna", "Logic"]

names.forEach(function(names, index){
    console.log(index, names )
})

var list = document.querySelectorAll(".js-listing-with-for-each-loops")

list.forEach(function(node, index){
    if(index <= 10){
        node.remove()
        return false
    }
})