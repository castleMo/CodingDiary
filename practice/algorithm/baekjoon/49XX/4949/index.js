/**
 * @link https://www.acmicpc.net/problem/4949
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
	const result = solution(input);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {string[]} arr
 */
function solution(arr) {
	const answer = [];

	arr = arr.reduce((a, str) => {
		const newStr = str.replace('.', '');

		if (newStr.length) {
			a.push(newStr);
		}

		return a;
	}, []);

	let stack = [];

	for (const str of arr) {
		let is = true;
		str.replace('.', '');
		for (let i = 0; i < str.length; i++) {
			const c = str[i];
			if (['(', '[', ')', ']'].includes(c)) {
				if (['(', '['].includes(c)) {
					stack.push(c);
				} else {
					if (stack.length === 0) {
						is = false;
						break;
					}

					const oldC = stack.pop();
					if (c === ')' && oldC !== '(') {
						is = false;
						break;
					} else if (c === ']' && oldC !== '[') {
						is = false;
						break;
					}
				}
			}
		}

		if (is) {
			if (stack.length) {
				is = false;
			}
		}

		stack = [];
		answer.push(is ? 'yes' : 'no');
	}

	return answer;
}

/**
 * 정민이의 임무는 어떤 문자열이 주어졌을 때,
 * 괄호들의 균형이 잘 맞춰져 있는지 판단하는 프로그램을 짜는 것이다.
 */
