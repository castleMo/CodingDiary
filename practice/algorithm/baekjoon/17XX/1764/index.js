/**
 * @link https://www.acmicpc.net/problem/1764
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
	const [n, m] = strToNumberArr(input.shift());

	const listen = input.slice(0, n);
	const see = input.slice(n);

	const result = solution(n, m, see, listen);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number} m
 * @param {string[]} seeArr 보지 못한사람
 * @param {string[]} listenArr 듣지 못한사람
 */
function solution(n, m, seeArr, listenArr) {
	const answer = [];
	const map = {};

	seeArr.forEach((v) => {
		map[v] = map[v] ? map[v] + 1 : 1;
	});
	listenArr.forEach((v) => {
		map[v] = map[v] ? map[v] + 1 : 1;
	});

	for (const k in map) {
		if (map[k] > 1) {
			answer.push(k);
		}
	}

	return [answer.length, ...answer.sort()];
}
