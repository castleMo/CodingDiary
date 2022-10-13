/**
 * @link https://www.acmicpc.net/problem/16953
 * @name A->B
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
	const [a, b] = strToNumberArr(input.shift());

	const result = solution(a, b);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} a
 * @param {number} b
 * @returns
 */
function solution(a, b) {
	let ans = -1;

	const queue = [[a, 1]];

	while (queue.length) {
		const [num, cnt] = queue.shift();

		if (num === b) {
			ans = cnt;
			break;
		}

		if (num * 2 <= b) {
			queue.push([num * 2, cnt + 1]);
		}

		if (num * 10 + 1 <= b) {
			queue.push([num * 10 + 1, cnt + 1]);
		}
	}

	return ans;
}
