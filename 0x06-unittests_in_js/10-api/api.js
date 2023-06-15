const express = require('express');

const app = express();
const port = 7865

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res) => {
  res.send(`Payment methods for cart :${id}`);
});

app.get('/available_payments', (req, res) => {
  res.send({
    payment_methods: {
      credit_cards: true,
      paypal: false
    }
  });
});

app.get('/login', (req, res) => {
  let username = req.body.userName;
  res.send(`Welcome ${:username}`);
});

app.listen(port, () => {
  console.log(`API available on localhost port ${port}`);
});
