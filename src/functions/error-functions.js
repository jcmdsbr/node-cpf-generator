exports.errorHandler = (err, req, res, next) => {
    res.status(500).send({
        message: 'Falha ao processar sua requisição'
    });
}