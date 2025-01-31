let NeDB = require('nedb');
let db = new NeDB({
    filename: 'users.db',
    autoload: true
});

module.exports = (app) => {

    // Definição da rota '/users'
    let route = app.route('/users');

    // Método GET para a rota '/users' - Listar todos os usuários
    route.get((req, res) => {

        db.find({}).sort({ name: 1 }).exec((err, users) => {

            // Se ocorrer um erro ao consultar o banco de dados, chama a função de erro
            if (err) {
                app.utils.error.send(err, req, res);  // Utiliza o utilitário de erro para enviar a resposta de erro
            } else {
                // Se a consulta for bem-sucedida, envia a lista de usuários como resposta
                res.statusCode = 200; 
                res.setHeader('Content-Type', 'application/json'); 
                res.json({
                    users 
                });
            }

        });

    });

    // Método POST para a rota '/users' - Criar um novo usuário
    route.post((req, res) => {

        // Insere os dados do novo usuário no banco de dados
        db.insert(req.body, (err, user) => {

            // Se ocorrer um erro durante a inserção, chama a função de erro
            if (err) {
                app.utils.error.send(err, req, res);  // Utiliza o utilitário de erro para enviar a resposta de erro
            } else {
                
                res.status(200).json(user); // Retorna o usuário criado com status 200
            }

        });

    });

    // Definição da rota '/users/:id' para ações de um usuário específico, usando o ID na URL
    let routeId = app.route('/users/:id');

    // Método GET para a rota '/users/:id' - Buscar um usuário específico
    routeId.get((req, res) => {

        // Busca um usuário específico no banco de dados usando o ID da requisição
        db.findOne({ _id: req.params.id }).exec((err, user) => {

            // Se ocorrer um erro ao consultar o banco de dados, chama a função de erro
            if (err) {
                app.utils.error.send(err, req, res);  // Utiliza o utilitário de erro para enviar a resposta de erro
            } else {
                // Se a consulta for bem-sucedida, envia o usuário encontrado como resposta
                res.status(200).json(user);  
            }

        });

    });

    // Método PUT para a rota '/users/:id' - Atualizar um usuário específico
    routeId.put((req, res) => {

        // Exibe o corpo da requisição para depuração
        console.log(req.body);  // Essa linha foi adicionada para depuração. Mostra o corpo da requisição

        // Atualiza o usuário no banco de dados, usando o ID da URL e os novos dados do corpo da requisição
        db.update({ _id: req.params.id }, req.body, err => {

            // Se ocorrer um erro durante a atualização, chama a função de erro
            if (err) {
                app.utils.error.send(err, req, res);  // Utiliza o utilitário de erro para enviar a resposta de erro
            } else {
                // Se a atualização for bem-sucedida, retorna os dados atualizados
                // Utiliza `Object.assign` para combinar o ID do usuário com os novos dados
                res.status(200).json(Object.assign(req.params, req.body));  
            }

        });

    });

    // Método DELETE para a rota '/users/:id' - Remover um usuário específico
    routeId.delete((req, res) => {

        // Remove um usuário do banco de dados usando o ID da URL
        db.remove({ _id: req.params.id }, {}, err => {

            // Se ocorrer um erro ao remover o usuário, chama a função de erro
            if (err) {
                app.utils.error.send(err, req, res);  // Utiliza o utilitário de erro para enviar a resposta de erro
            } else {
                // Se a remoção for bem-sucedida, retorna o ID do usuário removido
                res.status(200).json(req.params);  // Retorna o ID do usuário removido como resposta
            }

        });

    });

};
