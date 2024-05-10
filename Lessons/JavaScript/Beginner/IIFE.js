var iifename = function() {
    return document.querySelector(".iife").value
};
// when using IIFE make sure to put semicolon at the closing braces
(function LoadApp(){
    console.log("App is currently loading....")
    // all logic will be here......
    console.log("App is loaded")
})();