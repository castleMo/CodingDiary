/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12951
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
	const [s, r] = input;

	console.log('\n');
	const result = solution(s);

	console.log(result);
	console.log(result === r);

	process.exit();
});

/**
 *
 * @param {string} s
 * @returns {string}
 */
const solution = (s) =>
	s
		.split(' ')
		.map(
			(str) =>
				`${str.substring(0, 1).toUpperCase()}${str.substring(1).toLowerCase()}`,
		)
		.join(' ');
