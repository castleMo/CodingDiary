/**
 * @link https://www.acmicpc.net/problem/2108
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
	const [n, ...nums] = input;

	const result = solution(n, nums);

	console.log(result.join('\n'));

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number[]} nums
 * @returns
 */
function solution(n, nums) {
	const answer = [];

	// 산술 평균 (소수점 첫째 자리에서 반올림한 값)
	const avg = Math.round(nums.reduce((sum, val) => sum + val, 0) / n);
	answer.push(avg);

	// 중앙 값
	nums.sort((a, b) => a - b);
	answer.push(nums[Math.floor(nums.length / 2)]);

	// 최빈 값 (최빈값 중 두번째로 작은 값)
	const cntMap = {};
	let arr = [];
	nums.forEach((v) => {
		cntMap[v] = cntMap[v] ? cntMap[v] + 1 : 1;
	});
	let maxCnt = 0;
	for (const k in cntMap) {
		if (maxCnt < cntMap[k]) {
			maxCnt = cntMap[k];
			arr = [Number(k)];
		} else if (maxCnt === cntMap[k]) {
			arr.push(Number(k));
		}
	}

	arr.sort((a, b) => a - b);
	answer.push(arr.length > 1 ? arr[1] : arr[0]);

	// 범위
	const max = Math.max(...nums);
	const min = Math.min(...nums);
	answer.push(max - min);

	return answer;
}

/**
 * 산술평균: N개의 수들의 합을 N으로 나눈 값
 * 중앙값: N개의 수들을 증가하는 순서로 나열했을 경우 그 중앙에 위치하는 값
 * 최빈값: N개의 수들 중 가장 많이 나타나는 값
 * 범위: N개의 수들 중 최댓값과 최솟값의 차이
 */
