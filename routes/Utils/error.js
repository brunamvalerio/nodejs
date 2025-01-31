module.exports = {
    // Função 'send' para enviar os erros 
    send: (err, req, res, code = 400) => {

        // o console exibe o erro no monitoramento
        console.log(`error: ${err}`);

        // Envia a resposta HTTP com o status e o erro em formato JSON
        res.status(code).json({
            error: err  // O erro é enviado como parte da resposta
        });

    }
};