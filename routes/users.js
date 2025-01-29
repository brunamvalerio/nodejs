
let NeDB = require('nedb');

// Isso faz com que o banco de dados seja carregado automaticamente ao iniciar o servidor
let db = new NeDB({
    filename: 'users.db',  // Nome do arquivo onde os dados serão salvos
    autoload: true          
});

module.exports = (app) => {

    
    
    app.get('/users', (req, res) => {

        res.statusCode = 200;  
        res.setHeader('Content-Type', 'application/json');  

        
        res.json({
            users:[{
                name: 'Hcode',  
                email: 'contato@hcode.com.br',  
                id: 1  
            }]
        });

    });

    
    
    app.post('/users', (req, res) => {

        // Inserindo os dados recebidos na requisição ('req.body') no banco de dados
        db.insert(req.body, (err, user) => {

            // Se ocorrer um erro durante a inserção dos dados, ele será mostrado no console
            if (err) {
                console.log(`erro: ${err}`);
                res.status(400).json({
                    error: err 
                });
            } else {
                
                
                res.status(200).json(user);  

            }

        });

    });

};



