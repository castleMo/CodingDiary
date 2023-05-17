/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12953
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
	const [a, r] = input;

	console.log('\n');
	const result = solution(a);

	console.log(result);
	console.log(result === r);

	process.exit();
});

const gcd = (a, b) => {
	return a % b ? gcd(b, a % b) : b;
};

/**
 *
 * @param {number[]} arr
 */
function solution(arr) {
	return arr.reduce((a, b) => {
		return (a * b) / gcd(a, b);
	});
}
