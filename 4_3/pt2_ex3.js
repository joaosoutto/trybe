//  Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

/* Array de teste: [2, 4, 6, 7, 10, 0, -3];.

Valor esperado no retorno da função: 6. */

function lowerI (arr) {
    let lowerValue = arr[0];
    let index = 0;
    for ( let i = 0; i < arr.length; i+=1 ) {
      if ( lowerValue > arr[i]) {
        lowerValue = arr[i];
        index = i;
      }
    }
    return index;
  }  
  

  let arrTest = [2, 4, 6, 7, 10, 0, -3];
  console.log(lowerI(arrTest));