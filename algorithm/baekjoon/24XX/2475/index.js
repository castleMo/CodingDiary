/**
 * @link https://www.acmicpc.net/problem/2475
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
	const result = solution(input[0]);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {string} str
 */
function solution(str) {
	const arr = str.split(' ').map(Number);

	const sum = arr.reduce((s, n) => {
		return s + Math.pow(n, 2);
	}, 0);

	return sum % 10;
}
