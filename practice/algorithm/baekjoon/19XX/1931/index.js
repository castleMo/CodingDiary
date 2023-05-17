/**
 * @link https://www.acmicpc.net/problem/1931
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
	const n = Number(input.shift());
	const arr = input.map((s) => strToNumberArr(s));

	const result = solution(n, arr);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number[][]} arr 회의의 시작시간과 끝나는 시간 이중 배열
 */
function solution(n, arr) {
	const answer = [];

	// 종료시간이 작은순으로 정렬
	// 종료 시간이 같다면 시작시간이 작은순으로 정렬
	arr.sort((a, b) => (a[1] === b[1] ? a[0] - b[0] : a[1] - b[1]));

	// 현재 시작시간과 과거 종료시간을 비교
	let prev = 0;
	arr.forEach((v) => {
		if (prev <= v[0]) {
			prev = v[1];
			answer.push(v);
		}
	});

	return answer.length;
}
