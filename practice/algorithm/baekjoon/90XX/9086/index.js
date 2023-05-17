/**
 * @link https://www.acmicpc.net/problem/9086
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const [, ...arr] = input;

	const arr2 = arr.map((s) => {
		if (s.length === 1) {
			return `${s}${s}`;
		} else {
			return `${s[0]}${s[s.length - 1]}`;
		}
	});

	console.log(arr2.join('\n'));

	process.exit();
});
