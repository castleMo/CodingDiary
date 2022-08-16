/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/86051
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
	const [n, r] = input;

	console.log('\n');
	const result = solution(n);

	console.log(result);
	console.log(r);
	console.log(r === result);

	process.exit();
});

const solution = (numbers) => {
	let answer = 0;

	for (let i = 0; i < 10; i++) {
		if (!numbers.includes(i)) {
			answer += i;
		}
	}

	return answer;
};

const solution2 = (numbers) => {
	return 45 - numbers.reduce((num, curNum) => num + curNum);
};
