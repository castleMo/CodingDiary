/**
 * @link https://www.acmicpc.net/problem/1966
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
	const [, ...testCase] = input;

	const tc = [];
	for (let i = 0; i < testCase.length; i += 2) {
		const nAndM = testCase[i].split(' ').map(Number);
		const docs = testCase[i + 1].split(' ').map(Number);

		tc.push([nAndM, docs]);
	}

	const result = solution(tc);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number[][][]} tcs
 */
function solution(tcs) {
	const answer = [];
	for (const [[n, m], docs] of tcs) {
		let cnt = 1;

		if (n === 1) {
			answer.push(cnt);
			continue;
		}

		const queue = docs.map((num, idx) => [num, idx]);
		let max = Math.max(...docs);

		while (true) {
			const [num, idx] = queue.shift();

			if (num === max) {
				if (idx === m) {
					answer.push(cnt);
					break;
				} else {
					max = Math.max(...queue.map(([v]) => v));
					cnt++;
				}
			} else {
				queue.push([num, idx]);
			}
		}
	}

	return answer;
}
