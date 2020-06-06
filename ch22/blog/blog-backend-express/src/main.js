require('dotenv').config();

import express from 'express';
import mongoose from 'mongoose';

import api from './api';
import createDummyData from './createDummyData';

const { PORT, MONGO_URI } = process.env;

mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log('Connected to MongoDB');
    // createDummyData();
  })
  .catch((e) => {
    console.error(e);
  });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api', api);

const port = PORT || 4000;
app.listen(port, () => {
  console.log(`Listening to port ${port}`);
});
