'use strict';

const CnpjContract = require('../contracts/cnpj-validation-contract');
const CpfContract = require('../contracts/cpf-validation-contract');
const error = require("../functions/error-functions");

exports.get = async (req, res, next) => {
    res.status(200).send({
        title: "API de validação de cpf e cnpj",
        version: "0.0.1",
        documentation: ""
    });
}

exports.validateCpf = async (req, res, next) => {
    try {

        console.log(req.body);

        let contract = new CpfContract();
        let cpf = req.body.cpf.toString();

        cpf = cpf.replace(/[^\d]+/g, '');

        contract.isRequired(cpf, "O Algoritimo está vazio.");
        contract.isFixedLen(cpf, 11, "CPF não possui a quantidade certa de algoritimos.");

        if (!contract.isValid()) {
            res.status(400).send(contract.errors()).end();
            return;
        }

        let isValid = contract.algorithmIsValid(cpf);
        res.status(200).send({});

    } catch (err) {
        error.errorHandler(err, req, res, next);
    }
}

exports.validateCnpj = async (req, res, next) => {
    try {
        let contract = new CnpjContract();
        let cnpj = req.body.cnpj.toString();

        cnpj = cnpj.replace(/[^\d]+/g, '');

        contract.isRequired(cnpj, "O Algoritimo está vazio.");
        contract.isFixedLen(cnpj, 14, "CNPJ não possui a quantidade certa de algoritimos.");

        if (!contract.isValid()) {
            res.status(400).send(contract.errors()).end();
            return;
        }

        let isValid = contract.algorithmIsValid(cnpj);
        res.status(200).send(isValid);
    } catch (e) {
        error.errorHandler(err, req, res, next);
    }
}