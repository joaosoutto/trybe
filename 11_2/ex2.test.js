// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação
// que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. 
// Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const ex2 = require('./ex2');
jest.mock('./ex2.js');

// Testes:

test('#randomNum', () => {

    randomNum = jest.fn().mockImplementation((a, b) => a / b);
    randomNum(10, 5);

    expect(randomNum).toHaveBeenCalledTimes(1);
    expect(randomNum(10, 5)).toBe(2);
    expect(randomNum).toHaveBeenCalledTimes(2);
    expect(randomNum).toHaveBeenLastCalledWith(10, 5);
});