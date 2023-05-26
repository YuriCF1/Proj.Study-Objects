const cliente = {
  nome: "Don Pedro II",
  idade: 32,
  email: "pindorama@reino.com",
  telefone: ["114444444", "115555555"],
};

cliente.enderecos = [
  {
    rua: "R. Isabel",
    numero: 1808,
    apartamento: true,
    complemento: "ap 07",
  },
];

function ligaParaCliente(telefoneComercial, telefoneResidencial) {
  console.log(`Ligando para ${telefoneComercial}`);
  console.log(`Ligando para ${telefoneResidencial}`);
}

// ligaParaCliente(cliente.telefone[0], cliente.telefone[1])
ligaParaCliente(...cliente.telefone);

const encomenda = {
  destinatario: cliente.nome,
  //   rua: cliente.enderecos[0].rua,
  //   numero: cliente.enderecos[0].numero,
  //   endereco: cliente.enderecos[0],
  ...cliente.enderecos[0],
};

console.log(encomenda);
