/**
 * @link https://www.acmicpc.net/problem/1654
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const [str1, ...str2] = input;
	const [n, k] = str1.split(' ').map(Number);
	const arr = str2.map(Number).sort((a, b) => a - b);
	const result = solution(n, k, arr);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number} k
 * @param {number[]} arr
 */
function solution(n, k, arr) {
	let max = Math.max(...arr);
	let min = 1;

	while (min <= max) {
		let mid = Math.floor((max + min) / 2);
		let cnt = arr.reduce((sum, num) => sum + Math.floor(num / mid), 0);

		if (k <= cnt) {
			min = mid + 1;
		} else {
			max = mid - 1;
		}
	}

	return max;
}
