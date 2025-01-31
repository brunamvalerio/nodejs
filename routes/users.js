let NeDB = require('nedb');


let db = new NeDB({
    filename: 'users.db',
    autoload: true  // Autoload garante que o banco de dados seja carregado ao inicializar o servidor
});

module.exports = (app) => {

    // Rota GET para listar todos os usuários
    app.get('/users', (req, res) => {

        // Realiza a consulta no banco de dados através do nome name 
        db.find({}).sort({ name: 1 }).exec((err, users) => {

            // Se houver erro na consulta
            if (err) {
                console.log(`error: ${err}`);
                res.status(400).json({
                    error: err 
                });
            } else {
                // Se não houver erro, retorna a lista de usuários encontrados
                res.statusCode = 200;  // Código de sucesso HTTP
                res.setHeader('Content-Type', 'application/json');  // Define o tipo de resposta como JSON
                res.json({
                    users  // Resposta com a lista de usuários no formato JSON
                });
            }

        });

    });

    // Rota POST para criar um novo usuário
    app.post('/users', (req, res) => {

        // Inserção dos dados recebidos na requisição ('req.body') no banco de dados
        db.insert(req.body, (err, user) => {

            // Se ocorrer um erro durante a inserção
            if (err) {
                console.log(`erro: ${err}`);
                res.status(400).json({
                    error: err  // Retorna o erro para o cliente
                });
            } else {
                // Se a inserção for bem-sucedida, retorna o usuário inserido
                res.status(200).json(user);  // Retorna os dados do usuário criado como resposta
            }

        });

    });

};

