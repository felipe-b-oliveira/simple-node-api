const { v4: uuidv4 } = require('uuid');

const DUMMY_GIFTS = require('../models/gift.model');

const create = async (title, isTaken, person) => {
  const createdGift = {
    id: uuidv4(),
    title,
    isTaken,
    person
  }

  return DUMMY_GIFTS.push(createdGift);
}

const findAll = async () => {
  const gifts = DUMMY_GIFTS.filter(gs => {
    return gs.title !== null;
  });

  return gifts;
}

const findById = async (giftId) => {
  const gift = DUMMY_GIFTS.find(g => {
    return g.id === giftId;
  });

  return gift;
}

const findByKeyword = async (params) => {  
  const caseInsensitiveKeywordRegex  = new RegExp(params, i); // Case insensitive Regex

  const searchedGifts = DUMMY_GIFTS.find({title: caseInsensitiveKeywordRegex});

  return searchedGifts;
}

const updateGift = async (oldGift, gift) => {
  const { title, isTaken } = gift;

  const updatedGift = { ...DUMMY_GIFTS.find(g => g.id === giftId) };
  const giftIndex = DUMMY_GIFTS.findIndex(g => g.id === giftId);
  updatedGift.title = title;
  updatedGift.isTaken = isTaken;

  DUMMY_GIFTS[giftIndex] = updatedGift;
}

const deleteGift = async (deletedGiftId) => {
  DUMMY_GIFTS = DUMMY_GIFTS.filter(g => g.id !== deletedGiftId);
}

exports.create = create;
exports.findAll = findAll;
exports.findById = findById;
exports.findByKeyword = findByKeyword;
exports.updateGift = updateGift;
exports.deleteGift = deleteGift;