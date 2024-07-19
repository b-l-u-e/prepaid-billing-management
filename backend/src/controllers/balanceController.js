const Meter = require('../models/Meter');
const cron = require('node-cron');

const checkBalances = async () => {
  try {
    const meters = await Meter.find().populate('customerId').populate({
      path: 'readings',
      model: 'Reading'
    });
    for (const meter of meters) {
      const totalReadingValue = meter.readings.reduce((total, reading) => total + reading.readingValue, 0);
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