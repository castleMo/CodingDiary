/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/70129
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
	const [s, r] = input;

	console.log('\n');
	const result = solution(s);

	console.log(result);
	console.log(result.join() === JSON.parse(r).join());

	process.exit();
});

const convertBinaryString = (num) => {
	const arr = [];

	while (0 < num) {
		const r = num % 2;
		num = Math.floor(num / 2);
		arr.push(r);
	}

	return arr.reverse().join('');
};

const solution = (s) => {
	let removeZeroCnt = 0;
	let tryCnt = 0;

	while (s !== '1') {
		tryCnt++;
		const prevLen = s.length;
		const oneCnt = [...s].filter((v) => v === '1').length;
		removeZeroCnt += prevLen - oneCnt;
		s = convertBinaryString(oneCnt);
	}

	return [tryCnt, removeZeroCnt];
};
