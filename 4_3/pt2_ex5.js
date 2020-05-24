/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3];.

Valor esperado no retorno da função: 2. */

function maisRepetido (numeros) {
    let countRepetido = 0;
    let countNumero = 0;
    let indexNumeroRepetido = 0;
    for ( let index in numeros) {
      let verificaNumero = numeros[index];
      for(let index2 in numeros) {
        if(verificaNumero === numeros[index2]) {
          countNumero += 1;
        }
      }
      
      if (countNumero > countRepetido) {
        countRepetido = countNumero;
        indexNumeroRepetido = index;
      }
      countNumero = 0;
    }
    return numeros[indexNumeroRepetido];
  } 

  let arrTest = [2, 3, 2, 5, 8, 2, 3];
  console.log(maisRepetido(arrTest));