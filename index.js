
const express = require('express');
const consign = require('consign');
// Importando o módulo 'body-parser' para fazer o parsing  das requisições HTTP
// O body-parser é necessário para ler dados enviados pelo cliente (como formulários ou JSON)
const bodyParser = require('body-parser');
let app = express();

// Usando o body-parser para fazer o parse de dados enviados por formulários com a codificação 'urlencoded'
app.use(bodyParser.urlencoded({ extended: false }));

// Usando o body-parser para ler e formatar os dados no formato JSON
app.use(bodyParser.json());

// Isso faz com que o servidor 'app' possa usar todas as rotas definidas na pasta 'routes'
consign().include('routes').into(app);


app.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});

