const cliente = {
    nome: "Andre",
    idade: 32,
    cpf: "2342",
    email: "andre@hot.com",
  };
  
//   console.log(`Nome do cliente ${cliente["nome"]}`);
//   console.log(`Os 3 primeiros digitos do cpf são ${cliente["cpf"].substring(0, 3)}`);
  
const chaves =  ["nome", "idade", "cpf", "email", "altura"]

chaves.forEach((chave) => {
    console.log(`A chave ${chave} tem o valor ${cliente[chave]}`);
})