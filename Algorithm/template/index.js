/**
 * @link
 * @description
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(Number(line));
	input.push(line);
	input.push(JSON.parse(line));
}).on('close', () => {
	const [] = input;
	const result = func();

	console.log(result);

	process.exit();
});

const func = () => {};
