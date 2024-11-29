const express = require('express');
const app = express();
const PORT = 7865;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Welcome to the payment system');
});

app.get('/available_payments', (req, res) => {
  res.json({
		  payment_methods: {
			      credit_cards: true,
			      paypal: false
			    }
  });
});

app.post('/login', (req, res) => {
  const { userName } = req.body;

  if (userName) {
    res.send(`Welcome ${userName}`);
  } else {
    res.status(400).send('Missing userName');
  }
});

app.get('/cart/:id', (req, res) => {
  const { id } = req.params;
  if (!/^\d+$/.test(id)) {
    res.status(404).send('Invalid cart ID');
  } else {
    res.send(`Payment methods for cart ${id}`);
  }
});

app.listen(PORT, () => {
  console.log(`API available on localhost port ${PORT}`);
});

module.export = app;
