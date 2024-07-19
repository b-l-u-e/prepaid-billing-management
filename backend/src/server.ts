import express, { Request, Response } from 'express';
import connectDB from './config/db';
import dotenv from 'dotenv';
import cors from 'cors';
import authRoutes from './routes/authRoutes';
import customerRoutes from './routes/customerRoutes';
import meterRoutes from './routes/meterRoutes';
import paymentRoutes from './routes/paymentRoutes';
import readingRoutes from './routes/readingRoutes';

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/customers', customerRoutes);
app.use('/api/v1/meters', meterRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1/readings', readingRoutes);

app.get('/', (req: Request, res: Response) => res.send('API is running...'));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
