'use strict';

const CpfFactory = require("../factories/cpf-factory")
const CnpjFactory = require("../factories/cnpj-factory")
const error = require("../functions/error-functions");

exports.get = async (req, res, next) => {
    res.status(200).send({
        title: "API de geração de cpf e cnpj",
        version: "0.0.1",
        documentation: ""
    });
}

exports.getCpf = async (req, res, next) => {
    try {

        let factory = new CpfFactory();
        let cpf = factory.Create();

        res.status(200).send(cpf);

    } catch (e) {
        error.errorHandler(err, req, res, next);
    }
}

exports.getCnpj = async (req, res, next) => {
    try {

        let factory = new CnpjFactory();
        let cnpj = factory.Create();

        res.status(200).send(cnpj);

    } catch (e) {
        error.errorHandler(err, req, res, next);
    }
}