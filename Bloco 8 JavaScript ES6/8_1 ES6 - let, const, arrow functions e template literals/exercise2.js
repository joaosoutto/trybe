//  2 Crie uma função que receba uma frase e retorne qual a maior palavra.

const biggerWord = (phrase) => {
    const arr = phrase.split(' ');
    let cont = 0;
    let max = '';
    arr.forEach((event) => {
      if (event.length > cont) {
        cont = event.length;
        max = event;
      }
    });
    console.log(`"${max}" is the bigger word in the phrase.`);
  };
  biggerWord('Hoje é dia 12 de maio e eu deveria estar viajando para Colômbia');