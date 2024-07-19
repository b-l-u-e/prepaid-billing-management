const mongoose = require('mongoose');
const { generateRandomId } = require('../utils/idGenerator');

const ReadingSchema = new mongoose.Schema({
  readingId: { type: String, unique: true },
  meterId: { type: mongoose.Schema.Types.ObjectId, ref: 'Meter', required: true },
  timestamp: { type: Date, required: true, default: Date.now },
  readingValue: { type: Number, required: true },
}, {
  timestamps: true
});

ReadingSchema.pre('save', async function(next) {
  if (this.isNew) {
    this.readingId = await generateRandomId('R', mongoose.model('Reading'));
  }
  next();
});

module.exports = mongoose.model('Reading', ReadingSchema);