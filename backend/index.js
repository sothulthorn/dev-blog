import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URI).then(() => {
  console.log('Mongodb is connected');
});

const app = express();

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
