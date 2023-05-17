/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42586
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
	const [p, s, r] = input;

	console.log('\n');
	const result = solution(p, s);

	console.log(result);
	console.log(r);
	console.log(r.join(',') === result.join(','));

	process.exit();
});

const solution = (progresses, speeds) => {
	const answer = [];

	const days = [];

	for (let i = 0; i < progresses.length; i++) {
		days.push(Math.ceil((100 - progresses[i]) / speeds[i]));
	}

	while (days.length) {
		let finishCnt = 1;
		let workingDay = days.shift();

		while (true) {
			if (days[0] <= workingDay) {
				finishCnt++;
				days.shift();
			} else {
				break;
			}
		}

		if (finishCnt) {
			answer.push(finishCnt);
		}
	}

	return answer;
};
