/**
 * @link https://www.acmicpc.net/problem/1389
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];
const strToNumberArr = (str) => str.split(' ').map(Number);

rl.on('line', (line) => {
	input.push(strToNumberArr(line));
}).on('close', () => {
	const [[n, m], ...arr] = input;

	const result = solution(n, m, arr);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n 유저 수
 * @param {number} m 친구 관계 갯수
 * @param {number[]} relations 친구 관계 배열
 */
function solution(n, m, relations) {
	const users = [...Array(n).keys()].map((v) => v + 1);
	const userCnt = Array(n + 1).fill(0);
	const userRelMap = relations.reduce((obj, [f, t]) => {
		obj[f] = obj[f] ? [...obj[f], t] : [t];
		obj[t] = obj[t] ? [...obj[t], f] : [f];
		return obj;
	}, {});

	/**
	 *
	 * @param {number[]} friends
	 * @param {number} to
	 */
	const bfs = (me) => {
		const queue = [[me, 0]];
		const visited = Array(n + 1).fill(false);

		while (queue.length) {
			const [node, cnt] = queue.shift();

			if (visited[node]) {
				continue;
			}

			visited[node] = true;
			userCnt[me] += cnt;

			const rel = userRelMap[node];
			queue.push(...rel.map((v) => [v, cnt + 1]));
		}
	};

	for (const u of users) {
		bfs(u);
	}

	userCnt.shift();

	return userCnt.indexOf(Math.min(...userCnt)) + 1;
}
