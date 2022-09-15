/**
 * @link https://www.acmicpc.net/problem/1259
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
	solution(input);

	process.exit();
});

/**
 *
 * @param {string[]} arr
 */
function solution(arr) {
	// arr에서 0을 뺌
	arr.pop();

	for (const str of arr) {
		const len = str.length;
		let is = true;
		for (let i = 0; i < len / 2; i++) {
			if (str[i] !== str[len - 1 - i]) {
				is = false;
				break;
			}
		}

		console.log(is ? 'yes' : 'no');
	}
}
