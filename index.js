// Importando o módulo express para criar o servidor
const express = require('express');

// Criando uma instância do express
let app = express();

// Definindo a rota para a página inicial "/"
// Quando um usuário acessar a raiz do servidor o código será executado
app.get('/', (req, res) => {
   
    res.statusCode = 200;

    // Definindo o tipo de conteúdo da resposta como HTML
    res.setHeader('Content-Type', 'text/html');

    
    res.end('<h1>Olá</h1>');  // Exibe a mensagem "Olá" em um título <h1>
});

// Definindo a rota "/users" para fornecer uma lista de usuários em formato JSON
app.get('/users', (req, res) => {

    // Definindo o código de status HTTP para '200 OK'
    res.statusCode = 200;

    // Definindo o tipo de conteúdo da resposta como JSON
    res.setHeader('Content-Type', 'application/json');

    // Enviando a resposta como um objeto JSON, com informações de usuários
    res.json({
        users:[{
            name: 'Hcode', 
            email: 'contato@hcode.com.br', 
            id: 1  
        }]
    });

});


// Quando o servidor estiver pronto, ele vai imprimir "servidor rodando!" no console
app.listen(3000, '127.0.0.1', () => {
    console.log("servidor rodando!");
});


