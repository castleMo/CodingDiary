/**
 * @link https://www.acmicpc.net/problem/2609
 * @description
 * 
 * 
문제

두 개의 자연수를 입력받아 최대 공약수와 최소 공배수를 출력하는 프로그램을 작성하시오.
입력

첫째 줄에는 두 개의 자연수가 주어진다. 이 둘은 10,000이하의 자연수이며 사이에 한 칸의 공백이 주어진다.
출력

첫째 줄에는 입력으로 주어진 두 수의 최대공약수를, 둘째 줄에는 입력으로 주어진 두 수의 최소 공배수를 출력한다.

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
	const [n1, n2] = input[0].split(' ').map(Number);

	const result = func(n1, n2);

	console.log(result);

	process.exit();
});

// 최대공약수(Greatest Common Divisor, GCD)
const gcd = (m, n) => {
	if (n === 0) {
		return m;
	}

	return gcd(n, m % n);
};

const func = (n1, n2) => {
	const gcdResult = gcd(n1, n2);
	const lcm = (n1 * n2) / gcdResult; // 최소공배수(Lowest Common Multiple, LCM)

	return `${gcdResult}\n${lcm}`;
};
