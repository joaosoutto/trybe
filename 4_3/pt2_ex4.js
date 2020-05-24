/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.

Valor esperado no retorno da função: Fernanda. */

function biggerName(arr) {
    let longer = arr[0];
    for ( let i = 0; i < arr.length; i+=1) {
      if ( longer.length < arr[i].length ) {
        longer = arr[i];
      }
    }
  return longer;
  }

  let testArr = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
  console.log(biggerName(testArr));