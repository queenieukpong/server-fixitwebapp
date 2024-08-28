import { connect } from 'mongoose';
import { MONGO_URI } from './config.js';

const connectDB = async () => {
    try {
        await connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log('MongoDB Connected');
    } catch (err) {
        console.error('MongoDB Connection Error:', err);
        process.exit(1); // Exit process with failure
    }
};

export default connectDB;


