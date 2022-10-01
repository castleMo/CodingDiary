/**
 * @link https://www.acmicpc.net/problem/9019
 * @name DSLR
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
	input.shift();

	const result = solution(input.map(strToNumberArr));

	console.log(result.join('\n'));

	process.exit();
});

const register = {
	/**
	 *
	 * @param {number} n
	 * @returns {number}
	 */
	D: (n) => {
		return (n * 2) % 10000;
	},
	/**
	 *
	 * @param {number} n
	 * @returns {number}
	 */
	S: (n) => {
		return n === 0 ? 9999 : n - 1;
	},
	/**
	 *
	 * @param {number} num
	 * @returns {number}
	 */
	L: (num) => {
		return (num % 1000) * 10 + Math.floor(num / 1000);
	},
	/**
	 *
	 * @param {number} num
	 * @returns {number}
	 */
	R: (num) => {
		return (num % 10) * 1000 + Math.floor(num / 10);
	},
};

/**
 *
 * @param {number[][]} arr
 */
function solution(arr) {
	const ans = [];

	const functions = ['D', 'S', 'L', 'R'];

	for (const [start, target] of arr) {
		const queue = [[start, '']];
		const visited = Array(10001).fill(false);
		visited[start] = true;

		while (queue.length) {
			const [n, str] = queue.shift();

			if (n === target) {
				ans.push(str);
				break;
			}

			for (const c of functions) {
				const num = register[c](n);

				if (10000 < num || num < 0) {
					continue;
				} else if (visited[num]) {
					continue;
				}

				visited[num] = true;

				queue.push([num, str + c]);
			}
		}
	}

	return ans;
}
