function calculateBillTotal(preTaxAndTipAmount) {
    // your code here
    let tax = 0.095;
    let tip = 0.15;
    return (preTaxAndTipAmount * tax) + (preTaxAndTipAmount * tip) + preTaxAndTipAmount;
}
var output = calculateBillTotal(20);
console.log(output); // --> 24.9