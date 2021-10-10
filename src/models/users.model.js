const mongoose = require('mongoose')

let model = mongoose.model;
let Schema = mongoose.Schema;

const UserModel = model('User', new Schema({
  _id: String,
  name: String,
  email: String,
  password: { type: String, select: false }
}), 'user')

module.exports = UserModel