/**
 * @link https://www.acmicpc.net/problem/2920
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

function solution(str) {
	if (str === '1 2 3 4 5 6 7 8') {
		return 'ascending';
	} else if (str === '8 7 6 5 4 3 2 1') {
		return 'descending';
	} else {
		return 'mixed';
	}
}
