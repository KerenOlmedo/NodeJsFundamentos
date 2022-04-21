const http = require('http');
const fs = require('fs');
const pdf = require('html-pdf');

const server = http.createServer((req, res) => {
    var html = fs.readFileSync('./index.html');

    const options = {
        type: 'pdf',
        format: 'A4',
        orientation: 'portrait'
    }

    pdf.create(html.toString(), options). toBuffer((err, buffer) => {
        if(err) return res.status(500).json(err);
        res.end(buffer);
    });
});

server.listen('3000', () => {
    console.log('Servidor iniciado na porta 3000!')
});

