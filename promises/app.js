// const p = new Promise((resolve, reject) => {
//     try {
//         resolve('ok');
//     } catch (e) {
//         reject(e);
//     }
// });

// p
// .then((parametros) => console.log('sucesso', parametros))
// .catch((erro) => console.log('erro'));

const fs = require('fs');

function read(file){
    return new Promise((resolve, reject) => {
        fs.readFile(file, (err, data) => {
            try{
                resolve(data.toString());
            }catch {
                reject('ERRO XPTO');
            }
        });
    });
}

read('meu_arquivo.txt').then((data) => {
    console.log(data);
}).catch((err) => console.log(err));