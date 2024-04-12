/*This code defines a function TipCalc that calculates a total bill amount including a tip. It takes three parameters: TotalAmount (the bill amount), 
tip (the tip percentage, defaulting to 10%), and returnTipOnly (a flag indicating whether only the tip amount should be returned, defaulting to false).

The function calculates the tip amount, adds it to the total bill, and returns either the updated total bill amount or just the tip amount based on the returnTipOnly flag.
The code then demonstrates calling this function with different arguments to calculate the total bill amount or just the tip amount, and logs the results to the console. */
function TipCalc(TotalAmount, tip=10, returnTipOnly=false){
    tip = tip / 100; // 10 --> 0.10
    console.log("tip as a % is ", tip)
    var tipAmount = TotalAmount * tip
    console.log(tipAmount, " is the tip amount")
    TotalAmount = TotalAmount + tipAmount
    console.log(TotalAmount, " is the total amount")
    if(returnTipOnly){
        return tipAmount;
    }
    return TotalAmount;
}

var totalBill = TipCalc(25, 10)
console.log(totalBill)

var totalTip = TipCalc(25, 10, true);
console.log(totalTip)