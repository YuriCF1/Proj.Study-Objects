const cliente = {
  nome: "Don Pedro II",
  idade: 32,
  email: "pindorama@reino.com",
  telefone: ["114444444", "115555555"],
};

cliente.enderecos = [
  {
    rua: "R. Isabel",
    numer: 1808,
    apartamento: true,
    complemento: "ap 07",
  },
];

cliente.enderecos.push({
  rua: "R. Marechal",
  numero: 1500,
  apartamento: false,
});

// console.log(cliente.enderecos);

const listaApenasApartamentos = cliente.enderecos.filter(
  (endereco) => endereco.apartamento === true
);

//   console.log(listaApenasApartamentos);

for (let chave in cliente) {
  let tipo = typeof cliente[chave];
  // console.log(tipo);

  if (tipo !== "object" && tipo !== "function") {
    // console.log(`O valor da chave ${chave} é: ${cliente[chave]}`);
  }
}

// ___________________________________________________EXEMPLO DE COMO FILTRAR COM O FOR_______________________________________________________
// const paciente = {
//   nome: "James T.",
//   idade: 30,
//   email: "jt@email.com",
//   identicacao: "Alpha01259859",
//   funcao: "comandante",
//   peso: 80.1,
//   altura: 1.8,
//   calcularIMC: function () {
//     return this.peso / Math.pow(this.altura, 2);
//   },
//   nomeCompleto: function () {
//     console.log(this.nome);
//   },
// };

// let dados = "";
// for (let info in paciente) {
//   if (
//     typeof paciente[info] === "object" ||
//     typeof paciente[info] === "function"
//   ) {
//     continue;
//   } else {
//     dados += `${info} ==> ${paciente[info]}
//   `;
//   console.log(dados);
//   }
// }
