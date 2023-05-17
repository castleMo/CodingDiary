/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42895
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
	const [n, ns, r] = input;

	console.log('\n');
	const result = solution(n, ns);

	console.log(result);
	console.log(result === r);

	process.exit();
});

const solution = (n, number) => {
	if (n === number) {
		return 1;
	}

	const memo = [...new Array(9)].map((v, idx) =>
		idx === 0 ? new Set() : new Set([Number(String(n).repeat(idx))]),
	);

	const calc = (i) => {
		for (let j = 1; j < i; j++) {
			for (const n1 of memo[j]) {
				for (const n2 of memo[i - j]) {
					const plus = n1 + n2;
					const minus = n1 - n2;
					const multiplied = n1 * n2;
					const divided = Math.floor(n1 / n2);

					memo[i].add(plus);
					memo[i].add(minus);
					memo[i].add(multiplied);
					divided !== Infinity && memo[i].add(divided);
				}
			}
		}
	};

	// 최솟값이 8보다 크면 -1을 return 합니다.
	for (let i = 2; i <= 8; i++) {
		calc(i);

		if (memo[i].has(number)) {
			return i;
		}
	}

	return -1;
};
