const mongoose = require('mongoose');
const { generateRandomId } = require('../utils/idGenerator');

const PaymentSchema = new mongoose.Schema({
  paymentId: { type: String, unique: true },
  customerId: { type: String, required: true },
  readingId: { type: mongoose.Schema.Types.ObjectId, ref: 'Reading', required: true },
  amount: { type: Number, required: true },
  timestamp: { type: Date, required: true, default: Date.now },
}, {
  timestamps: true
});

PaymentSchema.pre('save', async function(next) {
  if (this.isNew) {
    this.paymentId = await generateRandomId('P', mongoose.model('Payment'));
  }
  next();
});

module.exports = mongoose.model('Payment', PaymentSchema);