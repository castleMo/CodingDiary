/**
 * @link
 * @name
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (giline) => {
	input.push(line);
}).on('close', () => {
	const [s, r] = input;

	console.log('\n');
	const result = solution(s);

	console.log(result);
	console.log(result === Number(r));

	process.exit();
});

/**
 *
 * @param {string} s
 */
function solution(s) {
	let answer = 0;

	const map = {
		'[': ']',
		'(': ')',
		'{': '}',
	};

	const check = (str) => {
		const stack = [str[0]];

		for (let i = 1; i < str.length; i++) {
			if (map[stack[stack.length - 1]] === str[i]) {
				stack.pop();
			} else {
				stack.push(str[i]);
			}
		}

		return stack.length === 0 ? true : false;
	};

	for (let i = 0; i < s.length; i++) {
		s = s.substring(1) + s.substring(0, 1);
		if (check(s)) {
			answer++;
		}
	}

	return answer;
}
