/**
 * @link https://www.acmicpc.net/problem/1260
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

const strToNumberArr = (str) => str.split(' ').map(Number);

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const [n, m, v] = strToNumberArr(input.shift());

	const result = solution(n, m, v, input.map(strToNumberArr));

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number} n 정점의 갯수
 * @param {number} m 간선의 갯수
 * @param {number} v 탐색을 시작할 정점의 번호
 * @param {number[]} arr 간선을 연결하는 두 정점의 번호 배열
 */
function solution(n, m, v, arr) {
	const map = [...Array(n).keys()]
		.map((v) => v + 1)
		.reduce((obj, v) => {
			obj[v] = [];
			return obj;
		}, {});

	arr.forEach(([f, t]) => {
		map[f].push(t);
		if (!map[t].includes(f)) {
			map[t].push(f);
		}
	});

	for (const k in map) {
		map[k].sort((a, b) => a - b);
	}

	const dfs = () => {
		const stack = [v];
		const visited = Array(n + 1).fill(0);
		const result = [];

		while (stack.length) {
			const node = stack.pop();

			if (!visited[node]) {
				visited[node] = 1;
				result.push(node);
				stack.push(...[...map[node]].reverse());
			}
		}

		return result.join(' ');
	};

	const bfs = () => {
		const queue = [v];
		const visited = Array(n + 1).fill(0);
		const result = [];

		while (queue.length) {
			const node = queue.shift();

			if (!visited[node]) {
				visited[node] = 1;
				result.push(node);
				queue.push(...map[node]);
			}
		}

		return result.join(' ');
	};

	return [dfs(), bfs()];
}
