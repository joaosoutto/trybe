// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função.
// Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

const ex5 = require('./ex5');

// Testes:

test('#toLowerCase', () => {

    // //segunda implementação
    const lowerCase = jest
    .spyOn(ex5, 'toUpperCase')
    .mockImplementation((str) => {
        return str.toLowerCase();
    });

    ex5.toUpperCase('BANANA');

    expect(ex5.toUpperCase).toHaveBeenCalledTimes(1);
    expect(ex5.toUpperCase('BANANA')).toEqual('banana');
    expect(ex5.toUpperCase).toHaveBeenCalledTimes(2);
    expect(ex5.toUpperCase).toHaveBeenLastCalledWith('BANANA');

    // //resetando o mock
    ex5.toUpperCase.mockRestore();

    expect(ex5.toUpperCase('banana')).toEqual('BANANA');
});
