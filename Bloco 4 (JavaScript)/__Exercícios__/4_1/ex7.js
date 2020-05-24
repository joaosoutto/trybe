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