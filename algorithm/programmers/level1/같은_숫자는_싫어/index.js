/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12906?language=javascript
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
	const [a, r] = input;

	console.log('\n');
	const result = solution(a);

	console.log(result);
	console.log(result.join(',') === r.join(','));

	process.exit();
});

const solution = (arr) => {
	const answer = [];

	for (const n of arr) {
		if (answer[answer.length - 1] !== n) {
			answer.push(n);
		}
	}

	return answer;
};
