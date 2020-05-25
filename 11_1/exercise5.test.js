// Para este exercício, tente adivinhar a saída dos console.log dos testes abaixo sem executá-los 
// e veja se compreendeu bem o funcionamento do beforeEach e do afterEach.

beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
    

//  Primeiro console:   1 - beforeEach
//  Segundo console:    1 - test
//  Terceiro console:   1 - afterEach
//  Quarto console:     1 - beforeEach
//  Quinto console:     2 - beforeEach
//  Sexto console:      2 - test
//  Sétimo console:     2 - afterEach
//  Oitavo console:     1 - afterEach