/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12899
 * @description
 */
const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(Number(line));
}).on('close', () => {
	console.log('\n');
	const result = input.map(solution);

	console.log(result.join(','));
	console.log('1,2,4,11,41,42,44,111,112,114');

	process.exit();
});

const solution = (n) => {
	let answer = '';
	const nums = [4, 1, 2];

	/**
	 * n을 3으로 나눈 나머지가
	 * 0일때는 4
	 * 1일때는 1
	 * 2일때는 2를 넣어준다
	 * 나머지가 0이라면 몫에서 1일 빼준다
	 */
	while (n) {
		const r = n % 3; // 나머지
		const q = Math.floor(n / 3); // 몫

		answer = `${nums[r]}${answer}`;
		n = r === 0 ? q - 1 : q;
	}

	return answer;
};
