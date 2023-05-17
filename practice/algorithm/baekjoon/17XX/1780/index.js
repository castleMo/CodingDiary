/**
 * @link https://www.acmicpc.net/problem/1780
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
	const n = Number(input.shift());

	const result = solution(n, input.map(strToNumberArr));

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number[][]} board
 */
function solution(n, board) {
	const answer = [0, 0, 0]; // -1,0,1

	/**
	 *
	 * @param {number} r row
	 * @param {number} c column
	 * @param {number} len length
	 * @returns
	 */
	const isSame = (r, c, len, num) => {
		for (let i = r; i < r + len; i++) {
			for (let j = c; j < c + len; j++) {
				if (num !== board[i][j]) {
					return false;
				}
			}
		}

		return true;
	};

	/**
	 *
	 * @param {number} r
	 * @param {number} c
	 * @param {number} len
	 * @returns
	 */
	const recursive = (r, c, len) => {
		const num = board[r][c];
		if (isSame(r, c, len, num)) {
			answer[num + 1]++;
			return;
		}

		// 0 1 2
		// 3 4 5
		// 6 7 8

		const newLen = Math.floor(len / 3);

		// 0
		recursive(r, c, newLen);
		// 1
		recursive(r, c + newLen, newLen);
		// 2
		recursive(r, c + newLen * 2, newLen);
		// 3
		recursive(r + newLen, c, newLen);
		// 4
		recursive(r + newLen, c + newLen, newLen);
		// 5
		recursive(r + newLen, c + newLen * 2, newLen);
		// 6
		recursive(r + newLen * 2, c, newLen);
		// 7
		recursive(r + newLen * 2, c + newLen, newLen);
		// 8
		recursive(r + newLen * 2, c + newLen * 2, newLen);

		return;
	};

	recursive(0, 0, n);

	return answer;
}

/**
 * N*N크기의 행렬로 표현되는 종이가 있다
 * 종이의 각 칸에는 -1, 0, 1 중 하나가 저장되어 있다
 *
 * 1. 만약 종이가 모두 같은 수로 되어 있다면 이 종이를 그대로 사용한다
 * 2. (1)이 아닌 경우에는 종이를 같은 크기의 종이 9개로 자르고,
 * 각각의 잘린 종이에 대해서 (1)의 과정을 반복한다
 *
 * 이와 같이 종이를 잘랐을때,
 * -1로만 채워진 종이의 개수,
 * 0으로만 채워진 종이의 개수,
 * 1로만 채워진 종이의 개수를 구하시오
 */
