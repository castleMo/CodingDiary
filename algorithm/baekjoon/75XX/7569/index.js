/**
 * @link https://www.acmicpc.net/problem/7569
 * @name 토마토
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
	const [m, n, h] = strToNumberArr(input.shift());

	const arr = input.map(strToNumberArr);

	const box = [];

	let idx = 0;
	for (let i = 0; i < h; i++) {
		const t = [];
		for (let j = 0; j < n; j++) {
			t.push(arr[idx++]);
		}
		box.push(t);
	}

	const result = solution(m, n, h, box);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} M 상자의 가로
 * @param {number} N 상자의 세로
 * @param {number} H 상자의 높이
 * @param {number[][][]} box
 * @returns
 */
function solution(M, N, H, box) {
	let ans = -1;
	const visited = [...Array(H)].map((h) =>
		[...Array(N)].map((n) => Array(M).fill(0)),
	);
	const pos = [
		// [h,n,m]
		[0, 1, 0], // 앞
		[0, -1, 0], // 뒤
		[0, 0, 1], // 오른쪽
		[0, 0, -1], // 왼쪽
		[1, 0, 0], // 위
		[-1, 0, 0], // 아래
	];

	const check = (h, r, c) => {
		// 높이를 벗어나면
		if (h < 0 || H <= h) {
			return false;
		}
		// 가로를 벗어나면
		if (r < 0 || N <= r) {
			return false;
		}
		// 세로를 벗어나면
		if (c < 0 || M <= c) {
			return false;
		}
		// 방문한적이 있으면
		if (visited[h][r][c] === 1) {
			return false;
		}

		return true;
	};

	const queue = [];
	let zeroCnt = H * N * M;

	for (let i = 0; i < H; i++) {
		for (let j = 0; j < N; j++) {
			for (let k = 0; k < M; k++) {
				if (box[i][j][k] === 1) {
					visited[i][j][k] = 1;
					zeroCnt--;
					queue.push([i, j, k, 0]);
				} else if (box[i][j][k] === -1) {
					visited[i][j][k] = 1;
					zeroCnt--;
				}
			}
		}
	}

	if (zeroCnt < 1) {
		return 0;
	}

	let idx = 0;
	while (idx < queue.length) {
		const [h, r, c, day] = queue[idx++];

		for (const [i, j, k] of pos) {
			const [newH, newR, newC] = [h + i, r + j, c + k];

			// 상자 범위를 벗어나지 않고 방문 한적이 없으면
			if (check(newH, newR, newC)) {
				visited[newH][newR][newC] = 1;
				zeroCnt--;
				queue.push([newH, newR, newC, day + 1]);
			}
		}

		ans = day;
	}

	return 0 < zeroCnt ? -1 : ans;
}
