let NeDB = require('nedb');

// Criação da instância do banco de dados NeDB
let db = new NeDB({
    filename: 'users.db',  
    autoload: true          
});

module.exports = (app) => {

    // Definição da rota '/users'
    let route = app.route('/users');

    // Definição do método GET para a rota '/users' 
    route.get((req, res) => {

        // Busca todos os usuários no banco e os ordena por nome em ordem crescente
        db.find({}).sort({ name: 1 }).exec((err, users) => {

            // Se ocorrer um erro ao consultar o banco de dados, chama a função de erro
            if (err) {
                app.utils.error.send(err, req, res);  // Utiliza o utilitário de erro para enviar a resposta de erro
            } else {
                // Se a consulta for bem-sucedida, envia a lista de usuários como resposta
                res.statusCode = 200;  
                res.setHeader('Content-Type', 'application/json');  
                res.json({
                    users  // Envia a lista de usuários no corpo da resposta
                });
            }

        });

    });

    // Definição do método POST para a rota '/users' para criar um novo usuário
    route.post((req, res) => {

        // Insere os dados do novo usuário no banco de dados
        db.insert(req.body, (err, user) => {

            // Se ocorrer um erro durante a inserção, chama a função de erro
            if (err) {
                app.utils.error.send(err, req, res);  // Utiliza o utilitário de erro para enviar a resposta de erro
            } else {
                // Se a inserção for bem-sucedida, envia o novo usuário como resposta
                res.status(200).json(user);  
            }

        });

    });

};
