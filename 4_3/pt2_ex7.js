/* Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

Valor de teste: "trybe" e "be"

Valor esperado no retorno da função: true

verificaFimPalavra("trybe", "be");

Retorno esperado: true

verificaFimPalavra("joaofernando", "fernan");

Retorno esperado: false */

function checkWords(strWord, strEnd) {
    for ( i = 0; i < strEnd.length; i+=1) {
      if ( strEnd[(strEnd.length - 1 - i)] !== strWord[(strWord.length - 1 - i)] ) {
        return false;
      }
    }
    return true;
  }
  console.log(checkWords("abóbora","feijão"));