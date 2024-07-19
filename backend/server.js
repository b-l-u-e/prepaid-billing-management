const express = require('express');
const cors = require('cors')
const connectDB = require('./src/config/db');



// Connect to Database
connectDB();

const app = express();
app.use(cors())


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));