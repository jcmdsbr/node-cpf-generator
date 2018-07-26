'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const error = require("./functions/error-functions");

// Carrega as Rotas
const generatorRouter = require('./routes/generator-router');
const validateRouter = require('./routes/validate-router');
const indexRouter = require('./routes/index-router');

// Configura json de retorno
app.use(bodyParser.json({
    limit: '5mb'
}));

app.use(bodyParser.urlencoded({
    extended: false
}));

// Habilita o CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, x-access-token');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});

// Adiciona rotas ao app
app.use('/', indexRouter);
app.use('/gerar', generatorRouter);
app.use('/validar', validateRouter);
app.use(error.errorHandler)

module.exports = app;