/**
 * @link https://www.acmicpc.net/problem/1074
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
	const [n, r, c] = input[0].split(' ').map(Number);

	solution(n, r, c);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number} r
 * @param {number} c
 */
function solution(n, r, c) {
	let answer = 0;

	const recursive = (row, col, size) => {
		if (row === r && col === c) {
			console.log(answer);
			return;
		}

		if (row <= r && r < row + size && col <= c && c < col + size) {
			// 영역 내에 있으면
			const newSize = Math.floor(size / 2);
			recursive(row, col, newSize);
			recursive(row, col + newSize, newSize);
			recursive(row + newSize, col, newSize);
			recursive(row + newSize, col + newSize, newSize);
		} else {
			answer += size * size;
		}
	};

	recursive(0, 0, Math.pow(2, n));
}

/**
 * 한수는 크기가 2^N * 2^N인 2차원 배열을 Z모양으로 탐색하려고한다
 *
 * N > 1인 경우, 배열을 크기가 2N-1 × 2N-1로 4등분 한 후에 재귀적으로 순서대로 방문한다.
 *
 * N이 주어졌을 때, r행 c열을 몇 번째로 방문하는지 출력하는 프로그램을 작성하시오.
 */
