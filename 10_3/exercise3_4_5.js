// Quando a promise for resolvida com sucesso, retorne o resultado da divisão desse número por 2, 3, 5 e 10 em um array.

function onSuccess(param) {
  const result = [2, 3, 5, 10].map(e => param / e);
  return result;
}

// Quando a Promise for bem-sucedida, encadeie nela uma segunda Promise que some os elementos do array.

function onSuccessPromise(add) {
  console.log(add.reduce((acc, cur) => acc + cur));
}


// Quando a Promise for rejeitada, imprima, via console.log, a frase “É mais de oito mil! Essa promise deve estar quebrada!”

function onError() {
  console.log('É mais de oito mil! Essa promise deve estar quebrada!');
}

const xablau = new Promise((resolve, reject) => {
  const arr = [];
  for (let i = 0; i < 10; i += 1) {
    arr.push(Math.round(Math.random() * 50)); // criando array com 10 números
  }
  const arrPlus = arr.map(e => e **2).reduce((acc, cur) => cur + acc); // elevando os numeros ao quadrado e somando entre si
  if (arrPlus < 8000) resolve(arrPlus);
  else
    reject();
});

const newXablau = () => {
  xablau
    .then(onSuccess)
    .then(onSuccessPromise)
    .catch(onError);
};

newXablau();