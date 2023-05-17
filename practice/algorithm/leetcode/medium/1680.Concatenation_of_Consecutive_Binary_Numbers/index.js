/**
 * @link https://leetcode.com/problems/concatenation-of-consecutive-binary-numbers/
 */
const readline = require('readline');

const strToNumberArr = (str) => str.split(' ').map(Number);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(Number(line));
}).on('close', () => {
	const [n] = input;

	console.log('\n');
	const result = concatenatedBinary(n);

	console.log(result);

	process.exit();
});

/**
 * @param {number} n
 * @return {number}
 */
function concatenatedBinary(n) {
	const modulo = Math.pow(10, 9) + 7;
	let answer = 1;
	let len = 4;

	for (let i = 2; i <= n; i++) {
		if (i === len) {
			len *= 2;
		}

		answer = (answer * len + i) % modulo;
	}

	return answer;
}
