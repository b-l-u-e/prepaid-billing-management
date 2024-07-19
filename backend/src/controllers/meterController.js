const Meter = require('../models/Meter');
const mongoose = require('mongoose');
const Customer = require('../models/Customer');

exports.getMeters = async (req, res) => {
  try {
    const meters = await Meter.find().populate('readings customer');
    res.json(meters);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getMeterById = async (req, res) => {
  try {
    const meter = await Meter.findById(req.params.id).populate('readings customer');
    if (!meter) {
      return res.status(404).json({ msg: 'Meter not found' });
    }
    res.json(meter);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createMeter = async (req, res) => {
  const { customerId, location, status, balance } = req.body;

  if (!mongoose.Types.ObjectId.isValid(customerId)) {
    return res.status(400).json({ msg: 'Invalid customerId' });
  }

  try {
    const customer = await Customer.findById(customerId);
    if (!customer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }

    const newMeter = new Meter({
      customer: customerId,
      location,
      status,
      balance
    });

    const meter = await newMeter.save();
    res.json(meter);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updateMeter = async (req, res) => {
  const { customerId, location, status, readings, balance } = req.body;

  if (customerId && !mongoose.Types.ObjectId.isValid(customerId)) {
    return res.status(400).json({ msg: 'Invalid customerId' });
  }

  try {
    const meter = await Meter.findById(req.params.id);
    if (!meter) {
      return res.status(404).json({ msg: 'Meter not found' });
    }

    if (customerId) {
      const customer = await Customer.findById(customerId);
      if (!customer) {
        return res.status(404).json({ msg: 'Customer not found' });
      }
      meter.customer = customerId;
    }

    meter.location = location || meter.location;
    meter.status = status || meter.status;
    meter.readings = readings || meter.readings;
    meter.balance = balance || meter.balance;

    await meter.save();
    res.json(meter);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deleteMeter = async (req, res) => {
  try {
    const meter = await Meter.findByIdAndDelete(req.params.id);
    if (!meter) {
      return res.status(404).json({ msg: 'Meter not found' });
    }
    res.json({ msg: 'Meter removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
