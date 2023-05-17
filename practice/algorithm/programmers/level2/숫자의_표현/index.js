/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12924
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
	const [n, r] = input;

	console.log('\n');
	const result = solution(n);

	console.log(result);
	console.log(result === r);

	process.exit();
});

/**
 *
 * @param {number} n
 * @returns
 */
function solution(n) {
	let answer = n % 2 === 1 ? 2 : 1;

	let sum = 0;
	let max = 1;
	let min = 1;

	if (n === 1) {
		return 1;
	}

	while (max <= n / 2) {
		if (sum < n) {
			sum += max;
			max += 1;
		} else if (sum === n) {
			answer++;
			sum += max;
			max += 1;
		} else {
			sum -= min;
			min += 1;
		}
	}

	return answer;
}

// 시간 초과
// function solution(n) {
// 	let answer = 0;

// 	const queue = [...Array(n).keys()].map((v) => {
// 		const val = v + 1;
// 		return [val, val];
// 	});

// 	while (queue.length) {
// 		const [num, sum] = queue.shift();

// 		if (sum === n) {
// 			answer++;
// 			continue;
// 		} else if (n < sum) {
// 			continue;
// 		}

// 		const newNum = num + 1;

// 		queue.push([newNum, sum + newNum]);
// 	}

// 	return answer;
// }
