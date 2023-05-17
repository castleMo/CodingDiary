/**
 * @link https://www.acmicpc.net/problem/1676
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
	const [n] = input;
	let num = n;

	let answer = 0;
	while (5 <= num) {
		answer += Math.floor(num / 5);
		num /= 5;
	}

	console.log(answer);

	process.exit();
});

/**
 *
 * @param {number} num
 */
function solution(num) {
	let temp = BigInt(1);
	let cnt = 0;

	for (let i = 1; i <= num; i++) {
		temp *= BigInt(i);
	}

	const str = String(temp);
	for (let i = str.length - 1; 0 <= i; i--) {
		const char = str[i];
		if (char === '0') {
			cnt++;
		} else {
			break;
		}
	}

	return cnt;
}

/**
 * 팩토리얼에서 뒤에 0이 나오려면 10이 곱해져야 한다.
 * 그러므로, 원래 정석은 아래와 같이 2와 5의 개수를 각각 구해, 적은 수를 출력해줘야하는데,
 * 결국 2의 배수는 5의 배수보다 많기 때문에 5의 배수를 구하는게 최소값이 되므로
 * 5의 배수만을 구했다.
 */
