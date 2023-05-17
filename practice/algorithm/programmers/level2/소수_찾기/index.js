/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/42839
 * @description
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
	const [n, r] = input;

	console.log('\n');
	const result = solution(n);

	console.log(result);
	console.log(result === Number(r));

	process.exit();
});

const solution = (nums) => {
	let answer = 0;

	const set = new Set();

	const recursive = (n, s, len) => {
		if (s.length === len) {
			const num = Number(s);
			if (num > 1) {
				set.add(num);
			}
			return;
		}

		for (let i = 0; i < n.length; i++) {
			const newS = n.substring(0, i) + n.substring(i + 1);
			recursive(newS, `${s}${n[i]}`, len);
		}
	};

	for (let i = 1; i <= nums.length; i++) {
		recursive(nums, '', i);
	}

	const arr = [...set];

	for (const n of arr) {
		let isPrime = true;
		for (let i = 2; i <= Math.sqrt(n); i++) {
			if (n % i === 0) {
				isPrime = false;
				break;
			}
		}

		if (isPrime) {
			answer++;
		}
	}

	return answer;
};
