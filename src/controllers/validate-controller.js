'use strict';

const CnpjContract = require('../contracts/cnpj-validation-contract');
const CpfContract = require('../contracts/cpf-validation-contract');

exports.get = async (req, res, next) => {
    res.status(200).send({
        title: "API de validação de cpf e cnpj",
        version: "0.0.1",
        documentation: ""
    });
}

exports.validateCpf = async (req, res, next) => {
    try {

        let cpf = req.body.cpf;
        let contract = new CnpjContract();
        contract.isRequired(cpf, "O Algoritimo está vazio.");
        contract.isFixedLen(cpf, 11, "CPF não possui a quantidade certa de algoritimos.");
       
        if (!contract.isValid()) {
            res.status(400).send(contract.errors()).end();
            return;
        }

        let isValid = contract.algorithmIsValid(cpf);
        res.status(200).send(isValid);

    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}

exports.validateCnpj = async (req, res, next) => {
    try {
        let cnpj = req.body.cnpj;
        let contract = new CpfContract();
        contract.isRequired(cnpj, "O Algoritimo está vazio.");
        contract.isFixedLen(cnpj, 14, "CNPJ não possui a quantidade certa de algoritimos.");
       
        if (!contract.isValid()) {
            res.status(400).send(contract.errors()).end();
            return;
        }

        let isValid = contract.algorithmIsValid(cnpj);
        res.status(200).send(isValid);
    } catch (e) {
        res.status(500).send({
            message: 'Falha ao processar sua requisição'
        });
    }
}