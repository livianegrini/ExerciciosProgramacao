const express = require('express');
const router = express.Router();
const produtoController = require('../controllers/produtoController');

router.get('/', produtoController.index);
router.get('/novo', produtoController.formNovo);
router.post('/criar', produtoController.criar);
router.get('/editar/:id', produtoController.formEditar);
router.post('/atualizar/:id', produtoController.atualizar);
router.post('/deletar/:id', produtoController.deletar);

module.exports = router;