// var a : string = 'TreinaWeb';
// var b: number = 123;
// function exemplo(numero: number, texto: string) {
//     console.log(texto, numero);
// }
// exemplo(b, a); 
// *comando 'npx tsc app.ts' no terminal para tranpilar o código em JavaScript no arquivo 'app.js' criado automaticamente. Depois executar pelo comando 'node app.js'.*
const fs = require('fs');
var endereço = 'Av. Paulista 2000';
fs.writeFile('arquivo.txt', endereço, (err) => {
    if (err) {
        console.error(err);
    }
    console.log('Arquivo criado com sucesso!');
});
