const { pessoa, soma } = require('./pessoa')

const somaI = soma;

console.log(pessoa.nome);
pessoa.andar();

console.log(somaI());