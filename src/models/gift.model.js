const mongoose = require('mongoose')

let model = mongoose.model;
let Schema = mongoose.Schema;

const GiftModel = model('Gift', new Schema({
  _id: String,
  title: String,
  isTaken: Boolean,
  person: String
}), 'gift')

module.exports = GiftModel