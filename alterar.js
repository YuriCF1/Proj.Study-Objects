const pessoa = {
  nome: "Luna",
  profissao: "Engenheira",
};

console.log(pessoa.nome);
console.log(pessoa.telefone);

pessoa.telefone = "11 12333";
console.log(pessoa.telefone);

pessoa.nome = "Luna silva";

console.log(pessoa);

const novaPessoa = {
  nome: "Pedro",
};

//A const não permite reatribuir o valor inteiro, apenas as chaves dos objetos
// pessoa = novaPessoa;

// ______________________________________________CONTEÚDO BONUST: DELETAR. EXEMPLO______________________________________________
const objPersonagem = {
  nome: "Gandalf",
  classe: "mago",
  nivel: "20",
  aliado: {
    nome: "Saruman",
    classe: "mago",
  },
  status: "desaparecido",
  livro: "LOTR"
};

delete objPersonagem.aliado;
delete objPersonagem["status"];

console.log(objPersonagem.aliado); //undefined
console.log(objPersonagem.status); //undefined

const delProp = delete objPersonagem.aliado;
const delPropInexistente = delete objPersonagem["endereco"];

console.log(delProp); //true
console.log(delPropInexistente); //true

/*
O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada operação. 
Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma propriedade que não existe no objeto:
*/
const delProp2 = delete objPersonagem.livro
const delPropInexistente2 = delete objPersonagem["endereco"]

console.log(delProp) //true
console.log(delPropInexistente) //true

console.log(objPersonagem); //{ nome: 'Gandalf', classe: 'mago', nivel: '20' }

