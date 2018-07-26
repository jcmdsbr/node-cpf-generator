'use strict';

const express = require('express');
const router = express.Router();
const controller = require('../controllers/validate-controller');

router.get('/', controller.get);
router.post('/cpf', controller.validateCpf);
router.post('/cnpj', controller.validateCnpj);

module.exports = router;