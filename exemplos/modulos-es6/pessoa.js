var pessoa = {
    nome: 'Bruno',
    idade: 22,
    andar(){
        console.log('Andando...');
    }
}

var a = 10
var b = 5

function soma() {
    return a + b;
}

module.exports = {pessoa, soma};