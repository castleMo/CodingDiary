/**
 * @link https://www.acmicpc.net/problem/1992
 * @name 쿼드트리
 */

const readline = require('readline');

const strToNumberArr = (str) => str.split('').map(Number);

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

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number[]} board
 */
function solution(n, board) {
	const ans = [];

	const isValid = (num, r, c, len) => {
		for (let i = r; i < r + len; i++) {
			for (let j = c; j < c + len; j++) {
				if (num !== board[i][j]) {
					return false;
				}
			}
		}

		return true;
	};

	if (isValid(board[0][0], 0, 0, n)) {
		return board[0][0];
	}

	const stack = [[0, 0, n, []]];

	while (stack.length) {
		const [r, c, len, pos] = stack.pop();
		const num = board[r][c];
		if (isValid(num, r, c, len)) {
			let arr = ans;
			for (let i = 0; i < pos.length - 1; i++) {
				const idx = pos[i];
				if (arr[idx] === undefined) {
					arr[idx] = [];
				}
				arr = arr[idx];
			}
			arr[pos[pos.length - 1]] = num;

			continue;
		}

		const newLen = len / 2;

		// 0 1
		// 2 3

		// 0
		stack.push([r, c, newLen, [...pos, 0]]);
		// 1
		stack.push([r, c + newLen, newLen, [...pos, 1]]);
		// 2
		stack.push([r + newLen, c, newLen, [...pos, 2]]);
		// 3
		stack.push([r + newLen, c + newLen, newLen, [...pos, 3]]);
	}

	const recursive = (strOrArr) => {
		if (!Array.isArray(strOrArr)) {
			return strOrArr;
		}

		let str = '';

		for (let i = 0; i < strOrArr.length; i++) {
			if (Array.isArray(strOrArr[i])) {
				str += recursive(strOrArr[i]);
			} else {
				str += strOrArr[i];
			}
		}

		return `(${str})`;
	};

	return `(${ans.reduce((str, v) => {
		str += recursive(v);
		return str;
	}, '')})`;
}
