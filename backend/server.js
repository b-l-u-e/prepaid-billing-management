const express = require('express');
const cors = require('cors')
const connectDB = require('./src/config/db');

const authRoutes = require('./src/routes/authRoutes');
const customerRoutes = require('./src/routes/customerRoutes');
const meterRoutes = require('./src/routes/meterRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');
const readingRoutes = require('./src/routes/readingRoutes');



const app = express();

connectDB();

app.use(cors())
app.use(express.json());

app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/customers', customerRoutes);
app.use('/api/v1/meters', meterRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1/readings', readingRoutes);

app.get('/', (req, res) => {
  res.send('API is running....');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));