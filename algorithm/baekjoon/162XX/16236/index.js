/**
 * @link https://www.acmicpc.net/problem/16236
 * @name 아기_상어
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

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number[][]} space 공간
 */
function solution(n, space) {
	let ans = 0;
	let sharkPos; // 상어 위치
	let sharkSize = 2; // 상어 크기
	let eat = 0; // 먹은 갯수
	const fishCnt = [];
	const offset = [
		[1, 0],
		[-1, 0],
		[0, 1],
		[0, -1],
	];

	for (let i = 0; i < n; i++) {
		for (let j = 0; j < n; j++) {
			const size = space[i][j];
			if (0 < size && size < 9) {
				fishCnt[size] = fishCnt[size] ? fishCnt[size] + 1 : 1;
			} else if (size === 9) {
				sharkPos = [i, j];
				space[i][j] = 0;
			}
		}
	}

	const check = (r, c) => 0 <= r && r < n && 0 <= c && c < n;

	const bfs = (size) => {
		const visited = [...Array(n)].map(() => Array(n).fill(false));
		const [startR, startC] = sharkPos;
		visited[startR][startC] = true;

		let queue = [[startR, startC, 0]];
		let depth = 0;
		let nextPos;

		while (queue.length) {
			stack = [...queue];
			queue = [];

			while (stack.length) {
				const [r, c, cnt] = stack.pop();

				if (space[r][c] && space[r][c] <= size) {
					if (!depth) {
						depth = cnt;
						nextPos = [r, c];
					} else {
						const [nr, nc] = nextPos;
						if (nr === r) {
							nextPos = nc < c ? nextPos : [r, c];
						} else {
							nextPos = nr < r ? nextPos : [r, c];
						}
					}
				}

				for (const [i, j] of offset) {
					const nr = r + i;
					const nc = c + j;

					if (check(nr, nc) && !visited[nr][nc] && space[nr][nc] <= sharkSize) {
						visited[nr][nc] = true;
						queue.push([nr, nc, cnt + 1]);
					}
				}
			}

			if (depth) {
				break;
			}
		}

		if (nextPos) {
			const [nr, nc] = nextPos;
			fishCnt[space[nr][nc]]--;
			space[nr][nc] = 0;
			sharkPos = [nr, nc];
			eat++;

			if (eat === sharkSize) {
				eat = 0;
				sharkSize++;
			}
		}

		return depth;
	};

	while (fishCnt.some((v, i) => 0 < v && i <= sharkSize - 1)) {
		const cnt = bfs(sharkSize - 1);
		if (cnt) {
			ans += cnt;
		} else {
			break;
		}
	}

	return ans;
}

/**
 * N*N 크기의 공간에 물고기 M 마리와 아기 상어 1마리가 있다
 * 공간은 1*1 크기의 정사각형 칸으로 나누어져 있다
 * 한 칸에는 물고기가 최대 1마리 존재한다.
 *
 * 아기 상어와 물고기는 모두 크기를 가지고 있고, 이 크기는 자연수이다.
 *
 * 가정 처음에 아기 상어의 크기는 2이고,
 * 아기 상어는 1초에 상하좌우로 인접한 한 칸씩 이동한다
 *
 * 아기 상어는 자신의 크기보다 큰 물고기가 있는 칸은 지나갈 수 없고
 * 나머지 칸은 모두 지나갈 수 있다.
 *
 * 아기 상어는 자신의 크기보다 작은 물고기만 먹을 수 있다.
 * 같은 크기의 물고기는 먹지 못하지만 지나 갈 수 있다
 *
 * 아기 상어가 어디로 이동할지 결정하는 방법은 아래와 같다
 * 1. 더 이상 먹을 수 있는 물고기가 공간에 없다면 아기 상어는 엄마 상어에게 도움을 요청
 * 2. 먹을 수 있는 물고기가 1마리라면, 그 물고기를 먹으러 간다
 * 3. 먹을 수 있는 물고기가 1마리보다 많다면, 거리가 가장 가까운 물고기를 먹으러 간다.
 * 	a. 거리는 아기 상어가 있는 칸에서 물고기가 있는 칸으로 이동할 때, 지나야하는 칸의 개수의 최솟값
 *  b. 거리가 가까운 물고기가 많다면, 가장 위에 있는 물고기, 그러한 물고기가 여러마리라면, 가장 왼쪽
 * 		 에 있는 물고기를 먹는다
 *
 * 아기 상어의 이동은 1초 걸리고, 물고기를 먹는데 걸리는 시간은 없다
 * 아기 상어가 먹을 수 있는 물고기가 있는 칸으로 이동했다면, 이동과 동시에 물고기를 먹는다
 * 물고기를 먹으면 그 칸은 빈 칸이 된다.
 *
 * 아기 상어는 자신의 크기와 같은 수의 물고기를 먹을 때 마다 크기가 1 증가한다
 * 예를 들어, 크기가 2인 아기 상어는 물고리를 2마리 먹으면 크기가 3이 된다.
 *
 * 공간의 상태가 주어졌을 때, 아기 상어가 몇 초 동안 엄마 상어에게 도움을 요청하지 않고
 * 물고기를 잡아 먹을 수 있는지 구하시오
 *
 * -입력-
 * 첫째 줄에 공간의 크기 N이 주어진다 (2 <= N <= 20)
 * 둘째 줄부터 N개의 줄에 공간의 상태가 주어진다
 * 0: 빈 칸
 * 1,2,3,4,5,6: 칸에 있는 물고기의 크기
 * 9: 아기 상어의 위치
 */
