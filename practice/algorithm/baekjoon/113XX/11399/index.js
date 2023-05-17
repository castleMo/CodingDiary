/**
 * @link https://www.acmicpc.net/problem/11399
 */
const readline = require('readline');

const strToNumberArr = (str) => str.split(' ').map(Number);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const [n] = strToNumberArr(input[0]);
	const timeArr = strToNumberArr(input[1]);

	const result = solution(n, timeArr);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number[]} timeArr 각 사람이 돈을 인출하는데 걸리는 시간
 */
function solution(n, timeArr) {
	timeArr.sort((a, b) => a - b);

	for (let i = 1; i < timeArr.length; i++) {
		timeArr[i] += timeArr[i - 1];
	}

	return timeArr.reduce((a, b) => a + b);
}

/**
 * 인하은행에는 ATM이 1대밖에 없다
 * ATM앞에 N명의 사람들이 줄을 서있다
 * 사람은 1번부터 N번까지 번호가 매겨져 있으며,
 * i번 사람이 돈을 인출하는데 걸리는 시간은 Pi분이 걸린다
 * 각 사람이 돈을 인출하는데 필요한 시간의 합의 최솟값을 구하는 프로그램을 작성하시오.
 */
