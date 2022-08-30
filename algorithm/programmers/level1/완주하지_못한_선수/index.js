/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42576?language=javascript
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
	const [p, c, r] = input;

	console.log('\n');
	const result = solution(p, c);

	console.log(result);
	console.log(r);
	console.log(r === result);

	process.exit();
});

const solution = (participant, completion) => {
	const map = {};

	for (const p of participant) {
		map[p] = map[p] ? map[p] + 1 : 1;
	}

	for (const c of completion) {
		map[c]--;
	}

	for (const k in map) {
		if (map[k] > 0) {
			return k;
		}
	}
};
