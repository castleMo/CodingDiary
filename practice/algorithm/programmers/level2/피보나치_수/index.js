/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12945
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
	const [n, r] = input;

	console.log('\n');
	const result = solution(n);

	console.log(result);
	console.log(result === r);

	process.exit();
});

/**
 *
 * @link https://programmers.co.kr/questions/11991
 * @param {number} n
 * @returns
 */
const solution = (n) => {
	const memo = [0, 1];

	if (n < memo) {
		return memo[n];
	}

	for (let i = memo.length; i <= n; i++) {
		memo[i] = (memo[i - 1] + memo[i - 2]) % 1234567;
	}

	console.log(memo.reverse());

	return memo[n] % 1234567;
};

// const solution = (n) => {
// 	const memo = [BigInt(0), BigInt(1)];

// 	if (n < memo) {
// 		return memo[n];
// 	}

// 	for (let i = memo.length; i <= n; i++) {
// 		memo[i] = memo[i - 1] + memo[i - 2];
// 	}

// 	return Number(memo[n] % 1234567n);
// };
