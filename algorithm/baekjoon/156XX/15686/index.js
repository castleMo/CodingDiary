/**
 * @link https://www.acmicpc.net/problem/15686
 * @name 치킨_배달
 */
const readline = require('readline');

/**
 *
 * @param {string} str
 * @returns {number[]}
 */
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
	const home = [];
	const chicken = [];
	input.forEach((str, r) => {
		strToNumberArr(str).forEach((num, c) => {
			if (num === 1) {
				home.push([r, c]);
			} else if (num === 2) {
				chicken.push([r, c]);
			}
		});
	});

	const result = solution(n, m, home, chicken);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number} m 치킨집의 개수
 * @param {number[][]} home 집의 위치 [r,c]
 * @param {number[][]} chicken 치킨집 위치 [r,c]
 */
function solution(n, m, home, chicken) {
	let ans = Number.MAX_SAFE_INTEGER;

	/**
	 *
	 * @param {number} r1
	 * @param {number} c1
	 * @param {number} r2
	 * @param {number} c2
	 * @returns {number}
	 */
	const getDistance = (r1, c1, r2, c2) => {
		return Math.abs(r1 + 1 - (r2 + 1)) + Math.abs(c1 + 1 - (c2 + 1));
	};

	const calc = (arr) => {
		let sum = 0;
		for (const [r1, c1] of home) {
			let temp = Number.MAX_SAFE_INTEGER;
			for (const [r2, c2] of arr) {
				temp = Math.min(temp, getDistance(r1, c1, r2, c2));
			}
			sum += temp;
		}

		ans = Math.min(ans, sum);
	};

	const recur = (cur, arr) => {
		if (cur.length === m) {
			calc(cur);
			return;
		}

		for (let i = 0; i < arr.length; i++) {
			recur(
				[...cur, arr[i]],
				arr.filter((v, idx) => i < idx),
			);
		}
	};

	recur([], [...chicken]);

	return ans;
}
