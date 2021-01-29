const express = require('express');
const giftController = require('../controllers/gift.controller');
const userController = require('../controllers/user.controller');
const giftMiddleware = require('../middlewares/gift.middleware');

const router = express.Router();

// Login
router.post('/login', userController.login);

// Criar presente
router.post('/gifts', giftController.createGift);

// Buscar todos os presentes
router.get('/gifts', giftController.getAllGifts);

// Buscar presente por ID/ExternalCode
router.get('/gifts/:id', giftController.getGiftById);

// Buscar presente por Keyword/Palavra-chave
router.get('/gifts/?params=key', giftController.searchGiftsByParams);

// Editar presente por ID/ExternalCode
router.patch('/gifts/:id', giftController.updateGiftById);

// Deletar presente por ID/ExternalCode
router.delete('/gifts/:id', giftController.deleteGiftById);

module.exports = router;