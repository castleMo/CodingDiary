/**
 * @link https://www.acmicpc.net/problem/15964
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
	const [a, b] = input[0].split(' ').map(Number);

	const result = solution(a, b);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} a
 * @param {number} b
 */
function solution(a, b) {
	return (a + b) * (a - b);
}
