// Ainda com a mesma função do primeiro exercício, utilizando o mock,
// cria uma nova implementação que receba três parâmetros e retorne sua multiplicação. 
// Após fazer os devidos testes para ela, resete sua implementação 
// e crie uma nova que recebe um parâmetro e retorne seu dobro. Faça os testes necessários.

const ex3 = require('./ex3');
jest.mock('./ex3.js');

// Testes:

test('#randomNum', () => {

    // primeira implementação
    randomNum = jest.fn().mockImplementation((a, b, c) => a * b * c);
    randomNum(1, 3, 2);

    expect(randomNum).toHaveBeenCalledTimes(1);
    expect(randomNum(1, 3, 2)).toBe(6);
    expect(randomNum).toHaveBeenCalledTimes(2);
    expect(randomNum).toHaveBeenLastCalledWith(1, 3, 2);

    // resetando o mock
    randomNum.mockReset();

    // segunda implementação
    randomNum = jest.fn().mockImplementation((a) => a * 2);
    randomNum(500);

    expect(randomNum).toHaveBeenCalledTimes(1);
    expect(randomNum(500)).toBe(1000);
    expect(randomNum).toHaveBeenCalledTimes(2);
    expect(randomNum).toHaveBeenLastCalledWith(500);


});