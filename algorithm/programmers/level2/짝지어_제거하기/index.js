/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12973
 * @description
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
	console.log(result === Number(r));

	process.exit();
});

const solution = (s) => {
	const stack = [s[0]];

	for (let i = 1; i < s.length; i++) {
		if (stack[stack.length - 1] !== s[i]) {
			stack.push(s[i]);
		} else {
			stack.pop();
		}
	}

	return stack.length ? 0 : 1;
};
