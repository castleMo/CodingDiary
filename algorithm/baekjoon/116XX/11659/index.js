/**
 * @link https://www.acmicpc.net/problem/11659
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
	const arr = input.map(strToNumberArr);
	const [n, m] = arr.shift();
	const nums = [0, ...arr.shift()];
	const memo = [0, nums[1]];

	const consoleArr = [];

	for (let i = 2; i <= n; i++) {
		memo[i] = nums[i] + memo[i - 1];
	}

	for (const [start, end] of arr) {
		const result = memo[end] - memo[start - 1];
		consoleArr.push(result);
	}

	console.log(consoleArr.join('\n'));

	process.exit();
});
