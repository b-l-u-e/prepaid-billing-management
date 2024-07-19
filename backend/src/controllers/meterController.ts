import { Request, Response } from 'express';
import Meter from '../models/Meter';
import mongoose from 'mongoose';
import Customer from '../models/Customer';

export const getMeters = async (req: Request, res: Response) => {
  try {
    const meters = await Meter.find().populate('readings');
    res.json(meters);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getMeterById = async (req: Request, res: Response) => {
  try {
    const meter = await Meter.findById(req.params.id).populate('readings');
    if (!meter) {
      return res.status(404).json({ msg: 'Meter not found' });
    }
    res.json(meter);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const createMeter = async (req: Request, res: Response) => {
  const { customerId, location, status, balance } = req.body;

  console.log('Request body:', req.body);

  // Validate customerId and convert to ObjectId
  if (!mongoose.Types.ObjectId.isValid(customerId)) {
    return res.status(400).json({ msg: 'Invalid customerId' });
  }
  const customerObjectId = new mongoose.Types.ObjectId(customerId);

  console.log('customerObjectId after conversion:', customerObjectId);

  try {
    const customer = await Customer.findById(customerObjectId);
    if (!customer) {
      return res.status(404).json({ msg: 'Customer not found' });
    }

    const newMeter = new Meter({ customer: customerObjectId, location, status, balance });
    console.log('New Meter before save:', newMeter);
    const meter = await newMeter.save();
    console.log('Meter saved successfully:', meter);
    res.json(meter);
  } catch (err:any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};
export const updateMeter = async (req: Request, res: Response) => {
  const { meterId, customerId, location, status, readings, balance } = req.body;
  try {
    const meter = await Meter.findById(req.params.id);
    if (!meter) {
      return res.status(404).json({ msg: 'Meter not found' });
    }
    meter.meterId = meterId;
    meter.customer = customerId;
    meter.location = location;
    meter.status = status;
    meter.readings = readings;
    meter.balance = balance;

    await meter.save();
    res.json(meter);
  } catch (err :any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const deleteMeter = async (req: Request, res: Response) => {
    try {
      const meter = await Meter.findByIdAndDelete(req.params.id);
      if (!meter) {
        return res.status(404).json({ msg: 'Meter not found' });
      }
      res.json({ msg: 'Meter removed' });
    } catch (err :any) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
