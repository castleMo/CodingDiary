/**
 * @link https://www.acmicpc.net/problem/9465
 * @name 스티커
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
	const T = Number(input.shift());

	const arr = [];
	for (let i = 0; i < T; i++) {
		const temp = [];
		input.shift();
		for (let i = 0; i < 2; i++) {
			temp.push(strToNumberArr(input.shift()));
		}
		arr.push(temp);
	}

	const result = solution(arr);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number[][][]} arr
 */
function solution(arr) {
	const ans = [];

	for (const nums of arr) {
		const len = nums[0].length;

		// [아무것도 고르지 않음, 위에 값을 고름, 아랫 값을 고름]
		const memo = [[0, nums[0][0], nums[1][0]]];

		for (let i = 1; i < len; i++) {
			memo[i] = [];
			// 아무것도 고르지 않을 때에는 memo[i-1] 중 최댓값
			memo[i][0] = Math.max(...memo[i - 1]);
			// 위에 값을 고를 경우, 아무것도 고르지 않을 경우와 아랫쪽 값을 고른 경우 중 최댓값 + 현재의 윗값
			memo[i][1] = Math.max(memo[i - 1][0], memo[i - 1][2]) + nums[0][i];
			// 아래 값을 고를 경우, 아무것도 고르지 않은 경우와 위쪽 값을 고른 경우 중 최댓값 + 현재의 아랫값
			memo[i][2] = Math.max(memo[i - 1][0], memo[i - 1][1]) + nums[1][i];
		}

		ans.push(Math.max(...memo[len - 1]));
	}

	return ans;
}
