/**
 * @link https://www.acmicpc.net/problem/2407
 * @name 조합
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
	const [n, m] = strToNumberArr(input.shift());

	const result = solution(n, m);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number} m
 */
function solution(n, m) {
	const dp = [...Array(n + 1)].map(() => Array(n + 1).fill('0'));

	dp[0][0] = '1';
	dp[1][0] = '1';
	dp[1][1] = '1';

	/**
	 *
	 * @param {string} num1
	 * @param {string} num2
	 */
	const calc = (num1, num2) => {
		let result = '';
		let sum = 0;

		while (0 < num1.length || 0 < num2.length || 0 < sum) {
			if (0 < num1.length) {
				sum += Number(num1[num1.length - 1]);
				num1 = num1.slice(0, -1);
			}

			if (0 < num2.length) {
				sum += Number(num2[num2.length - 1]);
				num2 = num2.slice(0, -1);
			}

			result += String(sum % 10); // 일의 자리
			sum = Math.floor(sum / 10);
		}

		return result.split('').reverse().join('');
	};

	for (let i = 2; i <= n; i++) {
		for (let j = 0; j <= i; j++) {
			if (i === j || j === 0) {
				dp[i][j] = '1';
			} else {
				// n C r = n-1Cr + n-1Cr-1
				dp[i][j] = calc(dp[i - 1][j], dp[i - 1][j - 1]);
			}
		}
	}

	return dp[n][m];
}

// 너무 큰수는 계산이 안됨
// function solution(n, m) {
// 	const factorial = (num) => {
// 		let sum = 1;

// 		for (let i = 2; i <= num; i++) {
// 			sum *= i;
// 		}

// 		return sum;
// 	};

// 	const permutation = (start, end) => {
// 		let sum = start;

// 		for (let i = start - 1; i >= end; i--) {
// 			sum *= i;
// 		}

// 		return sum;
// 	};

// 	return permutation(n, n - m + 1) / factorial(m);
// }

/**
 * 계승 (팩토리얼, factorial)
 * - 1부터 양의 정수 n까지를 곱한 것
 * 표기법: n!
 * ex) 5! = 1 * 2 * 3 * 4 * 5
 *
 *
 * 수열 (퍼뮤테이션, permutation)
 * - n의 수를 m 까지 n-1 씩하여 곱한 것
 * 표기법: nPm
 * ex) 30P6 = 30 * 29 * 28 * 27 * 26 * 25
 *
 *
 * 조합 (콤비네이션, combination)
 * - 순서를 따지지 않은 숫자의 집합
 * 표기법: nCm
 * ex) nCm = nPm / m!
 *     30C6 = 30P6 / 6!
 */
