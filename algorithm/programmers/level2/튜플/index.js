/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/64065
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
	console.log(result.join('') === JSON.parse(r).join(''));

	process.exit();
});

const solution = (s) => {
	const answer = [];

	s = JSON.parse(s.replaceAll('{', '[').replaceAll('}', ']'));
	s.sort((a, b) => a.length - b.length);

	answer.push(s[0][0]);

	for (let i = 1; i < s.length; i++) {
		const arr = s[i];
		let temp = arr[0];

		for (let j = 1; j < arr.length; j++) {
			if (!answer.includes(arr[j])) {
				temp = arr[j];
			}
		}

		answer.push(temp);
	}

	return answer;
};
