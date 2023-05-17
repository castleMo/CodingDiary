/**
 * @link https://www.acmicpc.net/problem/2805
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
	const [str, height] = input;
	const [n, m] = str.split(' ').map(Number);

	const result = solution(n, m, height.split(' ').map(Number));

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n 나무의 수
 * @param {number} m 상근이가 집으로 가져가려고 하는 나무의 길이
 * @param {number[]} heights 나무의 높이 배열
 */
function solution(n, m, heights) {
	let [max, min] = [Math.max(...heights), 0];
	let answer = 0;

	if (n === 1) {
		return heights[0] - m;
	}

	while (min <= max) {
		const mid = Math.floor((max + min) / 2);
		let sum = heights.reduce((_sum, val) => _sum + Math.max(val - mid, 0), 0);

		if (m <= sum) {
			if (answer < mid) {
				answer = mid;
			}
			min = mid + 1;
		} else {
			max = mid - 1;
		}
	}

	return answer;
}

/**
 * 상근이는 나무 M미터가 필요하다
 *
 * 상근이는 절단기에 높이 H를 지정해야 한다
 * 높이를 지정하면 톱날이 땅으로부터 H미터 위로 올라간다
 * 그다음, 한줄에 연속해있는 나무를 모두 절단해 버린다
 * 따라서, 높이가 H보다 큰 나무는 H 위의 부분이 잘릴 것이고, 낮은 나무는 잘리지 않을 것이다.
 *
 * 절단기에 설정할 수 있는 높이는 양의 정수 또는 0이다.
 *
 * 상근이는 환경에 매우 관심이 많기 때문에,
 * 나무를 필요한 만큼만 집으로 가져가려고 한다.
 * 이때, 적어도 M미터의 나무를 집에 가져가기 위해서 절단기에 설정할 수 있는 높이의 최댓값을 구하는 프로그램을 작성하시오.
 */
