// Escreva um teste que verifique a chamada do callback de uma função uppercase, que transforma
// as letras de uma palavra em letras maiúsculas. Lembre-se de ter cuidado com os falso-positivos em testes assíncronos.

const uppercase = (str, callback) => {
  callback(str.toUpperCase());
};


// testes aqui:

test("testando função upperCase", (done) => {
  uppercase("bora pra turma 5", (callback) => {
    expect(callback).toBe("BORA PRA TURMA 5");
    done();
  });
});
