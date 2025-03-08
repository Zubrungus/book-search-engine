import mongoose from 'mongoose';

//connect to googlebooks database
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/googlebooks');

export default mongoose.connection;
