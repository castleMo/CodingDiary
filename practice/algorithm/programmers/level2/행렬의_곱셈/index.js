/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12949
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(JSON.parse(line));
}).on('close', () => {
	const [a1, a2, r] = input;

	console.log('\n');
	const result = solution(a1, a2);

	console.log(result);
	console.log(r);

	process.exit();
});

/**
 *
 * @param {number[][]} arr1
 * @param {number[][]} arr2
 * @returns
 */
function solution(arr1, arr2) {
	const answer = [];

	for (let i = 0; i < arr1.length; i++) {
		const temp = [];

		for (let j = 0; j < arr2[0].length; j++) {
			let sum = 0;
			for (let k = 0; k < arr2.length; k++) {
				sum += arr1[i][k] * arr2[k][j];
			}

			temp.push(sum);
		}

		answer.push(temp);
	}

	return answer;
}

/**
 * 10 + 6 + 6 = 22 | 8 + 12 + 2 = 22 | 6 + 3 + 2 = 11
 * 20 + 4 + 12 = 36 | 16 + 8 + 4 = 28 | 12 + 2 + 4 = 18
 * 15 + 2 + 12 = 29 | 12 + 4 + 4 = 20 | 9 + 1 + 4 = 14
 */
