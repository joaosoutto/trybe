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

  
  const allLessons = Object.assign({}, {lesson1, lesson2, lesson3});

  //crie uma função que retorne o número total de estudantes em todas as aulas.

  const allStudents = obj => {
    return obj.lesson1.numeroEstudantes + obj.lesson2.numeroEstudantes + obj.lesson3.numeroEstudantes;
  }

  console.log(allStudents(allLessons))