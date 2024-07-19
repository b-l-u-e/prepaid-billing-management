import { Request, Response } from 'express';
import Reading from '../models/Reading';
import Meter from '../models/Meter';
import mongoose from 'mongoose';

export const getReadings = async (req: Request, res: Response) => {
  try {
    const readings = await Reading.find();
    res.json(readings);
  } catch (err :any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const getReadingById = async (req: Request, res: Response) => {
  try {
    const reading = await Reading.findById(req.params.id);
    if (!reading) {
      return res.status(404).json({ msg: 'Reading not found' });
    }
    res.json(reading);
  } catch (err :any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const createReading = async (req: Request, res: Response) => {
  const { meterId, readingValue } = req.body;
  try {
    const meter = await Meter.findById(meterId);
    if (!meter) {
      return res.status(404).json({ msg: 'Meter not found' });
    }

    const newReading = new Reading({ meterId, readingValue });
    const reading = await newReading.save();

    meter.readings.push(reading._id as mongoose.Types.ObjectId);
    await meter.save();

    res.json(reading);
  } catch (err: any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const updateReading = async (req: Request, res: Response) => {
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
  } catch (err :any) {
    console.error(err.message);
    res.status(500).send('Server error');
  }
};

export const deleteReading = async (req: Request, res: Response) => {
    try {
      const reading = await Reading.findByIdAndDelete(req.params.id);
      if (!reading) {
        return res.status(404).json({ msg: 'Reading not found' });
      }
      res.json({ msg: 'Reading removed' });
    } catch (err :any) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  };
  
