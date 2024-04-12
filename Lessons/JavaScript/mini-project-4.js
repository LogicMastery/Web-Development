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