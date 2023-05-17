/**
 * @link https://www.acmicpc.net/problem/17070
 * @name 파이프_옮기기_1
 */
const readline = require('readline');

/**
 *
 * @param {string} str
 * @returns {number[]}
 */
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

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number[]} board
 */
function solution(n, board) {
	const memo = [...Array(n)].map(() =>
		[...Array(n)].map(() => Array(n).fill(0)),
	);
	memo[0][1] = [1, 0, 0]; // [horizontal, diagonal, vertical]

	const isHorizontal = (r, c) => {
		return c + 1 < n && board[r][c + 1] !== 1;
	};

	const isDiagonal = (r, c) => {
		return (
			c + 1 < n &&
			board[r][c + 1] !== 1 &&
			r + 1 < n &&
			board[r + 1][c] !== 1 &&
			board[r + 1][c + 1] !== 1
		);
	};

	const isVertical = (r, c) => {
		return r + 1 < n && board[r + 1][c] !== 1;
	};

	for (let r = 0; r < n; r++) {
		for (let c = 0; c < n; c++) {
			if (r === 0 && c === 0) {
				continue;
			}

			const [h, d, v] = memo[r][c];

			// 수평일때
			if (0 < h) {
				// 오른쪽으로 밀 수 있으면
				if (isHorizontal(r, c)) {
					memo[r][c + 1][0] += h;
				}

				// 대각으로 밀 수 있으면
				if (isDiagonal(r, c)) {
					memo[r + 1][c + 1][1] += h;
				}
			}

			// 대각일때
			if (0 < d) {
				// 오른쪽으로 밀 수 있으면
				if (isHorizontal(r, c)) {
					memo[r][c + 1][0] += d;
				}

				// 대각으로 밀 수 있으면
				if (isDiagonal(r, c)) {
					memo[r + 1][c + 1][1] += d;
				}

				// 아래로 밀 수 있으면
				if (isVertical(r, c)) {
					memo[r + 1][c][2] += d;
				}
			}

			// 수직일때
			if (0 < v) {
				// 대각으로 밀 수 있으면
				if (isDiagonal(r, c)) {
					memo[r + 1][c + 1][1] += v;
				}

				// 아래로 밀 수 있으면
				if (isVertical(r, c)) {
					memo[r + 1][c][2] += v;
				}
			}
		}
	}

	return memo[n - 1][n - 1].reduce((s, v) => s + v, 0);
}

// 시간 초과
// function solution(n, board) {
// 	let ans = 0;

// 	const stack = [
// 		[
// 			[0, 0],
// 			[0, 1],
// 		],
// 	];

// 	// 수평
// 	const isHorizontal = (tail, head) => {
// 		const [r1, c1] = tail;
// 		const [r2, c2] = head;

// 		return r1 === r2 && c1 !== c2;
// 	};

// 	// 수직
// 	const isVertical = (tail, head) => {
// 		const [r1, c1] = tail;
// 		const [r2, c2] = head;

// 		return c1 === c2 && r1 !== r2;
// 	};

// 	// 대각선
// 	const isDiagonal = (tail, head) => {
// 		const [r1, c1] = tail;
// 		const [r2, c2] = head;

// 		return r1 + 1 === r2 && c1 + 1 === c2;
// 	};

// 	while (stack.length) {
// 		const [tail, head] = stack.pop();

// 		if (head[0] === n - 1 && head[1] === n - 1) {
// 			ans++;
// 			continue;
// 		}

// 		// 오른쪽
// 		// 오른쪽으로 밀기 위해서는 파이프의 상태가 가로 또는 대각선 상태여야 한다
// 		if (isHorizontal(tail, head) || isDiagonal(tail, head)) {
// 			const newHead = [...head];
// 			newHead[1] += 1;
// 			// 이동했을시에 크기를 벗어나지 않고 벽이 아니면
// 			if (newHead[1] < n && board[newHead[0]][newHead[1]] !== 1) {
// 				stack.push([[...head], newHead]);
// 			}
// 		}

// 		// 아래
// 		// 아래로 밀기 위해서는 파이프의 상태가 수직 또는 대각선 상태여야 한다
// 		if (isVertical(tail, head) || isDiagonal(tail, head)) {
// 			const newHead = [...head];
// 			newHead[0] += 1;
// 			// 이동했을시에 크기를 벗어나지 않고 벽이 아니면
// 			if (newHead[0] < n && board[newHead[0]][newHead[1]] !== 1) {
// 				stack.push([[...head], newHead]);
// 			}
// 		}

// 		// 오른쪽 아래 대각선
// 		const newHead = [...head];
// 		newHead[0] += 1;
// 		newHead[1] += 1;
// 		if (
// 			newHead[0] < n &&
// 			newHead[1] < n &&
// 			board[newHead[0]][newHead[1]] !== 1 &&
// 			board[newHead[0] - 1][newHead[1]] !== 1 &&
// 			board[newHead[0]][newHead[1] - 1] !== 1
// 		) {
// 			stack.push([[...head], newHead]);
// 		}
// 	}

// 	return ans;
// }
