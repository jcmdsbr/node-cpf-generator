const express = require('express');
const router = express.Router();
const controller = require('../controllers/generator-controller');

router.get('/', controller.get);
router.get('/cpf/:cpf', controller.getCpf);
router.get('/cnpj/:cnpj', controller.getCnpj);

module.exports = router;