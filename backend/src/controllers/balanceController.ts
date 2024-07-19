import { Request, Response } from 'express';
import Meter from '../models/Meter';
import cron from 'node-cron';

export const checkBalances = async () => {
  try {
    const meters = await Meter.find().populate('customerId').populate({
      path: 'readings',
      model: 'Reading'
    });
    for (const meter of meters) {
      const totalReadingValue = meter.readings.reduce((total, reading: any) => total + reading.readingValue, 0);
      meter.balance -= totalReadingValue;

      if (meter.balance < 20) { 
        // sendLowBalanceNotification(meter.customerId.phoneNumber, meter.balance);
      }

      if (meter.balance <= 0) {
        meter.status = 'inactive';
      }

      await meter.save();
    }
    console.log('Balances checked and updated');
  } catch (err) {
    console.error('Error checking balances:', err);
  }
};
cron.schedule('0 * * * *', checkBalances);
