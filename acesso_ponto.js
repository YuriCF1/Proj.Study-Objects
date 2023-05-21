const cliente = {
  nome: "Andre",
  idade: 32,
  cpf: "2342",
  email: "andre@hot.com",
};

console.log(`Nome do cliente ${cliente.nome}`);
console.log(`Os 3 primeiros digitos do cpf são ${cliente.cpf.substring(0, 3)}`);
