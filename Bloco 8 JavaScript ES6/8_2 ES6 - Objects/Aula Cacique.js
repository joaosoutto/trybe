const quadrinho1 = {
    collection: 'Tio Patinhas',
    title: 'O tesouro dos Dez avatares'
}

// console.log('Collection value', quadrinho1.collection) // Acessando valores das chaves dentro dos objetos
// console.log('Title value', quadrinho1.title)

// -------------------------------------

const objeto = { // Estrutura - chave: valor
    chave1: "valor1", // Primeira entrada
    chave2: "valor2" // Segunda Entrada
}

// -------------------------------------

quadrinho1.author = 'Don Rosa' // Atribuindo numa nova chave e valor com "dot notation"
quadrinho1['publishingCompany'] = 'Editora Abril' // Atribuindo numa nova chave e valor com uso de brackets

// console.log(quadrinho1)

const novaEditora = 'Panini'

quadrinho1.publishingCompany = novaEditora

// console.log('quadrinho1 with new publishing company:', quadrinho1);

// ------------------------------------- 
// Object Keys, Object Values, Object Entries

// console.log('Quadrinho 1 tem as seguintes chaves: ', Object.keys(quadrinho1))

// console.log('Quadrinho 1 tem a chave author ? ', Object.keys(quadrinho1).includes('author'))

// console.log('Quadrinho 1 tem a chave numberOfPages ?', Object.keys(quadrinho1).includes('numberOfPages'))

// console.log('Quadrinho 1 values: ', Object.values(quadrinho1))

// console.log('Quadrinho 1 entries: ', Object.entries(quadrinho1))

// Estrutura de retorno Object Entries
// [  Array padrao
//      Um array para cada entrada [chave, valor]
// ]

// ------------------------------------- Easter egg why Const on objects

// const objeto =  { chave: valor}
// objeto -> Ta no endereço de memoria XYR412x941270 -> {chave: valor} 

// objeto = 'xablau' // variable cannot be re-assigned
// objeto.name = 'xablau' // Não to sobrescrevendo variavel logo funfa demais!

// ------------------------------------- 
// Object Assign

const quadrinho2 = {
    collection: 'The Order of the Stick',
    title: 'No Cure for Paladin Blues',
};

const authorObject = { author: 'Rich Burlew' }

Object.assign(quadrinho2, authorObject) // Clonando objeto

// console.log('Quadrinho 2 nao clonadito: ', quadrinho2)
// console.log('Objeto Autor: ',authorObject)

const cloneQuadrinho2 = Object.assign({}, quadrinho2) // Clonando objeto de forma independente sem que um afete alteracões ao outro

// cloneQuadrinho2.numberOfPage = 40;

// console.log('Quadrinho 2 clonadito: ', cloneQuadrinho2)

// console.log(quadrinho1)

const novoQuadrinho = Object.assign(quadrinho2, { author: 'Novo Autor' }) // Clonando objeto de forma que se alterar um altera 
                                                                         // o outro, pois estão referenciados ao mesmo endereçø de memoria

const arr = [1, 2, 3] 

console.log(typeof(arr)) // Array are objects OMG

// ------------------------------------- 
// Exercicio 5 

const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

const allLessons = Object.assign({}, {lesson1, lesson2, lesson3}) // Não estamos mesclando os objetos, logo podemos chamar todos dentro um apenas.





