// REDUCE

// O reduce é uma função muito poderosa, que permite que a gente combine 
// todo o resultado da aplicação da função passada como parâmetro nos elementos do array em um único resultado.

// Vamos fazer um m somatório para entender o conceito do reduce. 
const number = [1, 2, 3, 4, 5, 6]
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, {}); // => esse colchete volta o resultado em um objeto.

console.log(sum)

// =============================================================================================================================

// Usando o reduce, podemos combinar todas essas palavras em uma única frase
// Geralmente vocês vão usar o reduce com dois argumentos: o acumulator e elemento atual. 
// O acumulador, como vimos no exemplo anterior, armazena a combinação dos resultados anteriores da execução da função do reduce

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

const epicPhrase = epic.reduce((accumulator, currentValue) => `${accumulator} ${currentValue}`)

console.log(epicPhrase)

// ==============================================================================================================================

// Imagine que temos um array de pessoas

const players = [
    { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
    { fullName: 'Ronaldinho Gaúcho', email: 'bruxo@futebol.br' },
    { fullName: 'Ronaldo Fenômeno', email: 'cortedocascao@futebol.br' },
    { fullName: 'Túlio Maravilha', email: 'deputado@futebol.br' },
];

// Mudar a estrutura dos nossos objetos de pessoas para que possamos usar o nome delas como chave e o email como valor. 
// Esperado: {chave[nomedapessoa]: valor[email]}

const newPlayers = players.reduce((accumulator, currentValue, index) => {
    console.log(`accumulator[${index}]: `, accumulator);
    console.log(`currentValue[${index}]: `,currentValue);

    // accumulator é um objeto
    // objeto[nome_da_chave] = valor
    // { 'Adriano Imperador': 'didico@futebol.br'}
    accumulator[currentValue.fullName] = currentValue.email;

    return accumulator;
}, {}) // {} no caso de objetos, [] no caso de arrays, números ou strings).

// Exemplo com Map
let objeto = {}
players.map(elemento => {
    // { fullName: 'Adriano Imperador', email: 'didico@futebol.br' },
    objeto[elemento.fullName] = elemento.email;
})

players.map((element, index) => { // Tenho acesso ao elemento(dado) e a sua posicao(index)

})

players.reduce((accumulator, currentvalue, index) => { // acumulador || currentValue elemento na interacao atual e sua posicao(index)

})

console.log('players:', players); // Antes do reduce o array de fora
console.log('newPlayers:', newPlayers); // depois do reduce o novo array


