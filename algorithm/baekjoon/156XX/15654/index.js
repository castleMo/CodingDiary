/**
 * @link https://www.acmicpc.net/problem/15654
 * @name N과_M_(5)
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

	const recur = (curArr, arr) => {
		if (curArr.length === m) {
			ans.push(curArr.join(' '));
			return;
		} else if (m < curArr.length) {
			return;
		}

		for (let i = 0; i < arr.length; i++) {
			const num = arr[i];
			const newArr = arr.filter((v, idx) => idx !== i);
			recur([...curArr, num], newArr);
		}
	};

	recur([], [...nums]);

	return ans;
}
