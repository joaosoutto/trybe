/* Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.

Valor de teste: N = 5.

Valor esperado no retorno da função: 1+2+3+4+5 = 15. */

function sumAll (num) {
    let sum = 0;
    for ( i = 1; i <= num; i+=1 ) {
      sum = sum + i;
    }
    return sum;
  }
  
  console.log(sumAll(5));