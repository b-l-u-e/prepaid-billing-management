import cron from 'node-cron';
import Reading from '../models/Reading';
import Meter from '../models/Meter';
import mongoose from 'mongoose';

cron.schedule('0 * * * *', async () => {
  try {
    const meters = await Meter.find();
    for (const meter of meters) {
      const readingValue = Math.floor(Math.random() * 10) + 1; 

      const newReading = new Reading({ meterId: meter._id, readingValue });
      const reading = await newReading.save();

      meter.readings.push(reading._id  as mongoose.Types.ObjectId);
      await meter.save();
    }
    console.log('Meter readings updated');
  } catch (err) {
    console.error('Error updating meter readings:', err);
  }
});
