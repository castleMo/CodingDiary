/**
 * @link https://www.acmicpc.net/problem/10816
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
	const [, cardsN, , cardsM] = input;

	const result = solution(
		cardsN.split(' ').map(Number),
		cardsM.split(' ').map(Number),
	);

	console.log(result.join(' '));

	process.exit();
});

/**
 *
 * @param {number[]} cardsN 상근이 카드 배열
 * @param {number[]} cardsM 정수 카드 배열
 */
function solution(cardsN, cardsM) {
	const map = {};
	for (const n of cardsN) {
		map[n] = map[n] ? map[n] + 1 : 1;
	}

	return cardsM.map((n) => map[n] || 0);
}

/**
 * 숫자카드 = 정수 하나
 * 상근이 = N개
 * 정수 M개가 주어졌을 때, 이 수가 적혀있는 숫자 카드를 상근이가 몇 개 가지고 있나
 */
