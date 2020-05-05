// CÓDIGO USADO PARA O EXERCÍCIO:

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

//----------------------------------------------EXERCÍCIO 1---------------------------------------------------------------
    //Crie uma função para adicionar o turno da manhã na lesson2. Essa função deve possuir três parâmetros,
    // sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela. DUVIDOSO, CHEGAR COLEGAS

  const incluiTurno = (lesson, key, value) => lesson[key] = value;
  incluiTurno(lesson2, 'turno', 'manha');
  //console.log(lesson2);
//----------------------------------------------EXERCÍCIO 1---------------------------------------------------------------



//----------------------------------------------EXERCÍCIO 2---------------------------------------------------------------
  // Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

  const objKeys = (lesson) => Object.keys(lesson);
  //console.log(objKeys(lesson3));
//----------------------------------------------EXERCÍCIO 2---------------------------------------------------------------



//----------------------------------------------EXERCÍCIO 3---------------------------------------------------------------
  //Crie uma função para mostrar o tamanho de um objeto.

  const objSize = (obj) => Object.keys(obj).length;
  //console.log(objSize(lesson3));
//----------------------------------------------EXERCÍCIO 3---------------------------------------------------------------


//----------------------------------------------EXERCÍCIO 4---------------------------------------------------------------
  //Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.

  const objValue = (lesson) => Object.values(lesson);
  //console.log(objValue(lesson3));
//----------------------------------------------EXERCÍCIO 4---------------------------------------------------------------



//----------------------------------------------EXERCÍCIO 5---------------------------------------------------------------
  //Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo
  //objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons).

  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});
  //console.log(allLessons);
//----------------------------------------------EXERCÍCIO 5---------------------------------------------------------------



//----------------------------------------------EXERCÍCIO 6---------------------------------------------------------------
  //Usando o objeto criado no exercício 5, crie uma função que retorne o número total de estudantes em todas as aulas.

  const allStudents = Object.values(allLessons).reduce((total, num) => {
    return total + num.numeroEstudantes;
  }, 0);
  //console.log(allStudents)
//----------------------------------------------EXERCÍCIO 6---------------------------------------------------------------



//----------------------------------------------EXERCÍCIO 7---------------------------------------------------------------
  //Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto.

  const getValueByNumber = (lesson, ind) => {
    const value = Object.values(lesson)
    return value[ind]
  }

  //console.log(getValueByNumber(lesson3, 3))
//----------------------------------------------EXERCÍCIO 7---------------------------------------------------------------



//----------------------------------------------EXERCÍCIO 8---------------------------------------------------------------
  //Crie uma função que verifique se o par (chave / valor) existem na função. Essa função deve possuir três parâmetros,
  // sendo eles: o objeto, o nome da chave e o valor da chave.

  