const express = require('express');
require('dotenv').config();
const cors = require('cors');

const app = express();
app.use(express.json());

app.use(cors());

const PORT = process.env.PORT || 8000;

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${PORT}`);
  }
});
