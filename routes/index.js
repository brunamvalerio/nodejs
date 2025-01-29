// Este módulo agora exporta uma função que recebe o parâmetro 'app'
// Isso significa que, ao importar esse arquivo, toda vez que o arquivo passar pelo app irá passar pelas rotas

module.exports = (app) => {

    // Definindo uma rota para a URL principal ("/")
    app.get('/', (req, res) => {

      
        res.statusCode = 200;

        // Definindo o tipo de conteúdo da resposta
        // 'text/html' indica que a resposta será em formato HTML (uma página web)
        res.setHeader('Content-Type', 'text/html');
     
        res.end('<h1>Olá</h1>');

    });

};

