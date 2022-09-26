/**
 * @link https://www.acmicpc.net/problem/13398
 */
const readline = require('readline');

const strToNumberArr = (str) => str.split(' ').map(Number);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const [, str] = input;

	const result = solution(strToNumberArr(str));

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number[]} nums
 */
function solution(nums) {
	let answer = nums[0];
	const len = nums.length;
	const memo = [...new Array(len + 1)].map(() => []);

	for (let i = 0; i < len; i++) {
		memo[i][0] = nums[i];
		memo[i][1] = nums[i];

		if (i === 0) {
			continue;
		}

		memo[i][0] = Math.max(memo[i - 1][0] + nums[i], nums[i]);
		memo[i][1] = Math.max(memo[i - 1][0], memo[i - 1][1] + nums[i]);

		answer = Math.max(answer, memo[i][0], memo[i][1]);
	}

	return answer;
}
