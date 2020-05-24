//  Crie uma função que receba uma string e retorne true se for um palíndromo , ou false, se não for.

function verificaPalindrome(palavra) {
    for ( let i = 0; i < palavra.length; i+=1) {
      if (palavra[i] !== palavra[palavra.length - 1 - i]) {
        return false;
      }
    }
    return true;
  }
  console.log(verificaPalindrome("arara"));
  console.log(verificaPalindrome("trybe"));