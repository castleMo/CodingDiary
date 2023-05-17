/**
 * @ljnk https://www.acmicpc.net/problem/11725
 * @name 트리의_부모_찾기
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

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number[]} arr
 */
function solution(n, arr) {
	const ans = Array(n).fill(undefined);

	const map = {};

	arr.forEach(([i, j]) => {
		map[i] = map[i] ? [...map[i], j] : [j];
		map[j] = map[j] ? [...map[j], i] : [i];
	});

	const stack = [];
	map[1].forEach((v) => {
		stack.push([1, v]);
	});

	while (stack.length) {
		const [p, c] = stack.pop();
		ans[c] = p;

		map[c].forEach((v) => {
			if (v !== p) {
				stack.push([c, v]);
			}
		});
	}

	ans.shift();
	ans.shift();
	return ans;
}
