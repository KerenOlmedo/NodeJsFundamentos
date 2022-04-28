const appendFile = require('fs/promises');

appendFile('meu_arquivo2.txt', 'TreinaWeb').then((a) => {
    console.log('Arquivo foi criado/atualizado com sucesso');
}).catch((e) => {
    console.log('Erro:  ', e);
})