/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12985
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(Number(line));
}).on('close', () => {
	const [n, a, b, r] = input;

	console.log('\n');
	const result = solution(n, a, b);

	console.log(result);
	console.log(result === r);

	process.exit();
});

/**
 *
 * @param {number} n 참가자 수
 * @param {number} a
 * @param {number} b
 */
function solution(n, a, b) {
	let ans = 0;

	while (0 < Math.abs(b - a)) {
		a = Math.ceil(a / 2);
		b = Math.ceil(b / 2);
		ans++;
	}

	return ans;
}
