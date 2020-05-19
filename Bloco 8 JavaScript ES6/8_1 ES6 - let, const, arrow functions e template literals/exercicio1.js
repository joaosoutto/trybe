// EXERCICIO 1 - Crie uma função que receba um número e retorne seu fatorial.

function fatorial(num) {
    let resultado = num;
    for (let i = 1; i < num; i++) {
        resultado = resultado * i;
    }
    return resultado;
}

console.log(fatorial(3));

//forma literal:
const fatorialBonus = num => (num <= 1) ? 1 : num * fatorialBonus(num - 1);
console.log(fatorialBonus(3))