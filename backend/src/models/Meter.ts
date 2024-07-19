import mongoose, { Document, Schema } from 'mongoose';
import { generateRandomId } from '../utils/idGenerator';

export interface IMeter extends Document {
  meterId: string;
  customer: mongoose.Types.ObjectId; 
  location: string;
  status: string;
  readings: mongoose.Types.ObjectId[];
  balance: number;
}

const MeterSchema: Schema = new Schema({
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

export default mongoose.model<IMeter>('Meter', MeterSchema);
