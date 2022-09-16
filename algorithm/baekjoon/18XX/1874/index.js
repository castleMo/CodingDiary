/**
 * @link https://www.acmicpc.net/problem/1874
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
	const [n, ...arr] = input;

	solution(n, arr);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number[]} sequence // 수열
 */
function solution(n, sequence) {
	const answer = [];
	const stack = [];
	const strPlus = '+';
	const strMinus = '-';
	const arr = [...Array(n).keys()].map((v) => v + 1);

	let ai = 0; // arr index
	let si = 0; // sequence index
	while (si < sequence.length) {
		if (stack[stack.length - 1] !== sequence[si]) {
			stack.push(arr[ai++]);
			answer.push(strPlus);
		}

		if (stack[stack.length - 1] === sequence[si]) {
			stack.pop();
			answer.push(strMinus);
			si++;
		} else {
			// stack의 마지막 값이 sequence[si]와 다르면 해결 못하는 문제
			if (ai >= arr.length) {
				console.log('NO');
				return;
			}
		}
	}

	console.log(answer.join('\n'));
}
