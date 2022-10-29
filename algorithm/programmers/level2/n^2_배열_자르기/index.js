/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/87390
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
	const [n, l, r, re] = input;

	console.log('\n');
	const result = solution(n, l, r);

	console.log(result);
	console.log(result.join() === re.join());

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number} left
 * @param {number} right
 * @returns {number[]}
 */
function solution(n, left, right) {
	const answer = [];
	const cnt = right - left + 1;

	let row = Math.floor(left / n);
	let column = left % n;

	while (answer.length < cnt) {
		const num = Math.max(row + 1, column + 1);

		answer.push(num);

		column++;

		if (column % n === 0) {
			column = 0;
			row++;
		}
	}

	return answer;
}
