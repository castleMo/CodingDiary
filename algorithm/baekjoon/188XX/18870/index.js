/**
 * @link https://www.tistory.com/member/blog
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
	const [, str] = input;

	const result = solution(strToNumberArr(str));

	console.log(result.join(' '));

	process.exit();
});

/**
 *
 * @param {number[]} arr
 */
function solution(arr) {
	const answer = [];

	const map = [...new Set(arr)]
		.sort((a, b) => a - b)
		.reduce((obj, v, idx) => {
			obj[v] = idx;
			return obj;
		}, {});

	arr.forEach((v) => {
		answer.push(map[v]);
	});

	return answer;
}
