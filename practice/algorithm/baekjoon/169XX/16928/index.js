/**
 * @link https://www.acmicpc.net/problem/16928
 * @name 뱀과_사다리_게임
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
	const [n, m] = strToNumberArr(input.shift());

	const ladder = {};
	const snakes = {};

	for (let i = 0; i < n; i++) {
		const [from, to] = strToNumberArr(input[i]);
		ladder[from] = to;
	}

	for (let i = n; i < n + m; i++) {
		const [from, to] = strToNumberArr(input[i]);
		snakes[from] = to;
	}

	const result = solution(ladder, snakes);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {{[key: string]: number}} ladder 사다리
 * @param {{[key: string]: number}} snakes 뱀
 */
function solution(ladder, snakes) {
	let ans = 100;

	const queue = [[1, 0]];
	const visited = Array(101).fill(false);
	visited[0] = true;
	visited[1] = true;

	while (queue.length) {
		const [cur, cnt] = queue.shift();

		if (cur === 100) {
			ans = Math.min(ans, cnt);
			continue;
		}

		for (let i = 1; i <= 6; i++) {
			let next = cur + i;
			if (ladder[next]) {
				next = ladder[next];
			} else if (snakes[next]) {
				next = snakes[next];
			} else if (100 < next) {
				continue;
			}

			if (visited[next]) {
				continue;
			}

			visited[next] = true;

			queue.push([next, cnt + 1]);
		}
	}

	return ans;
}
