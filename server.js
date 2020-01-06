const express = require('express');

const app = express();

app.get('/', (_req, res) => {
  res.send('<p>boi</p>');
});

app.listen(
  1234,
  (err) => err
    ? console.error(err)
    : console.log('node is running')
);