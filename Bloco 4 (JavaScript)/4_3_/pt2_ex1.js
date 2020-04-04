function ehPalindromo(palavra) {
let palindromo = "";

for(let index = palavra.length - 1; index >= 0; index--) {
    palindromo += palavra[index]
}
if (palavra == palindromo) {
    return "true"
}
else {
    return "false"
}

}

console.log(ehPalindromo("strogonoff"));