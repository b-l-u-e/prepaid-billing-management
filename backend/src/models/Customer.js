const mongoose = require('mongoose');
const generateRandomId = require('../utils/idGenerator');

const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  customerId: { type: String, unique: true },
  name: { type: String, required: true },
  address: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
}, {
  timestamps: true
});

CustomerSchema.pre('save', async function(next) {
  if (this.isNew) {
    this.customerId = await generateRandomId('C', mongoose.model('Customer'));
  }
  next();
});

module.exports = mongoose.model('Customer', CustomerSchema);