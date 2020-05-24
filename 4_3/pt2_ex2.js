//  Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
/* Array de teste: [2, 3, 6, 7, 10, 1];.

Valor esperado no retorno da função: 4. */

function highestI (arr) {
    let highestValue = arr[0];
    let index = 0;
    for ( let i = 0; i < arr.length; i+=1 ) {
      if ( highestValue < arr[i]) {
        highestValue = arr[i];
        index = i;
      }
    }
    return index;
  }  
  

  let arrTest = [2, 3, 6, 7, 10, 1];
  console.log(highestI(arrTest));