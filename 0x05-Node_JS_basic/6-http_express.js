const express = require('express');

const app = express();
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello World!');
});
module.exports = app;
app.listen(port, () => {
  console.log('Hello Holberton School!');
});
