// Reescreva o teste do exercício anterior, desta vez utilizando a sintaxe de async/await.

// Dica: Utilize o try/catch para o caso de erro.

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

test("se o usuário existe", async () => {
  const userOk = await getUserName(4);
  expect(userOk).toEqual("Mark");
});

//testando com id inexistente

test("se o usuário não existe", async () => {
  try {
    await getUserName(7);
  } catch (error) {
    expect(error).toEqual({ error: "User with 7 not found." });
  }
});
