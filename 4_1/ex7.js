/* 7- Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:

Porcentagem >= 90 -> A

Porcentagem >= 80 -> B

Porcentagem >= 70 -> C

Porcentagem >= 60 -> D

Porcentagem >= 50 -> E

Porcentagem < 50 -> F

O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100. */

let grade = 23;

if ((grade < 0) || (grade > 100)){
    console.log("Error! Grade cannot be greater than 100 or less than 0!!")
}
else if (grade >= 90){
    console.log("Concept A!");
}
else if (grade >= 80){
    console.log("Concept B!");
}
else if (grade >= 70){
    console.log("Concept C!");
}
else if (grade >= 60){
    console.log("Concept D!");
}
else if (grade >= 50){
    console.log("Concept E!");
}
else if (grade < 50){
    console.log("Concept F!");
}