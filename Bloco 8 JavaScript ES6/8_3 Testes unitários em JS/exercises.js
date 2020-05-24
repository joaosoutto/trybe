// ----------------------------- EXERCÍCIO 1 ----------------------------------------------------------

const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

// 1.1 Teste se o retorno de sum(4, 5) é 9
    assert.equal(sum(4, 5), 9)

// 1.2 Teste se o retorno de sum(0, 0) é 0
    assert.equal(sum(0, 0), 0)

// 1.3 Teste se a função sum lança um erro quando os parametros são 4 e "5"(string 5)
    assert.deepStrictEqual(sum(4, "5"), 9)

// 1.4 Teste se a mensagem de erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")
    assert.deepStrictEqual(sum(4, "5"), 9)

// ----------------------------- EXERCÍCIO 1 - FIM ----------------------------------------------------------





// ----------------------------- EXERCÍCIO 2 -------------------------------------------------------------

const assert = require('assert');

function myIndexOf(arr, item) {
  let searchedIndex = -1;
  for (let i = 0; i < arr.length; i += 1) {
    if (item === arr[i]) {
      searchedIndex = i;
    }
  }
  return searchedIndex;
}

// 2.1 Teste se a chamada myIndexOf([1, 2, 3, 4], 3) retorna o valor esperado
    assert.deepEqual(myIndexOf([1, 2, 3, 4], 3), 2)

// 2.2 Teste se a chamada myIndexOf([1, 2, 3, 4], 5) retorna o valor esperado
    assert.deepEqual(myIndexOf([1, 2, 3, 4], 5), -1)

// ----------------------------- EXERCÍCIO 2 - FIM ----------------------------------------------------------





// ----------------------------- EXERCÍCIO 3 ----------------------------------------------------------------

const assert = require('assert');

function mySum(arr) {
  let result = 0;
  for (let item in arr) {
    result += arr[item];
  }
  return result;
}

// 3.1 Teste se a chamada mySum([1, 2, 3, 4]) retorna o valor 10
    assert.equal(mySum([1, 2, 3, 4]), 10)

// 3.2 Teste se a chamada mySum([1, -2, -3, 4]) retorna o valor esperado
    assert.equal(mySum([1, -2, -3, 4]), 0)

// ----------------------------- EXERCÍCIO 3 - FIM ----------------------------------------------------------





// ----------------------------- EXERCÍCIO 4 ----------------------------------------------------------------

const assert = require('assert');

function myRemove(arr, item) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += 1) {
    if (item !== arr[i]) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
}

// 4.1 Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
    assert.deepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 4])

//4.2 Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    assert.notDeepEqual(myRemove([1, 2, 3, 4], 3), [1, 2, 3, 4])

// 4.3 Verifique se o array passado por parâmetro não sofreu alterações --IGNORAR--

// 4.4 Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
    assert.deepEqual(myRemove([1, 2, 3, 4], 5), [1, 2, 3, 4])

// ----------------------------- EXERCÍCIO 4 - FIM ----------------------------------------------------------






// ----------------------------- EXERCÍCIO 5 ----------------------------------------------------------------

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// 5.1 Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
    assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 4])

// 5.2 Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
    assert.notDeepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 3), [1, 2, 3, 4])

// 5.3 Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
    assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 2), [1, 3, 4])

// 5.4 Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado
    assert.deepEqual(myRemoveWithoutCopy([1, 2, 3, 4], 5), [1, 2, 3, 4])

// ----------------------------- EXERCÍCIO 5 - FIM ----------------------------------------------------------




// ----------------------------- EXERCÍCIO 6 ----------------------------------------------------------------

const assert = require('assert');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// 6.1 Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
    assert.equal(myFizzBuzz(15), "fizzbuzz")

// 6.2 Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
    assert.equal(myFizzBuzz(6), "fizz")

// 6.3 Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
    assert.equal(myFizzBuzz(10), "buzz")

// 6.4 Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
    assert.equal(myFizzBuzz(7), 7)

// 6.5 Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
    assert.equal(myFizzBuzz('toot'), false)

// ----------------------------- EXERCÍCIO 6 - FIM ----------------------------------------------------------




// ----------------------------- EXERCÍCIO 7 ----------------------------------------------------------------

const assert = require('assert');

const thereIs = '';

// Teste se uma variável foi definida
    assert.ok(typeof(thereIs) == 'string')

// ----------------------------- EXERCÍCIO 7 - FIM ----------------------------------------------------------




// ----------------------------- EXERCÍCIO 8 ----------------------------------------------------------------

const assert = require('assert');

function thereIs() {}

// Teste se uma função foi definida
    assert.ok(typeof(thereIs) == 'function')

// ----------------------------- EXERCÍCIO 8 - FIM ----------------------------------------------------------




// ----------------------------- EXERCÍCIO 9 ----------------------------------------------------------------

const assert = require('assert');

function change(param) {
  return !param;
}

// Utilize assert.ok() para testar uma condição ?????

// ----------------------------- EXERCÍCIO 9 - FIM ----------------------------------------------------------




// ----------------------------- EXERCÍCIO 10 ----------------------------------------------------------------

const assert = require('assert');

const obj1 = {
  title: 'My Title',
  description: 'My Description',
};

const obj2 = {
  description: 'My Description',
  title: 'My Title',
};

const obj3 = {
  title: 'My Different Title',
  description: 'My Description',
};

// Compare dois objetos (JSON) para verificar se são idênticos ou não
    assert.deepStrictEqual(obj2, obj1)
    
    // assert.deepStrictEqual(obj1, obj3) ou  assert.deepStrictEqual(obj2, obj3) nao passaria pois o valor da chave "title" é diferente,
    // logo, eles não são idênticos. 

// ----------------------------- EXERCÍCIO 10 - FIM ----------------------------------------------------------





