import path from 'path';
import express from 'express';
import bodyParser from 'body-parser';
import colors from 'colors';
import morgan from 'morgan';

//Config Imports
import Keys from '../Keys.js';
import db from './config/db.js';

//Middleware Imports
import { notFound, errorHandler } from './middleware/errorMiddleware.js';

//Routes Imports
import productRoutes from './routes/productRoutes.js';
import usersRoutes from './routes/userRoutes.js';
import orderRoutes from './routes/orderRoutes.js';
import uploadRoutes from './routes/uploadRoutes.js';

db();
const app = express();


//Logging DEV
if(Keys.NODE_ENV === "development"){
  app.use(morgan("dev"));
}

//Parser
app.use(express.json())
app.use(bodyParser.urlencoded({
  extended: false
}))


//Mount Routes
app.get('/', (req, res) => { res.send('API is running....')}) //Test Route to ensure server is running
app.use('/api/products', productRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/upload', uploadRoutes);

//Config Routes
app.get('/api/config/paypal', (req, res) => 
  res.send(Keys.PAYPAL_CLIENT_ID)
)

//Static folder path
const __dirname = path.resolve()
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

//Error Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = Keys.PORT || 5000

app.listen(
  PORT,
  console.log(`Server running on port${PORT} in ${Keys.NODE_ENV} mode.`.brightYellow.underline.bold)
)
