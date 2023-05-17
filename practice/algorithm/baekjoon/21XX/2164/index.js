/**
 * @link https://www.acmicpc.net/problem/2164
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

	const result = solution(n);

	console.log(result);

	process.exit();
});

/**
 *
 * @param {number} n
 */
function solution(n) {
	//숫자를 2진법으로 변환
	const binArr = n.toString(2).split('');

	//n보다 작은 2^x 값 빼기
	binArr.shift();

	//남은수 10진법으로 변환
	const answer = parseInt(binArr.join(''), 2);

	//answer가 0이면 그 수는 2^x 이므로 n
	return answer ? answer * 2 : n;
}

/**
 * N장의 카드가 있다
 * 각각의 카드는 차례로 1부터 N까지의 번호가 붙어 있다
 * 1번카드가 제일 위에, N번 카드가 제일 아래인 상태로 순서대로 카드가 놓여 있다
 *
 * 카드가 한 장 남을 때까지 반복하게 된다
 *
 * 우선, 제일 위에 있는 카드를 바닥에 버린다
 * 그 다음, 제일 위에 있는 카드를 제일 아래에 있는 카드 밑으로 옮긴다
 *
 */
