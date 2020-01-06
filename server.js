const express = require('express');
const path = require('path');

const app = express();

app.get('/', (_req, res) => {
  res.sendFile(
    path.join(__dirname, 'index.html')
  );
});

app.listen(
  1234,
  (err) => err
    ? console.error(err)
    : console.log('node is running')
);