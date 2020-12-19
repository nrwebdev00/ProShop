import path, { dirname } from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';
import morgan from 'morgan';
import dotenv from 'dotenv';
//Config Imports
import db from './config/db.js';

//Middleware Imports
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

//Routes Imports
import productRoutes from './routes/productRoutes.js';
import usersRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

dotenv.config()

db();

const app = express();


//Logging DEV
if(process.env.NODE_ENV === "development"){
  app.use(morgan("dev"));
}

//Parser
app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: false
}))


//Mount Routes
app.use('/api/products', productRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

//Config Routes


//Static folder path
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '/frontend/build')))

  app.get('*', (req, res) =>
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'))
  )
} else {
  app.get('/', (req, res) => {
    res.send('API is running....')
  })
}
//Error Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
)
