import mongoose from 'mongoose';

mongoose.connect(process.env.ATLAS_URI ?? '')
  .then(() => console.log('Successfully connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas: ', err));

export default mongoose;
