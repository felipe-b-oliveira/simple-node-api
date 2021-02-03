const Joi = require('joi');

const createGiftSchema = Joi.object({
  title: Joi.string()
    .min(3)
    .required()
});

const updateGiftSchema = Joi.object({
  title: Joi.string().required()
});

exports.createGiftSchema = createGiftSchema;
exports.updateGiftSchema = updateGiftSchema;