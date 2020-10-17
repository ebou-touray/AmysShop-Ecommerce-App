import express from 'express'; // ES modules in Node.js by using import not require
import dotenv from 'dotenv';
import colors from 'colors'; // Colorised our console messages
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js';

import productRoutes from './routes/productRoutes.js';

dotenv.config();

connectDB();

const app = express();

app.get('/', (req, res) => {
  res.send('API is running...');
});

app.use('/api/products', productRoutes);

app.use(notFound)

app.use(errorHandler)

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);
