/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12981
 */
const readline = require('readline');

const strToNumberArr = (str) => str.split(' ').map(Number);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(JSON.parse(line));
}).on('close', () => {
	const [n, words] = input;

	console.log('\n');
	const result = solution(n, words);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {string[]} words
 */
function solution(n, words) {
	const ans = [0, 0];

	const map = {};

	let last = words[0][0];
	for (let i = 0; i < words.length; i++) {
		const w = words[i];
		const first = w[0];

		if (map[w] || last !== first) {
			let u = i % n;
			let cnt = Math.floor(i / n);
			ans[0] = u + 1;
			ans[1] = cnt + 1;
			break;
		}

		map[w] = 1;

		last = w[w.length - 1];
	}

	return ans;
}
