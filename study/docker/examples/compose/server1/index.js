const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

app.get('/' ,(req, res) => {
	res.send('Hello Server1');
});

app.get('/next', async (req, res) => {
	await axios({
		method: 'get',
		url: 'http://172.23.0.2:3001'
	}).then((result) => {
		res.send(`나는 Server1<br>server2 응답내용 : ${result.data}`);
	}).catch((err) => {
		console.log(err.message);
		res.send('err....');
	});

});

app.listen(port, () => {
	console.log('Server1 start');
});