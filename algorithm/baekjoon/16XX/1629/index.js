/**
 * @link https://www.acmicpc.net/problem/1629
 * @name 곱셈
 */
const readline = require('readline');

const strToNumberArr = (str) => str.split(' ').map(BigInt);

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout,
});

const input = [];

rl.on('line', (line) => {
	input.push(line);
}).on('close', () => {
	const [a, b, c] = strToNumberArr(input[0]);

	const recur = (n1, n2) => {
		if (n2 == 0) {
			return BigInt(1);
		} else {
			let temp = recur(n1, BigInt(parseInt(n2 / BigInt(2))));

			// 짝수 승이라면
			if (n2 % BigInt(2) == 0) {
				return (temp * temp) % c;
			}
			// 홀수 승이라먄, 1번더 n1을 곱해준다
			else {
				return (temp * temp * n1) % c;
			}
		}
	};

	console.log(Number(recur(a, b)));

	process.exit();
});
