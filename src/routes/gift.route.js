const express = require('express');
const giftController = require('../controllers/gift.controller');
const giftMiddleware = require('../middlewares/gift.middleware');

const router = express.Router();

// Criar presente
router.post('/gifts', giftMiddleware.validateCreateGift, giftController.createGift);

// Buscar todos os presentes
router.get('/gifts', giftController.getAllGifts);

// Buscar presente por ID/ExternalCode
router.get('/gifts/:id', giftController.getGiftById);

// Buscar presente por Keyword/Palavra-chave
router.get('/gifts/?search=key', giftController.searchGiftsByKeyword);

// Editar presente por ID/ExternalCode
router.patch('/gifts/:id', giftMiddleware.validateUpdateGift, giftController.updateGiftById);

// Deletar presente por ID/ExternalCode
router.delete('/gifts/:id', giftController.deleteGiftById);

module.exports = router;