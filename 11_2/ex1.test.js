// Crie uma função que gere um número aleatório entre 0 e 100. 
// Você irá criar também os testes para essa função. 
// Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, 
// qual seu retorno e quantas vezes foi chamada.

const ex1 = require('./ex1')

// Testes:

test('#randomNum', () => {

    randomNum = jest.fn().mockReturnValue(10);
    expect(randomNum).toHaveBeenCalledTimes(0);
    expect(randomNum()).toBe(10);
    expect(randomNum).toHaveBeenCalledTimes(1);
})