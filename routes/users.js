module.exports = (app) => {

    // A rota irá responder com informações de um usuário no formato JSON
    app.get('/users', (req, res) => {

        res.statusCode = 200;  
        res.setHeader('Content-Type', 'application/json'); 
        res.json({  // Envia a resposta no formato JSON com os dados do usuário
            users: [{  // A chave 'users' contém um array com os dados de um usuário
                name: 'Hcode', 
                email: 'contato@hcode.com.br',  
                id: 1 
            }]
        });

    });

    // Nova rota "/users" com o método POST
    // A rota irá receber os dados do usuário
    app.post('/users', (req, res) => {

        // O 'req.body' contém esses dados (por isso é necessário usar o 'body-parser' para fazer o parsing desses dados)
        res.json(req.body);  // Retorna os dados recebidos, no formato JSON

    });

};




