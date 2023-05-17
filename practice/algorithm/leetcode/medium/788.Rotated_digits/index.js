/**
 * @link
 */
const readline = require('readline');

const strToNumberArr = (str) => str.split(' ').map(Number);

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
	const result = rotatedDigits(n);

	console.log(result);
	console.log(result === r);

	process.exit();
});

/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function (n) {
	let answer = 0;
	const nums = [0, 1, 5, -1, -1, 2, 9, -1, 8, 6];

	loop1: for (let i = 1; i <= n; i++) {
		const arr = String(i).split('').map(Number);

		const rotatedNumArr = [];

		for (let j = 0; j < arr.length; j++) {
			const num = nums[arr[j]];

			if (num === -1) {
				continue loop1;
			}

			rotatedNumArr.push(num);
		}

		if (i !== Number(rotatedNumArr.join(''))) {
			answer++;
		}
	}

	return answer;
};
