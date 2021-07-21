const express = require('express');

const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

const PORT = process.env.PORT || 8000;

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`Express server listening on ${PORT}`);
  }
});
