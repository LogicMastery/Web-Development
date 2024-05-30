// Computing num + 100 first the divide it to 5 and it will execute the final result
function DoMath(num) {
    num = Number(num);
    if(num) {
        // Adding two numbers then dividing to 5
        var compute = (num + 100) / 5;
        return compute;
    }else{
        // It execute to false because it has check that they did not type an actual number
        return false;
    }
}

var numbr = DoMath("Kalob")
console.log(numbr)
var answernum = DoMath(50)
console.log(answernum)

// getting the id from the HTML document
function $(id){
    console.log("ID is:", id);
    return document.getElementById(id)
}

var PageTitle = $("page-title");
PageTitle.innerText = "Welcome to my page!";

// Computing celcius to fahrenheit
function CtoF(c_num){
    return (c_num * 1.8) + 32
}

var zero = CtoF(0); console.log(zero);
var fourty = CtoF(40); console.log(fourty);
var boiling = CtoF(100); console.log(boiling);
var freezing = CtoF(-70); console.log(freezing);


