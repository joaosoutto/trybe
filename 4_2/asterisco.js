//  1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

/* 
n = 5
*****
*****
*****
*****
***** 
*/

let n = 5;
let star = "*";

for (i = 0; i < n; i++){
    let quad = star.repeat(n);
    console.log(quad);
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 2- Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo com 5 asteriscos de base. Por exemplo:

/* 
n = 5
*
**
***
****
***** 
*/

let n = 5;
let star = "*";

for (i = 0; i <= n ; i++){
    let tri = star.repeat(i);
    console.log(tri);
}

//--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

// 3- Agora inverta o lado do triângulo. Por exemplo:

/* 
n = 5
    *
   **
  ***
 ****
*****
 */

let n = 5;
let star = "*";
let space = " ";

for (i = 0; i < n ; i++){
    let triRight = space.repeat((n - i)) + star.repeat(i + 1);
    console.log(triRight);
}




