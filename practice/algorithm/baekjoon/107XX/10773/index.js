/**
 * @link https://www.acmicpc.net/problem/10773
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
	const [, ...nums] = input;

	const result = solution(nums);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number[]} nums
 */
function solution(nums) {
	const stack = [];

	nums.forEach((n) => {
		if (n === 0) {
			stack.pop();
		} else {
			stack.push(n);
		}
	});

	return stack.reduce((sum, v) => sum + v, 0);
}
