const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html');

    let caminho = './views/';

    switch (req.url) {
        case '/':
            caminho += 'index.html';
            res.statusCode = 200;
            break;
        case '/blog':
            caminho += 'blog.html';
            res.statusCode = 200;
            break;
        case '/cadastro':
            caminho += 'cadastro.html';
            res.statusCode = 200;
            break;
        case '/catalogo':
            caminho += 'catalogo.html';
            res.statusCode = 200;
            break;
        case '/login':
            caminho += 'login.html';
            res.statusCode = 200;
            break;
        case '/orcamento':
            caminho += 'orcamento.html';
            res.statusCode = 200;
            break;
        case '/portfolio':
            caminho += 'portfolio.html';
            res.statusCode = 200;
            break;
        case '/produto':
            caminho += 'produto.html';
            res.statusCode = 200;
            break;
        case '/quemsomos':
            caminho += 'quemsomos.html';
            res.statusCode = 200;
            break;
        
        default:
            caminho += 'erro.html'; 
            res.statusCode = 404; 
            break;
     }

     fs.readFile(caminho, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data); 
        }
    });
});


server.listen(3000, 'localhost', () => {
    console.log('Servidor ouvindo na porta 3000');
});