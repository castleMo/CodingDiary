/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/62048
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
	const [w, h, r] = str.split(',').map(Number);

	console.log('\n');
	const result = solution(w, h);

	console.log(r);
	console.log(result);
	console.log(result === r);

	process.exit();
});

const solution = (w, h) => {
	const totalCnt = w * h;

	const getGcd = (n1, n2) => {
		if (n2 === 0) {
			return n1;
		}

		return getGcd(n2, n1 % n2);
	};

	const gcd = getGcd(w, h);

	return totalCnt - (w + h - gcd);
};
