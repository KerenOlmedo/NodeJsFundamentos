import * as fs from 'fs';

fs.watchFile('arquivot.txt', 'treinaWeb', (err) => {
    if (err) {
        console.error(err);
    }
    
    console.log('Arquivo criado com sucesso!')
})