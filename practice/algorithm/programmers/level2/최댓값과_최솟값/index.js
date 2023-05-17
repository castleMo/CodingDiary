/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12939
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

const solution = (s) => {
	let max = Number.MIN_SAFE_INTEGER;
	let min = Number.MAX_SAFE_INTEGER;

	for (const c of s.split(' ').map(Number)) {
		max = Math.max(c, max);
		min = Math.min(c, min);
	}

	return `${min} ${max}`;
};
