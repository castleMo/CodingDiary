/**
 * @link https://www.acmicpc.net/problem/15657
 * @name N과_M_(8)
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
	nums.sort((a, b) => a - b);

	if (m === 1) {
		return nums;
	}

	const ans = [];

	const recur = (curArr, idx) => {
		if (curArr.length === m) {
			ans.push(curArr.join(' '));
			return;
		} else if (m < curArr.length) {
			return;
		}

		for (let i = idx; i < nums.length; i++) {
			recur([...curArr, nums[i]], i);
		}
	};

	recur([], 0);

	return ans;
}
