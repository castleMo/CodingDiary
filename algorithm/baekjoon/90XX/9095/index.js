/**
 * @link https://www.acmicpc.net/problem/9095
 */
const readline = require('readline');

const strToNumberArr = (str) => str.split(' ').map(Number);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(Number(line));
}).on('close', () => {
	const [, ...arr] = input;

	const result = solution(arr);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number[]} testCase
 */
function solution(testCase) {
	const answer = Array(testCase.length).fill(0);

	const nums = [1, 2, 3];

	const getSum = (arr) => {
		return arr.reduce((a, b) => a + b, 0);
	};

	const recursive = (target, idx, arr) => {
		const sum = getSum(arr);
		if (sum === target) {
			answer[idx]++;
			return;
		} else if (target < sum) {
			return;
		}

		nums.forEach((n) => {
			recursive(target, idx, [...arr, n]);
		});
	};

	for (let i = 0; i < testCase.length; i++) {
		recursive(testCase[i], i, []);
	}

	return answer;
}
