import mongoose, { Document, Schema } from 'mongoose';
import { generateRandomId } from '../utils/idGenerator';

export interface IReading extends Document {
  readingId: string;
  meterId: mongoose.Types.ObjectId;
  timestamp: Date;
  readingValue: number;
}

const ReadingSchema: Schema = new Schema({
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

export default mongoose.model<IReading>('Reading', ReadingSchema);
