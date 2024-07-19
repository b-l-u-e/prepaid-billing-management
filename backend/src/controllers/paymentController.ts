import { Request, Response } from 'express';
import Payment from '../models/Payment';
import Reading from '../models/Reading';
import Meter from '../models/Meter';

export const getPayments = async (req: Request, res: Response) => {
  try {
    const payments = await Payment.find();
    res.json(payments);
  } catch (err:any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getPaymentById = async (req: Request, res: Response) => {
  try {
    const payment = await Payment.findById(req.params.id);
    if (!payment) {
      return res.status(404).json({ msg: 'Payment not found' });
    }
    res.json(payment);
  } catch (err :any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};


export const createPayment = async (req: Request, res: Response) => {
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
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const updatePayment = async (req: Request, res: Response) => {
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
  } catch (err:any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const deletePayment = async (req: Request, res: Response) => {
    try {
      const payment = await Payment.findByIdAndDelete(req.params.id);
      if (!payment) {
        return res.status(404).json({ msg: 'Payment not found' });
      }
      res.json({ msg: 'Payment removed' });
    } catch (err :any) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
