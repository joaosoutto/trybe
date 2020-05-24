// MAP
// Ele retorna um novo array após aplicar a função passada por parâmetro a todos os elementos do array original.
// O map é utilizado para aplicar algum tipo de transformação a um array.

// Vamos imaginar que temos um grupo de pessoas com alguns atributos:

const users = [
    { firstName: 'Homer', lastName: 'Simpson', isDriver: true },
    { firstName: 'Marge', lastName: 'Simpson', isDriver: true },
    { firstName: 'Bart', lastName: 'Simpson', isDriver: false },
    { firstName: 'Lisa', lastName: 'Simpson', isDriver: false },
    { firstName: 'Maggie', lastName: 'Simpson', isDriver: false },
];

// Nós queremos enviar uma mensagem pra todos eles, mas só precisamos do primeiro nome para uma mensagem mais personalizada 
// Podemos usar o map para retornar um array apenas com os primeiros nomes de cada pessoa.

const newUsers = users.map(user => user.firstName)

console.log('users:', users);
console.log('newUsers:', newUsers);

//  ================================================================================================================================

// Temos um array com informações sobre pássaros e queremos retornar apenas os nomes dos pássaros, somente em letras minúsculas.

const birds = [
    { ID: 'DV8', Name: 'Eurasian Collared-Dove', Type: 'Dove' },
    { ID: 'HK12', Name: 'Bald Eagle', Type: 'Hawk' },
    { ID: 'HK6', Name: 'Red-Tailed Hawk', Type: 'Hawk' },
    { ID: 'SP11', Name: 'Old World Sparrow', Type: 'Sparrow' },
    { ID: 'DV2', Name: 'Mourning Dove', Type: 'Dove' },
];

// const birdNames = birds.map(element => element.Name).map(element => element.toLowerCase());

// Maaaas cuidado para não utilizar mais HOFs que o necessário
const birdNames = birds.map(element => element.Name.toLowerCase());

// O array antigo não foi alterado e temos um novo array, birdNames:
console.log('antigo array:', birds);
console.log('novo array:', birdNames);
