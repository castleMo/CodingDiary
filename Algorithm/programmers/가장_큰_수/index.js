/**
 * @link
 * @description
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(JSON.parse(line));
}).on('close', () => {
	const [n, r] = input;

	console.log('\n');
	const result = solution(n);

	console.log(result);
	console.log(r);
	console.log(r === result);

	process.exit();
});

const solution = (nums) => {
	const strZero = '0';

	nums = nums.map(String);
	nums.sort((a, b) => b + a - (a + b));

	return nums[0] === strZero ? strZero : nums.join('');
};
