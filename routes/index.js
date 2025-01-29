
let express = require('express');


let routes = express.Router();

// Definindo a rota para a URL principal ("/")
routes.get('/', (req, res) => {


    res.statusCode = 200;

    // Definindo o tipo de conteúdo da resposta
    res.setHeader('Content-Type', 'text/html');


    res.end('<h1>Olá</h1>'); 

});

// Exportando o roteador
module.exports = routes;
