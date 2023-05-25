const cliente1 = {
  nome: "Don Pedro II",
  idade: 32,
  email: "pindorama@reino.com",
  telefone: ["114444444", "115555555"],
  saldo: 2000,
  efetuaPagamento: function (valor) {
    if (valor > this.saldo) {
      console.log("Saldo insuficiente");
    } else {
      this.saldo -= valor;
      console.log(`Pagamento realizado. Saldo atualizado: ${this.saldo}`);
    }
  },
};

// cliente.efetuaPagamento(20005);

const cliente2 = {
  nome: "Jose",
  idade: 33,
  email: "jose@email.com",
  telefones: ["+550033338888", "+550033334444"],
};
cliente2.animalEstimacao = [
  {
    nome: "Kripto",
    raca: "Cão",
    vacinado: true,
  },
];
cliente2.animalEstimacao.push({
  nome: "Lex",
  raca: "Gato",
  vacinado: false,
});

const animalEstimacao = cliente2.animalEstimacao.filter(
  (animalEstimacao) => animalEstimacao.raca === "Cão"
);
console.log(animalEstimacao);
