// This is a global var
var course = "JavaScript for Beginners";

// This is a global function
function doAnything(){
    // This is a local variable
    // This is only accessible in its local ecosystem
    var Teacher = "Myself"
    // Two console logs
    console.log("!!!", Teacher)
    console.log("!!!", course)
}
// Exec. the function
doAnything(course)
// Console.log
console.log("OUT OF SCOPE", Teacher)