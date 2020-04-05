let num1 = 24;
let num2 = 15;
let num3 = 44;


if ((num1 > num2) && (num1 > num3)){
    console.log("o maior número é " + num1);
}
else if ((num3 > num1) && (num3 > num2)){
    console.log("O maior número é " + num3);
}
else {
    console.log("O maior número é " + num2);
}