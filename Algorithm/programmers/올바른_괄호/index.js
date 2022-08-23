/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12909?language=javascript
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
	const [s] = input;

	console.log('\n');
	const result = solution(s);

	console.log(result);

	process.exit();
});

const solution = (str) => {
	if (str[0] === ')') {
		return false;
	}

	const stack = [str[0]];

	for (let i = 1; i < str.length; i++) {
		const s = str[i];
		if (s === '(') {
			stack.push(s);
		} else {
			if (stack.length > 0) {
				stack.pop();
			} else {
				return false;
			}
		}
	}

	return stack.length > 0 ? false : true;
};
