/* eslint-disable consistent-return */
const express = require('express');
require('dotenv').config();
const cors = require('cors');
const plantRouter = require('./routes/plant');
const categoryRouter = require('./routes/category');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8000;

app.use(cors());

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested, Content-Type, Accept Authorization'
  );
  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'POST, PUT, GET, DELETE');
    return res.status(200).json({});
  }
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.use('/plant', plantRouter);
app.use('/category', categoryRouter);

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${PORT}`);
  }
});
