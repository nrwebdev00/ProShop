import mongoose from 'mongoose';
import Keys from '../../Keys.js';

const db = async () => {
    try{
        const conn = await mongoose.connect(Keys.MONGO_URI, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true,
        });
            console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold)
        } catch (error){
            console.error(`Error: ${error.message}`.brightRed.underline.bold)
        }
    }

export default db;