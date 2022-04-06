const fs = require('../fs')
//import *  fs from 'fs';

fs.writeFile('arquivo.txt', 'TreinaWeb', (err) => {
    if (err) {
        console.error(err);
    }

console.log('Arquivo criado com sucesso!')

})