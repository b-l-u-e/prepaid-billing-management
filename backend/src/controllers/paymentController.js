const Payment = require('../models/Payment');
const Reading = require('../models/Reading');
const Meter = require('../models/Meter');

exports.getPayments = async (req, res) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.getPaymentById = async (req, res) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ msg: 'Payment not found' });
    }
    res.json(payment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.createPayment = async (req, res) => {
  const { customerId, readingId, amount } = req.body;
  try {
    const reading = await Reading.findById(readingId);
    if (!reading) {
      return res.status(404).json({ msg: 'Reading not found' });
    }

    const meterId = reading.meterId;
    const meter = await Meter.findById(meterId);
    if (!meter) {
      return res.status(404).json({ msg: 'Meter not found' });
    }

    const newPayment = new Payment({ customerId, readingId, amount });
    const payment = await newPayment.save();

    if (amount >= reading.readingValue) {
      meter.balance -= reading.readingValue;
      const remainingAmount = amount - reading.readingValue;
      meter.balance += remainingAmount;
    } else {
      meter.balance -= amount;
    }

    if (meter.balance < 0) meter.balance = 0;
    await meter.save();

    res.json(payment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.updatePayment = async (req, res) => {
  const { paymentId, customerId, amount, timestamp } = req.body;
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ msg: 'Payment not found' });
    }
    payment.paymentId = paymentId;
    payment.customerId = customerId;
    payment.amount = amount;
    payment.timestamp = timestamp;

    await payment.save();
    res.json(payment);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

exports.deletePayment = async (req, res) => {
  try {
    const payment = await Payment.findByIdAndDelete(req.params.id);
    if (!payment) {
      return res.status(404).json({ msg: 'Payment not found' });
    }
    res.json({ msg: 'Payment removed' });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};