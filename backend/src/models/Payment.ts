import mongoose, { Document, Schema } from 'mongoose';
import { generateRandomId } from '../utils/idGenerator';

export interface IPayment extends Document {
  paymentId: string;
  customerId: string;
  readingId: string; 
  amount: number;
  timestamp: Date;
}

const PaymentSchema: Schema = new Schema({
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

export default mongoose.model<IPayment>('Payment', PaymentSchema);
