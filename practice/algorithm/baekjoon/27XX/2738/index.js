/**
 * @link https://www.acmicpc.net/problem/2738
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
	const [str, ...arr] = input;

	const [n] = str.split(' ').map(Number);
	const a = [];
	const b = [];

	arr.forEach((s, idx) => {
		const nums = s.split(' ').map(Number);
		if (idx < n) {
			a.push(nums);
		} else {
			b.push(nums);
		}
	});

	const result = solution(a, b);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number[]} a
 * @param {number[]} b
 */
function solution(a, b) {
	const answer = [];

	for (let i = 0; i < a.length; i++) {
		const arr = [];
		for (let j = 0; j < a[i].length; j++) {
			arr.push(a[i][j] + b[i][j]);
		}
		answer.push(arr.join(' '));
	}

	return answer;
}
