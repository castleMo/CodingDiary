/**
 * @link https://www.acmicpc.net/problem/2606
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
	const [[n], [m], ...arr] = input.map(strToNumberArr);

	const result = solution(n, m, arr);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n 컴퓨터의 수
 * @param {number} m 네트워크 상에서 직접 연결되어 있는 컴퓨터 쌍의 수
 * @param {number[]} arr 네트워크 상에서 직접 연결되어 이쓴ㄴ 컴퓨터의 번호 쌍 배열
 */
function solution(n, m, arr) {
	const computers = [...Array(n).keys()].map((v) => v + 1);

	const linkMap = computers.reduce((obj, num) => {
		obj[num] = [];
		return obj;
	}, {});

	arr.forEach(([from, to]) => {
		linkMap[from].push(to);
		linkMap[to].push(from);
	});

	const stack = [...linkMap[1]];
	const visited = Array(n + 1).fill(false);
	visited[1] = true;

	let answer = 0;
	while (stack.length) {
		const num = stack.pop();

		if (visited[num]) {
			continue;
		}

		visited[num] = true;
		answer++;
		stack.push(...linkMap[num]);
	}

	return answer;
}
