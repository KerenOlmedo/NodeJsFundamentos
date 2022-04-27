const fs = require('fs');

// console.time('Assincrono');
// var counter = 0;

// for(var i = 0; i < 1000; i ++){
//     fs.readFile('meu_arquivo.txt', (err, data) => {
//         if(err){
//             return console.error(err);
//         }
//         counter++;
//         console.log('Assincrono' + data.toString());
//         if (counter === 1000) {
//             console.timeEnd('Assincrono');
//         }
//     });
// }

console.time('Sincrono');
for (let i = 0; i < 1000; i++) {
 var data = fs.readFileSync('meu_arquivo.txt');
 console.log('Síncrono' + data.toString());
}
console.timeEnd('Sincrono');