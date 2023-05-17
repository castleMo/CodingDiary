/**
 * @link https://www.acmicpc.net/problem/2981
 * @description
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
	const [, ...nums] = input;

	const result = solution(nums);

	console.log(result);

	process.exit();
});

const getGcd = (n1, n2) => {
	if (n2 === 0) {
		return n1;
	}

	return getGcd(n2, n1 % n2);
};

const solution = (nums) => {
	const answer = [];

	nums.sort((n1, n2) => n1 - n2);

	let gcd = nums[1] - nums[0];

	for (let i = 1; i < nums.length - 1; i++) {
		gcd = getGcd(nums[i + 1] - nums[i], gcd);
	}

	for (let i = 2; i <= gcd; i++) {
		if (gcd % i === 0) {
			answer.push(i);
		}
	}

	return answer.join(' ');
};

// 시간초과
// const solution = (nums) => {
// 	const answer = [];
// 	const max = Math.max(...nums);

// 	for (let i = 2; i < max / 2; i++) {
// 		let r = nums[0] % i;
// 		for (let j = 1; j < nums.length; j++) {
// 			if (r !== nums[j] % i) {
// 				break;
// 			}

// 			if (j === nums.length - 1) {
// 				answer.push(i);
// 			}
// 		}
// 	}

// 	return answer.join(' ');
// };
