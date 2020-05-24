//  10- Escreva um programa que, dado o custo de um produto e seu valor de venda, calcule quanto de lucro (em números absolutos) a empresa terá ao vender mil desses produtos.

let prodCost = 20;
let sellValue = 40;

if (prodCost <= 0 || sellValue <= 0){
    console.log("Error! Input value cannot be zero!!")
}
else {
    let totalProfit = (sellValue - (prodCost * 1.2)) * 1000;
    console.log(totalProfit);
}