//  Agora, um passo para trás: vamos fazer, passo a passo, uma Promise. Primeiramente, instancie uma Promise.
//  Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
//  Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida.
//  Caso contrário, ela deve ser rejeitada.
//  Acresça um then e um catch à Promise com qualquer coisa dentro só para que o código funcione.

function onSuccess() {
  console.log("DEU BOM!");
}

function onError() {
  console.log("Deu bom não");
}

const xablau = new Promise((resolve, reject) => {
  const arr = [];
  for (let i = 0 ; i < 10; i += 1) {
    arr.push(Math.round(Math.random() * 50)); // criando o array com 10 números aleatórios.
  }
  const arrPlus = arr.map(e => e **2).reduce((acc, cur) => cur + acc); // elevando os números do array ao quadrado e somando os elementos entre si. 
  if (arrPlus < 8000) resolve();
  else reject();
});

xablau.then(onSuccess).catch(onError);
