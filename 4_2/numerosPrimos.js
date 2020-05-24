//  Faça um programa que diz se um número definido numa variável é primo ou não.

const n = 25;
let cont = 0;

for (let i = 1; i <= n; i++) {
  if (n % i === 0 || n % i === 0) {
    cont += 1;
  }
}

if (cont === 2) {
  console.log('its prime!!');
} else {
  console.log('not prime :(');
}