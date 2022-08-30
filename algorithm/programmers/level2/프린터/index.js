/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42587?language=javascript
 * @description
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
	const [p, l, r] = input;

	console.log('\n');
	const result = solution(p, l);

	console.log(result);
	console.log(result === r);

	process.exit();
});

const solution = (priorities, location) => {
	let answer = 0;
	const v = `${location}-${priorities[location]}`;
	priorities = priorities.map((v, i) => [i, v]);

	let cnt = 0;

	while (priorities.length) {
		const cur = priorities.shift();
		let is = true;
		for (let i = 0; i < priorities.length; i++) {
			const [, curN] = priorities[i];
			if (cur[1] < curN) {
				is = false;
				break;
			}
		}

		if (!is) {
			priorities.push(cur);
			continue;
		}

		cnt++;
		if (v === `${cur[0]}-${cur[1]}`) {
			return cnt;
		}
	}
	return answer;
};
