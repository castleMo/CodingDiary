/**
 * @link https://www.acmicpc.net/problem/5525
 * @name IOIOI
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
	const [n, m, s] = input;

	const result = solution(Number(n), Number(m), s);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 * @param {number} m s의 길이
 * @param {string} s
 */
function solution(n, m, s) {
	let answer = 0;

	for (let i = 0; i < m; i++) {
		let j = 0; // IOI의 길이 (IOI면 1, IOIOI면 2)

		if (s[i] === 'O') {
			continue;
		}

		while (s[i + 1] === 'O' && s[i + 2] === 'I') {
			j++;

			if (j === n) {
				j--; // 중복을 막기 위해 -1 해준다
				answer++;
			}

			i += 2;
		}

		j = 0;
	}

	return answer;
}
