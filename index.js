// Importando o módulo 'express' para criar o servidor
const express = require('express');

// Criando uma instância do express
// 'app' é o servidor 
let app = express();

// Definindo a primeira rota: quando alguém acessar a URL principal ("/")
app.get('/', (req, res) => {
 
    res.statusCode = 200;

    // 'text/html' significa que a resposta será em formato HTML
    res.setHeader('Content-Type', 'text/html');

    // Enviando a resposta para o navegador

    res.end('<h1>Olá</h1>'); 
});

// Definindo a segunda rota: quando alguém acessar a URL "/users"
// Essa rota vai responder com um JSON contendo informações de um usuário
app.get('/users', (req, res) => {

    res.statusCode = 200;

    res.setHeader('Content-Type', 'application/json');


    res.json({
        users: [{
            name: 'Hcode',  // Nome do usuário
            email: 'contato@hcode.com.br',  // Email do usuário
            id: 1  // ID do usuário
        }]
    });
});


// O servidor vai escutar na porta 3000 e no endereço IP 127.0.0.1 (localhost)
app.listen(3000, '127.0.0.1', () => {
    // Exibindo uma mensagem no console indicando que o servidor está rodando
    console.log("servidor rodando!");
});
