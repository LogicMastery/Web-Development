var names = ["David", "Haruka", "Kirito", "Yuki", "Asuna"]

for(var i = 0; i < names.length; i++){
    var currentName = names[i]
    console.log(i, currentName)
}
var words = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita, obcaecati autem, non voluptate provident beatae soluta blanditiis quod tempore iure reprehenderit, in nesciunt earum corporis odit hic quis et quisquam ex id quibusdam velit distinctio voluptas! Aut expedita harum quis molestiae sit, cum omnis laborum dignissimos repellat non earum culpa.".split(" ")

for (var i = 0; i < words.length; i++){
    var currentEmail = words[i].toLowerCase() + "@gmail.com"

    console.log(i, currentEmail) // if your console logging remember to put your console log inside the for loop
    // if(i % 2 == 0){
    //     continue;
    // }

    if(i == 10){
        break;
    }
}

