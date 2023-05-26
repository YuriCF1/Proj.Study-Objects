const cliente = {
  nome: "Don Pedro II",
  idade: 32,
  email: "pindorama@reino.com",
  telefone: ["114444444", "115555555"],
};

// cliente.enderecos = [
//   {
//     rua: "R. Isabel",
//     numer: 1808,
//     apartamento: true,
//     complemento: "ap 07",
//   },
// ];

const chavesDoObjeto = Object.keys(cliente); //Criando array com as chaves. Não há sempre ordenamento de suas propriedades

console.log(chavesDoObjeto);

if (!chavesDoObjeto.includes("enderecos")) {
  console.error("Erro. É necessário ter um endereço cadastrado");
}
