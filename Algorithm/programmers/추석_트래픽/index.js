/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/17676
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
	const [lines] = input;

	const result = solution(lines);

	console.log(result);

	process.exit();
});

function solution(lines) {
	let answer = 0;

	const times = [];
	const START = 'START';
	const FINISH = 'FINISH';

	for (const line of lines) {
		const [, time, timeTaken] = line.split(' ');
		const [h, m, s] = time.split(':');

		const finishTime = (Number(s) + Number(m) * 60 + Number(h) * 3600) * 1000;
		const startTime =
			finishTime -
			Number(timeTaken.substring(0, timeTaken.length - 1)) * 1000 +
			1;

		times.push({ state: START, time: startTime });
		times.push({ state: FINISH, time: finishTime + 1000 });
	}

	times.sort((a, b) => {
		if (a.time - b.time < 0) {
			return -1;
		}

		return a - b;
	});

	let cnt = 0;
	for (const { state, time } of times) {
		if (state === START) {
			cnt++;
		} else {
			answer = answer > cnt ? answer : cnt;
			cnt--;
		}
	}

	return answer;
}
