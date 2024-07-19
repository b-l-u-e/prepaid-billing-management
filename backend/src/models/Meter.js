const mongoose = require('mongoose');
const generateRandomId = require('../utils/idGenerator');

const Schema = mongoose.Schema;

const MeterSchema = new Schema({
  meterId: { type: String, unique: true },
  customer: { type: mongoose.Schema.Types.ObjectId, ref: 'Customer', required: true },
  location: { type: String, required: true },
  status: { type: String, required: true },
  readings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Reading' }],
  balance: { type: Number, required: true },
}, {
  timestamps: true
});

MeterSchema.pre('save', async function(next) {
  if (this.isNew) {
    this.meterId = await generateRandomId('M', mongoose.model('Meter'));
  }
  next();
});

module.exports = mongoose.model('Meter', MeterSchema);