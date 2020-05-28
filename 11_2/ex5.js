// Utilizando as mesmas funções do exercício anterior, repita a implementação para a primeira função.
// Após repetir a implementação, restaure a implementação original e crie os testes necessários para validar.

// Primeira função
const toUpperCase = (str) => {
    return str.toUpperCase();
};

// Segunda função
function firstLetter(str) {
    return str.charAt(0);
};

// Terceira função
function concatStr(a, b) {
    return `${a} ${b}`;
}

module.exports = { toUpperCase, firstLetter, concatStr };