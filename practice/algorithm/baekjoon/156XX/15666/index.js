/**
 * @link https://www.acmicpc.net/problem/15666
 * @name N과_M_(12)
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
	const [n, m] = strToNumberArr(input.shift());

	const result = solution(n, m, strToNumberArr(input.shift()));

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number} m
 * @param {number[]} nums
 */
function solution(n, m, nums) {
	const ans = new Set();
	nums.sort((a, b) => a - b);

	const recur = (arr, idx) => {
		if (arr.length === m) {
			ans.add(arr.join(' '));
			return;
		}

		for (let i = idx; i < nums.length; i++) {
			recur([...arr, nums[i]], i);
		}
	};

	recur([], 0);

	return [...ans];
}
