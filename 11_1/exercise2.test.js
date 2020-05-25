// Utilizando a sintaxe de Promise, faça um teste que verifique o resultado da função getUserName
// para o caso em que o usuário é encontrado, e também um teste para o caso em que o usuário não é encontrado.

// Dica: Veja os dados falsos utilizados no banco de dados, disponíveis na variável users para saber quais IDs existem.

const users = {
  4: { name: "Mark" },
  5: { name: "Paul" },
};

const findUserById = (id) => {
  return new Promise((resolve, reject) => {
    if (users[id]) {
      return resolve(users[id]);
    }

    return reject({ error: "User with " + id + " not found." });
  });
};

const getUserName = (userID) => {
  return findUserById(userID).then((user) => user.name);
};


// testes aqui:

//testando com id existente
describe('quando um usuário existe', () => {
	test('retorne o usuário', () => {
		expect.assertions(1);
		return getUserName(4).then(data => {
			expect(data).toEqual('Mark');
		});
	});
});

//testando com id inexistente

describe('quando um usuário não existe', () => {
  test('retorne um erro', () => {
    return getUserName(7).catch(error => {
      expect(error).toEqual({ error: 'User with 7 not found.' })
    })
  })
})