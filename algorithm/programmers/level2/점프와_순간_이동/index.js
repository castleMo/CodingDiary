/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12980
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
	const [n, r] = input;

	console.log('\n');
	const result = solution(n);

	console.log(result);
	console.log(result === r);

	process.exit();
});

/**
 *
 * @param {number} n
 */
function solution(n) {
	let ans = 0;

	while (0 < n) {
		if (n % 2 !== 0) {
			n -= 1;
			ans++;
		}

		n /= 2;
	}

	return ans;
}
