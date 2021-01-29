const giftService = require('../services/gift.service');

// Criar presente
const createGift = async (req, res, next) => {
  try {
    const { title, isTaken, person } = req.body;

    const createdGift = await giftService.create(title, isTaken, person);

    return res.status(201).json(createdGift);

  } catch (err) {
    console.error('Erro na inserção do presente', err.message);
    return res.status(err.code || 500).json({ error: err.message });
  }
}

// Buscar todos os presentes
const getAllGifts = async (req, res, next) => {
  try {
    const gifts = await giftService.findAll();

    return res.status(200).json(gifts);
  } catch (err) {
    console.error('Erro ao buscar presentes:', err.message);
    return res.status(err.code || 500).json({ error: err.message });
  }
}

// Buscar presente por ID
const getGiftById = async (req, res, next) => {
  try {
    const giftId = req.params.id;
    const gift = await giftService.findById(giftId);

    if (!gift) return res.status(404).json({ error: `Presente não encontrado com o id ${giftId}`})

    return res.status(200).json(gift);
  } catch (err) {
    console.error('Erro ao buscar o presente pelo id:', err.message);
    return res.status(err.code || 500).json({ error: err.message });
  }
}

// Buscar presente por Keyword/Palavra-chave
const searchGiftsByParams = async (req, res, next) => {
  try {
    const params = req.query.params;
    const searchedGift = await giftService.findByKeyword(params);

    if (!searchedGift) return res.status(404).json({ error: `Presente não encontrado`})

    return res.status(200).json(searchedGift);
  } catch (err) {
    console.error('Erro ao buscar o presente:', err.message);
    return res.status(err.code || 500).json({ error: err.message });
  }
}

// Editar presente
const updateGiftById = async (req, res, next) => {
  try {
    const giftId = req.params.id;

    const gift = await giftService.findById(giftId);

    if(!gift) return res.status(404).json({ error: `Presente não encontrado`});

    const updatedGift = giftService.updateGift(gift, req.body);
    // const updatedGift = giftService.updateGift(gift, req.body);

    return res.status(200).json(updatedGift);
  } catch (err) {
    console.error('Erro ao atualizar presente:', err.message);
    return res.status(err.code || 500).json({ error: err.message });
  }  
}

// Deletar presente
const deleteGiftById = async (req, res, next) => {
  try {
    const giftId = req.params.id;

    await giftService.deleteGift(giftId);

    res.status(200).json()
  } catch (err) {
    console.error('Erro ao excluir presente:', err.message);
    return res.status(err.code || 500).json({ error: err.message });
  } 
}

exports.createGift = createGift;
exports.getAllGifts = getAllGifts;
exports.getGiftById = getGiftById;
exports.searchGiftsByParams = searchGiftsByParams;
exports.updateGiftById = updateGiftById;
exports.deleteGiftById = deleteGiftById;