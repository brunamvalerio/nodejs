module.exports = (app) => {

    // Definindo a rota para "/users"
    app.get('/users', (req, res) => {

        res.statusCode = 200;  // Código de status 200: requisição bem-sucedida
        res.setHeader('Content-Type', 'application/json');  // Cabeçalho indicando que a resposta será no formato JSON
        res.json({
            users: [{
                name: 'Hcode',  // Nome do usuário
                email: 'contato@hcode.com.br',  // Email do usuário
                id: 1  // ID do usuário
            }]
        });

    });

    // Definindo a rota para "/users/admin"
    app.get('/users/admin', (req, res) => {

        res.statusCode = 200; 
        res.setHeader('Content-Type', 'application/json');  // indicando que a resposta será no formato JSON
        res.json({
            users: []  // Lista vazia de usuários
        });

    });

};




