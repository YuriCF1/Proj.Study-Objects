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

console.log(listaApenasApartamentos);