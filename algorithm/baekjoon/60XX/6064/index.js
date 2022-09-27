/**
 * @link https://www.acmicpc.net/problem/6064
 * @name 카잉 달력
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
	input.shift();

	const result = solution(input.map(strToNumberArr));

	console.log(result.join('\n'));

	process.exit();
});

// 최대 공약수
const gcd = (n1, n2) => {
	if (n2 === 0) {
		return n1;
	}

	return gcd(n2, n1 % n2);
};

// 최대 공배수
const lcm = (n1, n2) => {
	return (n1 * n2) / gcd(n1, n2);
};

/**
 *
 * @param {number[]} arr
 */
function solution(arr) {
	const answer = [];

	// for (const [m, n, x, y] of arr) {
	// 	const cur = [1, 1];
	// 	let cnt = 1;

	// 	while (cur[0] < x) {
	// 		cnt++;
	// 		cur[0]++;
	// 		cur[1] = (cur[1] + 1) % n;
	// 	}

	// 	const _lcm = lcm(m, n);

	// 	while (cnt < _lcm) {
	// 		if (cur[0] === x && cur[1] === y) {
	// 			break;
	// 		}

	// 		cnt += m;
	// 		cur[1] = (cur[1] + m) % n;
	// 	}

	// 	answer.push(_lcm < cnt ? -1 : cnt);
	// }

	for (const [m, n, x, y] of arr) {
		const last = lcm(m, n);
		const cur = [x, y];
		while (true) {
			if (last < cur[0] || last < cur[1]) {
				answer.push(-1);
				break;
			} else if (cur[1] < cur[0]) {
				cur[1] += n;
			} else if (cur[0] < cur[1]) {
				cur[0] += m;
			} else {
				answer.push(cur[0]);
				break;
			}
		}
	}

	return answer;
}
