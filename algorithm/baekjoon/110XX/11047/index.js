/**
 * @link https://www.acmicpc.net/problem/11047
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
	const [n, k] = strToNumberArr(input.shift());

	const result = solution(n, k, input.map(Number));

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number} k
 * @param {number[]} coins
 */
function solution(n, k, coins) {
	let answer = 0;

	while (k > 0) {
		const coin = coins.pop();

		if (k < coin) {
			continue;
		}

		if (Math.floor(k / coin) > 0) {
			answer += Math.floor(k / coin);
			k = k % coin;
		}
	}

	return answer;
}

/**
 * 동전은 총 N 종류이고, 각각의 동전을 매우 많이 가지고 있다
 * 동전을 적절히 사용해서 그 가치의 합을 K로 만들려고 한다.
 * 이때 필요한 동전 개수의 최솟값을 구하라
 */
