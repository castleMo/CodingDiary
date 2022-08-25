/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42578?language=javascript
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
	const [c, r] = input;

	console.log('\n');
	const result = solution(c);

	console.log(result);

	process.exit();
});

const solution = (clothes) => {
	let answer = -1;

	const map = {};

	for (let i = 0; i < clothes.length; i++) {
		const [, category] = clothes[i];
		map[category] = map[category] ? map[category] + 1 : 2;
	}

	return answer + Object.values(map).reduce((pre, cur) => pre * cur);
};
