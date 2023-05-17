/**
 * @link https://school.programmers.co.kr/learn/courses/30/lessons/12911
 * @name 다음_큰_숫자
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
	const [n, r] = input;

	console.log('\n');
	const result = solution(n);

	console.log(result);
	console.log(result === r);

	process.exit();
});

/**
 *
 * @param {number} n
 */
function solution(n) {
	const getOneCnt = (str) => {
		let cnt = 0;
		for (let i = 0; i < str.length; i++) {
			if (str[i] === '1') {
				cnt++;
			}
		}
		return cnt;
	};

	let binary = n.toString(2);
	let oneCnt = getOneCnt(binary);
	let ans = n + 1;

	while (true) {
		const b = ans.toString(2);
		const cnt = getOneCnt(b);
		if (cnt === oneCnt) {
			break;
		}
		ans++;
	}

	return ans;
}

/**
 * 자연수 n 이 주어졌을 때, n의 다음 큰 숫자는 다음과 같이 정의 한다
 * 1. n의 다음 큰 숫자는 n보다 큰 자연수이다
 * 2. n의 다음 큰 숫자와 n은 2진수로 변환했을 때 1의 갯수가 같다
 * 3. n의 다음 큰 숫자는 조건 1,2를 만족하는 수 중 가장 작은 수이다
 */
