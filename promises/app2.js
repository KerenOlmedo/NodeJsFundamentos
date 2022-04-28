<<<<<<< HEAD
const { appendFile } = require('fs/promises');
=======
const {appendFile} = require('fs/promises');
>>>>>>> 32ebc18af2c4dfb2198525ba4fc0b8d4ec445818

appendFile('meu_arquivo2.txt', 'TreinaWeb').then((a) => {
    console.log('Arquivo foi criado/atualizado com sucesso');
}).catch((e) => {
    console.log('Erro:  ', e);
})