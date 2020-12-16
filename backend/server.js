import express from 'express'
import Keys from '../Keys.js';
import colors from 'colors';
import morgan from 'morgan';
import db from './config/db.js';
import productRoutes from './routes/productRoutes.js';
import { notFound, errorHandler } from './middleware/errorMiddleware.js';


db();

const app = express()
app.use(express.json())

app.get('/', (req, res) => {
  res.send('API is running....')
})


//Mount Routes
app.use('/api/products', productRoutes);

//Error Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = Keys.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running on port${PORT} in ${Keys.NODE_ENV} mode.`.brightYellow.underline.bold)
)
