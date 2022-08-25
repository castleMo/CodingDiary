/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/77484
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
	const [lottos, win_nums] = input;
	console.log('\n');
	const result = solution(lottos, win_nums);

	console.log(result);

	process.exit();
});

const solution = (lottos, win_nums) => {
	const ranking = {
		6: 1,
		5: 2,
		4: 3,
		3: 4,
		2: 5,
		1: 6,
		0: 6,
	};

	const { zeroCnt, winCnt } = lottos.reduce(
		(obj, curVal) => {
			if (curVal === 0) {
				obj.zeroCnt++;
			} else if (win_nums.includes(curVal)) {
				obj.winCnt++;
			}

			return obj;
		},
		{
			zeroCnt: 0,
			winCnt: 0,
		},
	);

	return [ranking[winCnt + zeroCnt], ranking[winCnt]];
};
