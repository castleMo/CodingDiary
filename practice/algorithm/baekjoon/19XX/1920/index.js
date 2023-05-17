/**
 * @link https://www.acmicpc.net/problem/1920
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
	const [n, nArr, m, mArr] = input;

	const result = solution(
		nArr.split(' ').map(Number),
		mArr.split(' ').map(Number),
	);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number[]} nArr
 * @param {number[]} mArr
 */
function solution(nArr, mArr) {
	const answer = [];

	const map = new Map();

	nArr.forEach((n) => {
		map.set(n, n);
	});

	mArr.forEach((n) => {
		if (map.has(n)) {
			answer.push(1);
		} else {
			answer.push(0);
		}
	});

	return answer;
}
