/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/76501
 * @description
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(JSON.parse(line));
}).on('close', () => {
	const [a, s, r] = input;

	console.log('\n');
	const result = solution(a, s);

	console.log(result);
	console.log(r);
	console.log(r === result);

	process.exit();
});

const solution = (absolutes, signs) => {
	return absolutes.reduce(
		(answer, curVal, idx) => answer + (signs[idx] ? curVal : curVal * -1),
		0,
	);
};
