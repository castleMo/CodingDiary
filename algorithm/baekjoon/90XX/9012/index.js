/**
 * @link https://www.acmicpc.net/problem/9012
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
	const [, ...arr] = input;

	const result = solution(arr);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {string[]} arr
 */
function solution(arr) {
	const answer = [];

	for (const str of arr) {
		if (!str.includes('(')) {
			answer.push('NO');
		} else {
			const stack = [];
			for (let i = 0; i < str.length; i++) {
				const s = str[i];
				if (s === '(') {
					stack.push(s);
				} else {
					if (stack[stack.length - 1] === '(') {
						stack.pop();
					} else {
						stack.push(s);
					}
				}
			}

			if (stack.length === 0) {
				answer.push('YES');
			} else {
				answer.push('NO');
			}
		}
	}

	return answer;
}
