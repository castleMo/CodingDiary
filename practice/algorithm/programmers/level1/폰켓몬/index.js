/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/1845
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
	const cnt = nums.length / 2;
	const setLen = [...new Set(nums)].length;

	return Math.min(cnt, setLen);
};
