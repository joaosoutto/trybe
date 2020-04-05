let prodCost = 20;
let sellValue = 40;

if (prodCost <= 0 || sellValue <= 0){
    console.log("Error! Input value cannot be zero!!")
}
else {
    let totalProfit = (sellValue - (prodCost * 1.2)) * 1000;
    console.log(totalProfit);
}