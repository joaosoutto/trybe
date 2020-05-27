// Crie uma função que faça requisição para a api dog pictures . 
// Mocke a requisição e crie dois testes. 
// O primeiro deve interpretar que a requisição se resolveu e teve como valor “request sucess”. 
// O segundo deve interpretar que a requisição falhou e ter como valor “request failed”. 
// Crie todos os testes que achar necessário.

const fetch = require('node-fetch');
const ex6 = require('./ex6');

test( "success", async ()=>{
    ex6.fetchDog = jest.fn().mockResolvedValue("request success")
    
  
    expect(ex6.fetchDog()).resolves.toBe("request success");
  });
  
  test( "failed", async ()=>{
  
    ex6.fetchDog = jest.fn().mockRejectedValue("request failed")
    expect(ex6.fetchDog()).rejects.toBe("request failed");
    
  });