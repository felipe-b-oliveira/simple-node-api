const giftSchema = require('../schema/gift.schema');

const validateCreateGift = async (req, res, next) => {
  try {
    await giftSchema.createGiftSchema.validateAsync(req.body, { stripUnknown: true })
  } catch(err) {
    return res.status(400).json({ error: err.message });
  }
}

const validateUpdateGift = async (req, res, next) => {
  try {
    await giftSchema.updateGiftSchema.validateAsync(req.body, { stripUnknown: true })
  } catch(err) {
    return res.status(400).json({ error: err.message });
  }
}

exports.validateCreateGift = validateCreateGift;
exports.validateUpdateGift = validateUpdateGift;