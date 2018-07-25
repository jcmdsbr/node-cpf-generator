const GeneratorFactory = require("../generators/fluent-generator")


exports.get = async (req, res, next) => {
    res.status(200).send({
        title: "API de geração de cpf e cnpj",
        version: "0.0.1",
        documentation: ""
    });
}

exports.getCpf = async (req, res, next) => {
    try {
        let factory = new GeneratorFactory();
        let cpf = factory.Cpf();
        res.status(200).send(cpf);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.getCnpj = async (req, res, next) => {
    try {
        let factory = new GeneratorFactory();
        let cnpj = factory.Cnpj();
        res.status(200).send(cnpj);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}