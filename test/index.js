const express = require('express');
const app = express();

const xmlRouter = require('./xml');
const apiRouter = require('./api');

// OADR
app.use('/OpenADR2/Simple/2.0b', xmlRouter);
// API
app.use('/api', apiRouter);

app.use((rqe, res) => {
	res.send('WHAT??');
})

app.listen(3555, () => {
	console.log("Server listen Port 3000");
});
