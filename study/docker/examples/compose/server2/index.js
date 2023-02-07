const express = require('express');
const axios = require('axios');

const app = express();
const port = 3001;

app.get('/' ,(req, res) => {
	res.send('Hello Server2');
});

app.get('/next', (req, res) => {
	axios({
		method: 'get',
		url: 'http://172.23.0.3:3000'
	}).then((result) => {
		console.log(result.data);
		res.send(`나는 Server2<br>server1 응답내용 : ${result.data}`);
	}).catch((err) => {
		console.log(err.message);
		res.send('err....');
	});

});

app.listen(port, () => {
	console.log('Server2 start');
});