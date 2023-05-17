/**
 * @link https://www.acmicpc.net/problem/18111
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
	const [str, ...arr] = input;
	const [n, m, b] = str.split(' ').map(Number);

	const result = solution(
		n,
		m,
		b,
		arr.map((s) => s.split(' ').map(Number)),
	);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n 세로
 * @param {number} m 가로
 * @param {number} b 작업을 시작할 때 인벤토리에 있는 블록 갯수
 * @param {number[]} arr 땅의 높이 배열
 */
function solution(n, m, b, arr) {
	const flatArr = arr.flat(2);
	const minHeight = Math.min(...flatArr);
	const maxHeight = Math.max(...flatArr);
	let minTime = Number.MAX_SAFE_INTEGER;
	let height = 0;

	for (let curH = minHeight; curH <= maxHeight; curH++) {
		let time = 0;
		let blocks = b;
		let diffH = 0;

		for (let i = 0; i < n; i++) {
			for (let j = 0; j < m; j++) {
				const blockH = arr[i][j];
				diffH = Math.abs(blockH - curH);

				if (blockH < curH) {
					time += diffH;
					blocks -= diffH;
				} else if (curH < blockH) {
					time += diffH * 2;
					blocks += diffH;
				}
			}
		}

		if (0 <= blocks) {
			minTime = Math.min(minTime, time);
			if (minTime === time) {
				height = Math.max(height, curH);
			}
		}
	}

	return `${minTime} ${height}`;
}

/**
 * 마인크래프트는 1 × 1 × 1(세로, 가로, 높이) 크기의 블록들로 이루어진 3차원 세계
 *
 * 목재를 충분히 모은 lvalue는 집을 짓기로 하였다.
 * 땅의 높이를 모두 동일하게 만드는 ‘땅 고르기’ 작업을 해야 한다
 *
 * lvalue는 세로 N, 가로 M 크기의 집터를 골랐다.
 * 집터 맨 왼쪽 위의 좌표는 (0, 0)이다.
 *
 * 우리의 목적은 이 집터 내의 땅의 높이를 일정하게 바꾸는 것이다.
 * 우리는 다음과 같은 두 종류의 작업을 할 수 있다.
 * 1. 좌표 (i, j)의 가장 위에 있는 블록을 제거하여 인벤토리에 넣는다.
 * 2. 인벤토리에서 블록 하나를 꺼내어 좌표 (i, j)의 가장 위에 있는 블록 위에 놓는다.
 * 1번 작업은 2초가 걸리며, 2번 작업은 1초가 걸린다.
 *
 * 밤에는 무서운 몬스터들이 나오기 때문에 최대한 빨리 땅 고르기 작업을 마쳐야 한다.
 * ‘땅 고르기’ 작업에 걸리는 최소 시간과 그 경우 땅의 높이를 출력하시오.
 *
 * 단, 집터 아래에 동굴 등 빈 공간은 존재하지 않으며, 집터 바깥에서 블록을 가져올 수 없다.
 * 또한, 작업을 시작할 때 인벤토리에는 B개의 블록이 들어 있다.
 * 땅의 높이는 256블록을 초과할 수 없으며, 음수가 될 수 없다.
 */

// while (true) {
// 	let maxCnt = 0;
// 	let maxHeight = 0;
// 	let height = 0;
// 	const map = {};

// 	for (let i = 0; i < n; i++) {
// 		for (let j = 0; j < m; j++) {
// 			const h = arr[i][j];
// 			map[h] = map[h] ? map[h] + 1 : 1;
// 			maxHeight = Math.max(h, height);
// 			if (maxCnt < map[h]) {
// 				maxCnt = map[h];
// 				height = Math.max(h, height);
// 			} else if (maxCnt === map[h]) {
// 				height = Math.max(h, height);
// 			}
// 		}
// 	}

// 	let insertCnt = 0; // 채워놓을 블럭 갯수
// 	let deleteCnt = 0; // 캐야하는 블럭 갯수
// 	for (const k in map) {
// 		const h = Number(k);
// 		if (h < height) {
// 			insertCnt++;
// 		} else if (height < h) {
// 			deleteCnt++;
// 		}
// 	}

// 	if (insertCnt <= b && height === maxHeight && deleteCnt === 0) {
// 		answer[0] += insertCnt;
// 		answer[1] += height;
// 		break;
// 	} else {
// 		if (height === maxHeight) {
// 			for (let i = 0; i < n; i++) {
// 				for (let j = 0; j < m; j++) {
// 					if (height === arr[i][j]) {
// 						arr[i][j] -= 1;
// 						answer[0] += 2;
// 					}
// 				}
// 			}
// 		} else {
// 			for (let i = 0; i < n; i++) {
// 				for (let j = 0; j < m; j++) {
// 					if (height < arr[i][j]) {
// 						const cnt = arr[i][j] - height;
// 						arr[i][j] = height;
// 						answer[0] += cnt * 2;
// 					}
// 				}
// 			}
// 		}
// 	}
// }
