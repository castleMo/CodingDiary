/**
 * @link https://www.acmicpc.net/problem/11724
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
	const [[n, m], ...arr] = input.map(strToNumberArr);

	const result = solution(n, m, arr);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n 정점의 개수
 * @param {number} m 간선의 개수
 * @param {number[][]} arr 간선의 양 끝점 u와 v 배열
 */
function solution(n, m, arr) {
	let answer = 0;

	const nodes = new Array(n).fill(false);
	const visited = [false, ...nodes];
	const map = nodes
		.map((v, idx) => idx + 1)
		.reduce((obj, v) => {
			obj[v] = [];
			return obj;
		}, {});

	arr.forEach(([u, v]) => {
		map[u].push(v);
		map[v].push(u);
	});

	const dfs = (num) => {
		const stack = [...map[num]];

		while (stack.length) {
			const n = stack.pop();

			if (visited[n]) {
				continue;
			}

			visited[n] = true;
			stack.push(...map[n]);
		}
	};

	for (let i = 1; i < visited.length; i++) {
		if (visited[i]) {
			continue;
		}

		answer++;
		dfs(i);
	}

	return answer;
}

/**
 * 아직 방문하지 않은 노드가 있으면 answer을 증가시키고 DFS 실행
 */
