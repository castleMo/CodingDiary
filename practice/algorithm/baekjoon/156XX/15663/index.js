/**
 * @link https://www.acmicpc.net/problem/15663
 * @name N과_M_(9)
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
	const temp = [];
	const visited = Array(n).fill(false);
	nums.sort((a, b) => a - b);

	const recur = (cnt) => {
		if (cnt === m) {
			ans.add(temp.join(' '));
			return;
		}

		for (let i = 0; i < nums.length; i++) {
			if (visited[i]) {
				continue;
			}

			temp.push(nums[i]);
			visited[i] = true;

			recur(cnt + 1);

			temp.pop();
			visited[i] = false;
		}
	};

	recur(0);

	return [...ans];
}

/**
 *
 * @param {number} n
 * @param {number} m
 * @param {number[]} nums
 */
// function solution(n, m, nums) {
// 	const ans = [];

// 	nums.sort((a, b) => a - b);

// 	const queue = [[[], nums]];
// 	const visited = {};

// 	while (queue.length) {
// 		const [cur, arr] = queue.shift();

// 		if (visited[cur.join()]) {
// 			continue;
// 		}

// 		visited[cur.join()] = 1;

// 		if (cur.length === m) {
// 			ans.push(cur.join(' '));
// 			continue;
// 		}

// 		for (let i = 0; i < arr.length; i++) {
// 			queue.push([[...cur, arr[i]], arr.filter((v, idx) => idx !== i)]);
// 		}
// 	}

// 	return ans;
// }
