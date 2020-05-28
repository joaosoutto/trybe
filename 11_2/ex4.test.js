// Dentro de um mesmo arquivo, crie três funções. 
// A primeira deve receber uma string e retorná-la em caixa alta. 
// A segunda deve também receber uma string e retornar só a primeira letra. 
// A terceira deve receber duas strings e concatená-las. 
// Faça o mock do arquivo. 
// Faça uma nova implementação para a primeira função, mas agora ela deve retornar a string em caixa baixa. 
// Para a segunda função, uma nova implementação deve retornar a última letra de uma string. 
// A terceira deve receber três strings e concatená-las.

const ex4 = require('./ex4');
jest.mock('./ex4.js');

// Testes:

test('#toLowerCase', () => {
    //segunda implementação
    ex4.toUpperCase = jest.fn().mockImplementation((str) => {
        return str.toLowerCase();
    });
    ex4.toUpperCase('BANANA');

    expect(ex4.toUpperCase).toHaveBeenCalledTimes(1);
    expect(ex4.toUpperCase('BANANA')).toBe('banana');
    expect(ex4.toUpperCase).toHaveBeenCalledTimes(2);
    expect(ex4.toUpperCase).toHaveBeenLastCalledWith('BANANA');
});

test('#firstLetter', () => {
    //segunda implementação
    ex4.firstLetter = jest.fn().mockImplementation((str) => {
        return str.slice(-1);
    });
    ex4.firstLetter('banana');

    expect(ex4.firstLetter).toHaveBeenCalledTimes(1);
    expect(ex4.firstLetter('banana')).toBe('a');
    expect(ex4.firstLetter).toHaveBeenCalledTimes(2);
    expect(ex4.firstLetter).toHaveBeenLastCalledWith('banana');
});


test('#concatStr', () => {
    //terceira implementação
    ex4.concatStr = jest.fn().mockImplementation((a, b, c) => {
        return `${a} ${b} ${c}`;
    });
    ex4.concatStr('banana', 'é', 'amarela');

    expect(ex4.concatStr).toHaveBeenCalledTimes(1);
    expect(ex4.concatStr('banana', 'é', 'amarela')).toBe('banana é amarela');
    expect(ex4.concatStr).toHaveBeenCalledTimes(2);
    expect(ex4.concatStr).toHaveBeenLastCalledWith('banana', 'é', 'amarela');
});
