/**
 * @link https://www.acmicpc.net/problem/9251
 * @description
 * LCS(Longest Common Subsequence, 최장 공통 부분 수열)문제는 두 수열이 주어졌을 때, 모두의 부분 수열이 되는 수열 중 가장 긴 것을 찾는 문제이다.
 * 예를 들어, ACAYKP와 CAPCAK의 LCS는 ACAK가 된다.
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
	const [str1, str2] = input;
	const l1 = str1.length;
	const l2 = str2.length;

	const memo = Array.from(new Array(l1 + 1), () => new Array(l2 + 1));
	for (let i = 0; i <= l1; i++) {
		for (let j = 0; j <= l2; j++) {
			memo[i][j] = 0;
		}
	}

	for (let i = 1; i <= l1; i++) {
		for (let j = 1; j <= l2; j++) {
			if (str1.charAt(i - 1) === str2.charAt(j - 1)) {
				memo[i][j] = memo[i - 1][j - 1] + 1;
			} else {
				memo[i][j] = Math.max(memo[i - 1][j], memo[i][j - 1]);
			}
		}
	}

	console.log(memo[l1][l2]);

	process.exit();
});
