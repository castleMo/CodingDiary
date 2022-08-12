/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/81301
 * @description
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
	const [str] = input;

	console.log('\n');
	const result = solution(str);

	console.log(result);

	process.exit();
});

const solution = (str) => {
	let answer = '';

	const map = {
		ze: [0, 4],
		on: [1, 3],
		tw: [2, 3],
		th: [3, 5],
		fo: [4, 4],
		fi: [5, 4],
		si: [6, 3],
		se: [7, 5],
		ei: [8, 5],
		ni: [9, 4],
	};

	while (str.length > 0) {
		const char = str[0];
		if (!Number.isNaN(Number(char))) {
			answer += char;
			str = str.substring(1);
		} else {
			const [val, len] = map[`${char}${str[1]}`];
			answer += val;
			str = str.substring(len);
		}
	}

	return Number(answer);
};
