/**
 * @link https://www.acmicpc.net/problem/1991
 * @name 트리_순회
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
	const n = Number(input.shift());

	const result = solution(
		n,
		input.map((v) => v.split(' ')),
	);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {string[][]} arr
 */
function solution(n, arr) {
	const ans = ['', '', ''];

	const graph = {};

	arr.forEach(([c, l, r]) => {
		graph[c] = [l, r];
	});

	const recur = (char) => {
		const left = graph[char][0];
		const right = graph[char][1];

		// 전위 순회(preorder traversal)
		ans[0] += char;

		if (left !== '.') {
			recur(left);
		}

		// 중위 순회(inorder traversal)
		ans[1] += char;

		if (right !== '.') {
			recur(right);
		}

		// 후위 순회(postorder traversal)
		ans[2] += char;
	};

	recur('A');

	return ans;
}
