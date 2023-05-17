/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12941
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
	const [a, b, r] = input;

	console.log('\n');
	const result = solution(a, b);

	console.log(result);
	console.log(result === r);

	process.exit();
});

const solution = (A, B) => {
	let answer = 0;

	A.sort((a, b) => a - b);
	B.sort((a, b) => b - a);

	const len = A.length;

	for (let i = 0; i < len; i++) {
		answer += A[i] * B[i];
	}

	return answer;
};
