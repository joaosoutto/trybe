// EXEMPLO DE UM OBJETO

  const customer = {
    firstName: 'Roberto',
    age: 22,
    job: 'Teacher',
  };

// PARTE I ADICIONANDO PROPRIEDADES COM A CHAVE - KEY ----------------------------------------------------------------------------------

  let newKey = 'lastName'; // aqui você adiciona um parâmetro novo ao objeto.
  const lastName = 'Ferreira'; // aqui voce adiciona o valor a esse parâmetro criado.
  customer[newKey] = lastName; // aqui você dá o input desse novo parametro criado dentro do objeto. 

// o processo se repete abaixo com um novo parâmetro:
  newKey = 'fullName';
  const fullName = `${customer.firstName} ${customer.lastName}`;
  customer[newKey] = fullName;

// mais um exemplo:
  newKey = 'signo';
  const signo = 'Peixes'
  customer[newKey] = signo;
  console.log(customer) //retorna: { firstName: 'Roberto',
  //    age: 22,
  //    job: 'Teacher',
  //    lastName: 'Ferreira',
  //    fullName: 'Roberto Ferreira',
  //    signo: 'Peixes' }

  // PRATICANDO: FALTOU

  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  // PARTE II OBJECT.KEYS------------------------------------------------------------------------------------------------
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys
  // utilizado para listar as chaves de um objeto, retornando-as em um -- array --

  const student = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom',
    CSS: 'Ótimo',
  };

  console.log(Object.keys(student)) // retorna: [ 'Html', 'Css', 'JavaScript', 'SoftSkills', 'Git', 'CSS' ]

  // PRATICANDO: crie uma função que exiba as habilidades do objeto student. EXIBIÇÃO: key - value:

  const student1 = {
    Html: 'Bom',
    Css: 'Ótimo',
    JavaScript: 'Ruim',
    SoftSkills: 'Ótimo',
    Git: 'Bom',
  };

  const skillsList = (student) => {
      const allSkills = Object.keys(student);
      for (i in allSkills) {
          console.log(`${allSkills[i]}: ${student[allSkills[i]]}!`)
      }
  }

  console.log('Estudante: João');
  skillsList(student1);

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PARTE III OBJECT.VALUES ------------------------------------------------------------------------------------------------
//https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/values
// mesma lógica do object.keys, mas nesse caso, lista-se os valores da cada chave

const student = {
    Html: 'Muito Bom',
    Css: 'Bom',
    JavaScript: 'Ótimo',
    SoftSkill: 'Ótimo',
  };

  //função SEM object.values
  const listSkillsWithFor = (student) => {
    const skills = [];
    for(skill in student) {
      skills.push(student[skill]);
    }
  
    return skills;
  };
  
  //função COM object.values
  const listSkillsWithValues = (student) => Object.values(student);
  

  // Sem Object.values
  console.log(listSkillsWithFor(student)); //return: [ 'Muito Bom', 'Bom', 'Ótimo', 'Ótimo' ]
  
  // Com Object.values
  console.log(listSkillsWithValues(student)); //return: [ 'Muito Bom', 'Bom', 'Ótimo', 'Ótimo' ]

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// PARTE IV OBJECT.ENTRIES ------------------------------------------------------------------------------------------------
// https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/entries
//retorna um array com os pares (chave - valor) do objeto

const países = {
    França: 'Paris',
    Brasil: 'Brasília',
    Espanha: 'Madrid',
    Portugal: 'Lisboa',
  };

  const pairKeyValue = Object.entries(países); // atribuindo o Object.entries a uma variável
  console.log(pairKeyValue); //retornando a variável com o valor object.entries embutida. Retorna: 
  //[ [ 'França', 'Paris' ], [ 'Brasil', 'Brasília' ], [ 'Espanha', 'Madrid' ], [ 'Portugal', 'Lisboa' ] ]
  //vide que o retorno de um Object.entries é sempre um array com vários arrays dentro de valor (chave-valor)!!!!!!

  //para ver os valores do object.entries separadamente, sem ser por arrays dentro de arrays, adicione o for abaixo, por exemplo:
  for(i in pairKeyValue) {
    console.log('--------');
    console.log('--------');
    console.log('Pais:', pairKeyValue[i][0]);
    console.log('Capital:', pairKeyValue[i][1]);
  };

  //CONVERTENDO UM OBJECT EM UM MAP: <-----------
  let eu = {
       nome: 'João',
       sobrenome: 'Soutto',
       idade: 28,
       signo: 'Peixes',
    };

    let map = new Map(Object.entries(eu));
    console.log(map); // retorna: Map { ' 'nome' => 'João', 'sobrenome' => 'Soutto', 'idade' => 28, 'signo' => 'Peixes' }

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//PARTE V OBJECT.ASSIGN ------------------------------------------------------------------------------------------------
//método utilizado para copiar os valores de TODAS as propriedades de um ou mais objetos para um objeto de destino
// A função recebe um numero qualquer de parâmetros. Todos são agregados como valores para adicionar ao objeto de destino!
Object.assign(destino, objeto1);
Object.assign(destino, objeto1, objeto2);
Object.assign(destino, objeto1, objeto2, objeto3, objeto4);
//Como pode ver ele recebe pelo menos DOIS parâmetros, de forma que o PRIMEIRO sempre será o OBJETO DE DESTINO
// e os parâmetros restantes serão os valores que serão adicionados a esse objeto destino.

const me = {
    name: 'João',
    lastName: 'Soutto',
    age: 28,
  };
  
  const info = {
    age: 28,
    job: 'dev jr',
  };
  
  const family = {
    sister: ['Gabriela', 'Luana'],
    mother: 'Ana',
    dad: 'Romeu'
  };
  
  Object.assign(me, info, family)
    console.log(me) // retorna: { name: 'João', lastName: 'Soutto', age: 28, job: 'dev jr',
//  sister: [ 'Gabriela', 'Luana' ],  mother: 'Ana', dad: 'Romeu' }

//voce pode usar o object.assign para clonar uma variável, tipo 'let obj {nome: 'joao', idade: 28};' -> 'let obj1 = obj'.
//mas se você fizer obj1.nome = 'Maria', voce também mudará a propriedade do obj origem. 
//PARA CLONAR SEM ALTERAR O OBJETO ORIGEM, FAÇA UM CLONE USANDO {} COMO O OBJETO DE DESTINO:

const me = {
    name:'João',
  };
  
  const lastName = {
    lastName: 'Soutto',
  };
  
  const meClone = Object.assign({},me,lastName);
  newPerson.name = 'Gilberto';
  console.log(meCLone); //retorna {name: 'Gilberto', Sobrenome: 'Soutto'}
  console.log(me); // retorna {name: 'João'}