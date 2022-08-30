/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42747?language=javascript
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
	const [c, r] = input;

	console.log('\n');
	const result = solution(c);

	console.log(result);
	console.log(result === r);

	process.exit();
});

const solution = (citations) => {
	const len = citations.length;
	if (len === 1) {
		return citations[0] === 1 ? 1 : 0;
	}

	let answer = 0;

	citations.sort((a, b) => b - a);

	while (answer + 1 <= citations[answer]) {
		answer++;
	}

	return answer;
};
