let productCost = 20;
let sellValue = 40;

if (productCost < 0 || sellValue < 0) {
    console.log("Error!")
}
else {
    let totalProfit = (sellValue - (productCost * 1.2)) * 1000
    console.log(totalProfit);
}