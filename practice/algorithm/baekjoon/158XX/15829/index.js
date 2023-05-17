/**
 * @link https://www.acmicpc.net/problem/15829
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
	const [, str] = input;

	const result = solution(str);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {string} str
 */
function solution(str) {
	let answer = 0;

	const charMap = {};
	let num = 1;
	// 영어에는 총 26개의 알파벳이 존재하므로 a에는 1, b에는 2, c에는 3, ..., z에는 26으로 고유한 번호를 부여할 수 있다
	for (let i = 97; i <= 122; i++) {
		charMap[String.fromCharCode(i)] = num++;
	}

	// 가장 대표적인 방법은 항의 번호에 해당하는 만큼 특정한 숫자를 거듭제곱해서 곱해준 다음 더하는 것이 있다
	let r = 1;
	const m = 1234567891;

	for (let i = 0; i < str.length; i++) {
		const num = charMap[str[i]];
		answer += num * r;
		answer %= m;
		r *= 31;
		r %= m;
	}

	return answer;
}
