/**
 * @link https://www.acmicpc.net/problem/17626
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
	const [n] = input;

	const result = solution(n);

	console.log(result);

	process.exit();
});

function solution(n) {
	const memo = Array(n + 1).fill(-1);

	const recursive = (num) => {
		if (num <= 1) {
			return num;
		}

		if (memo[num] !== -1) {
			return memo[num];
		}

		let min = 4;

		for (let i = Math.floor(Math.sqrt(num)); 0 < i; i--) {
			min = Math.min(min, recursive(num - Math.pow(i, 2)) + 1);
		}

		memo[num] = min;

		return min;
	};

	return recursive(n);
}

// for (let i = 2; i <= n; i++) {
// 	let min = 4;

// 	for (let j = 1; Math.pow(j, 2) <= i; j++) {
// 		min = Math.min(min, memo[i - Math.pow(j, 2)]);
// 	}

// 	memo[i] = min + 1;
// }
