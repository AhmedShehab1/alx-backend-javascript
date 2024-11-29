const express = require('express');
const app = express();
const PORT = 7865;

app.get('/', (req, res) => {
	res.send('Welcome to the payment system');
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
