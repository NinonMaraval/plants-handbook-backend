const express = require('express');
require('dotenv').config();
const cors = require('cors');
const plantRouter = require('./routes/plant');
const categoryRouter = require('./routes/category');

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: process.env.FRONTEND_URL,
  })
);

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
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
