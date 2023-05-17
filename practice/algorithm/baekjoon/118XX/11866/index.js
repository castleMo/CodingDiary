/**
 * @link https://www.acmicpc.net/problem/11866
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
	const [N, K] = input[0].split(' ').map(Number);

	const result = solution(N, K);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} N
 * @param {number} K
 */
function solution(N, K) {
	const arr = [...Array(N).keys()].map((v) => v + 1);
	const answer = [];

	for (let i = 0; i < N; i++) {
		for (let j = 0; j < K; j++) {
			const num = arr.shift();
			if (j === K - 1) {
				answer.push(num);
			} else {
				arr.push(num);
			}
		}
	}

	return `<${answer.join(', ')}>`;
}

/**
 * 1번부터 N번까지 N명의 사람이 원을 이루면서 앉아 있다
 * 양의 정수 K가 주어진다 (K <= N)
 *
 * 순서대로 K번째 사람을 제거한다
 *
 * 위 과정은 N명의 사람이 모두 제거될 때까지 계속 된다
 *
 * 원에서 사람들이 제거되는 순서를 (N,K)-요세푸스 순열이라고 한다
 *
 * 예를들어 (7, 3)-요세푸스 순열은
 * <3, 6, 2, 7, 5, 1, 4>
 *
 * N과 K가 주어지면 (N, K)-요세푸스 순열을 구하라
 */
