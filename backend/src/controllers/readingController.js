const Reading = require('../models/Reading');
const Meter = require('../models/Meter');
const mongoose = require('mongoose');

exports.getReadings = async (req, res) => {
  try {
    const readings = await Reading.find();
    res.json(readings);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getReadingById = async (req, res) => {
  try {
    const reading = await Reading.findById(req.params.id);
    if (!reading) {
      return res.status(404).json({ msg: 'Reading not found' });
    }
    res.json(reading);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createReading = async (req, res) => {
  const { meterId, readingValue } = req.body;
  try {
    const meter = await Meter.findById(meterId);
    if (!meter) {
      return res.status(404).json({ msg: 'Meter not found' });
    }

    const newReading = new Reading({ meterId, readingValue });
    const reading = await newReading.save();

    meter.readings.push(mongoose.Types.ObjectId(reading._id));
    await meter.save();

    res.json(reading);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateReading = async (req, res) => {
  const { readingId, meterId, timestamp, readingValue } = req.body;
  try {
    const reading = await Reading.findById(req.params.id);
    if (!reading) {
      return res.status(404).json({ msg: 'Reading not found' });
    }
    reading.readingId = readingId;
    reading.meterId = meterId;
    reading.timestamp = timestamp;
    reading.readingValue = readingValue;

    await reading.save();
    res.json(reading);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteReading = async (req, res) => {
  try {
    const reading = await Reading.findByIdAndDelete(req.params.id);
    if (!reading) {
      return res.status(404).json({ msg: 'Reading not found' });
    }
    res.json({ msg: 'Reading removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};