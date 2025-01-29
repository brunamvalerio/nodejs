
const express = require('express');
// Importando o módulo 'consign' para facilitar a organização das rotas
// O consign vai "incluir" todos os arquivos da pasta 'routes' e automaticamente adicioná-los ao app
const consign = require('consign');

// Criando uma instância do servidor express
// 'app' vai ser o servidor 
let app = express();

// Isso faz com que o servidor 'app' possa usar todas as rotas definidas na pasta 'routes'
consign().include('routes').into(app);

// Aqui estamos fazendo o servidor escutar na porta 3000 e no IP '127.0.0.1'
// Quando o servidor estiver rodando, ele vai imprimir "servidor rodando!" no console
app.listen(3000, '127.0.0.1', () => {

    console.log("servidor rodando!");

});
