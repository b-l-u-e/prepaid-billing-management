import mongoose, { Document, Schema } from 'mongoose';
import { generateRandomId } from '../utils/idGenerator';

export interface ICustomer extends Document {
  customerId: string;
  name: string;
  address: string;
  email: string;
  phoneNumber: string;
}

const CustomerSchema: Schema = new Schema({
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

export default mongoose.model<ICustomer>('Customer', CustomerSchema);
