const cron = require('node-cron');
const Reading = require('../models/Reading');
const Meter = require('../models/Meter');
const mongoose = require('mongoose');

cron.schedule('0 * * * *', async () => {
  try {
    const meters = await Meter.find();
    for (const meter of meters) {
      const readingValue = Math.floor(Math.random() * 10) + 1;

      const newReading = new Reading({ meterId: meter._id, readingValue });
      const reading = await newReading.save();

      meter.readings.push(reading._id);
      await meter.save();
    }
    console.log('Meter readings updated');
  } catch (err) {
    console.error('Error updating meter readings:', err);
  }
});